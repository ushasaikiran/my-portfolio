export const handler = async (event) => {
  try {
    // CORS (safe even if same-origin)
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    };

    // Preflight
    if (event.httpMethod === "OPTIONS") {
      return { statusCode: 200, headers, body: "" };
    }

    // Only POST
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const { message } = JSON.parse(event.body || "{}");

    if (!message || typeof message !== "string") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing message" }),
      };
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "OPENAI_API_KEY is not set" }),
      };
    }

    const resp = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input:
          `You are a helpful AI assistant on a portfolio website. ` +
          `Answer concisely and friendly.\n\nUser: ${message}`,
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: data }),
      };
    }

    const reply = data.output_text || "Sorry, I couldn't generate a response.";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: e?.message || "Server error" }),
    };
  }
};
