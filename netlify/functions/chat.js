// netlify/functions/chat.js

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed. Use POST." }),
    };
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Missing OPENAI_API_KEY in Netlify env vars." }),
      };
    }

    const payload = JSON.parse(event.body || "{}");
    const msgs = payload.messages;

    // ✅ Expecting an array like: [{role:"user"/"assistant", content:"..."}]
    if (!Array.isArray(msgs) || msgs.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "messages[] is required." }),
      };
    }

    // ✅ limit to last 10 messages to reduce cost + avoid long prompts
    const recent = msgs.slice(-10).map((m) => ({
      role: m.role,
      content: String(m.content || ""),
    }));

    // safety: ensure last user message exists
    const last = recent[recent.length - 1];
    if (!last || last.role !== "user" || !last.content.trim()) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Last message must be a non-empty user message." }),
      };
    }

    const resp = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        input: [
          {
            role: "system",
            content:
              "You are a friendly portfolio assistant. Keep answers short, clear, and helpful. If asked about skills/projects, respond like a candidate. Avoid sensitive info.",
          },
          ...recent,
        ],
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return {
        statusCode: resp.status,
        headers,
        body: JSON.stringify({
          error: data?.error?.message || "OpenAI error",
        }),
      };
    }

    const reply =
      data.output_text ||
      "Thanks! Ask me anything about my projects, skills, or resume.";

    return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Server error", details: String(err) }),
    };
  }
};
