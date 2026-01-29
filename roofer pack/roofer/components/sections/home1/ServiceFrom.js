"use client";
import { useState } from "react";

export default function ServiceFrom() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setError("");

    const payload = {
      name: e.target.username.value,
      email: e.target.email.value,
      phone: e.target.number.value,
      message: e.target.message?.value || "",
    };

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json();
      setLoading(false);

      if (r.ok) {
        setOk(true);
        e.target.reset();
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to send message.");
    }
  };

  return (
    <section className="service__from">
      <div className="auto_container">
        <div className="from__one">
          <div className="from__left">
            <h3>Request For A Service</h3>
          </div>

          <div className="from__content">
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="from__inner">
                <div className="form-group">
                  <input type="text" name="username" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <input type="text" name="number" placeholder="Phone number" required />
                </div>



                <div className="message-btn">
                  <div className="service__btn btn-one">
                    <button className="btn__submit" type="submit" disabled={loading}>
                      <span>{loading ? "Sending..." : "Submit Now"}</span>
                    </button>
                  </div>
                </div>

                {ok && <p style={{ marginTop: 10 }}>✅ Thanks! We received your request.</p>}
                {error && <p style={{ marginTop: 10 }}>❌ {error}</p>}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
