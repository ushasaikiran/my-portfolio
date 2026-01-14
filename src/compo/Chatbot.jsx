import { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! 👋 Ask me anything about my projects, skills, or resume." },
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const endRef = useRef(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(e) {
     e.preventDefault();

  const trimmed = text.trim();
  if (!trimmed || loading) return;

  // add user message immediately to UI
  const nextMessages = [...messages, { role: "user", content: trimmed }];
  setMessages(nextMessages);
  setText("");
  setLoading(true);

  try {
    const res = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: nextMessages }), // ✅ FIXED
    });

    // Try JSON first, fallback to text
    let data;
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      data = await res.json();
    } else {
      const t = await res.text();
      data = { error: t };
    }

    if (!res.ok) {
      // ✅ Show friendly 429 + other server errors
      const msg =
        data?.error ||
        (res.status === 429
          ? "Too many requests 😅 Please wait 20–30 seconds and try again."
          : `Request failed (${res.status}). Please try again.`);
      throw new Error(msg);
    }

    // success
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply || "✅ (No reply returned)" },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: `⚠️ ${err.message}` }, // ✅ show real reason
    ]);
    console.error(err);
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      {/* Floating button */}
      <button
        className="chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      <div className={`chat-panel ${open ? "open" : ""}`}>
        <div className="chat-header">
          <div>
            <div className="chat-title">AI Assistant</div>
            <div className="chat-subtitle">Ask about skills, projects, resume</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="chat-body">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              <div className="chat-bubble">{m.content}</div>
            </div>
          ))}

          {loading && (
            <div className="chat-msg assistant">
              <div className="chat-bubble typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        <form className="chat-input" onSubmit={sendMessage}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message…"
            aria-label="Message"
          />
          <button type="submit" disabled={loading || !text.trim()}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}
