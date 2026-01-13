import { useEffect, useRef, useState } from "react";
import "./Contact.css";


function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const sectionRef = useRef(null);
  useEffect(() => {
  const el = sectionRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) el.classList.add("animate-in");
    },
    { threshold: 0.15 }
  );

  observer.observe(el);
  return () => observer.disconnect();
}, []);

  const FORMSPREE_URL = "https://formspree.io/f/xzddbanq"; // <-- replace this

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000);
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        const msg =
          data?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section ref={sectionRef} className="contact contact-anim" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-sub">
        Send me a message and I’ll get back to you shortly.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <input type="text" name="subject" placeholder="Subject" required />

        <textarea
          name="message"
          placeholder="Your message..."
          rows="6"
          required
        />

        <button
          type="submit"
  className={`contact-btn ${status === "sending" ? "sending" : ""}`}
  disabled={status === "sending"}
>
  {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="form-msg success">
            ✅ Message sent! I’ll reply soon.
          </p>
        )}

        {status === "error" && (
          <p className="form-msg error">❌ {errorMsg}</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
