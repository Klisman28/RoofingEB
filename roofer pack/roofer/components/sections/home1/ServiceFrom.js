"use client";
import { useState } from "react";

export default function ServiceFrom() {
  const [form, setForm] = useState({ username: "", email: "", number: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "+50233773326"; // tu WhatsApp con código país, sin + ni guiones
    const msg =
      `Request For Service%0A` +
      `Name: ${form.username}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.number}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
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
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    required
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone number"
                    required
                    value={form.number}
                    onChange={(e) => setForm({ ...form, number: e.target.value })}
                  />
                </div>

                <div className="message-btn">
                  <div className="service__btn btn-one">
                    <button className="btn__submit" type="submit">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

