
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Send,
} from "lucide-react";

const CONTACT_EMAIL = "hello@rosedsigns.com";

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(
      `New project enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nService: ${service || "Not specified"}\n\nProject details:\n${message}`
    );

    setStatus("Opening your email application…");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <p className="eyebrow">LET'S CREATE SOMETHING MEANINGFUL</p>
          <h1>
            Have a vision?
            <br />
            <span>Let's bring it to life.</span>
          </h1>
          <p className="contact-intro">
            Whether you're starting with an idea or ready to take your brand
            to the next level, we'd love to hear what you're imagining.
          </p>
          <a className="contact-scroll-link" href="#contact-form">
            Tell us about your project <ArrowRight size={17} />
          </a>
        </div>
        <div
          className="contact-hero-decoration"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(23,21,20,.22), rgba(23,21,20,.72)), url('/images/contact-workspace.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span>R</span>
          <span className="contact-decoration-line" />
        </div>
      </section>

      <section className="contact-main" id="contact-form">
        <div className="contact-details">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            Good things
            <br />
            start with a <em>hello.</em>
          </h2>
          <p className="contact-details-copy">
            Share a little about your goals, your ideas, and what you'd like
            to create. We'll take it from there.
          </p>

          <div className="contact-info-list">
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-info-item">
              <span className="contact-info-icon">
                <Mail size={20} />
              </span>
              <span>
                <small>EMAIL US</small>
                <strong>{CONTACT_EMAIL}</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={20} />
              </span>
              <span>
                <small>BASED IN</small>
                <strong>India · Working everywhere</strong>
              </span>
            </div>

            <div className="contact-note">
              <MessageCircle size={19} />
              <p>
                Have a quick question? Send us an email and tell us what you
                have in mind.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-form-heading">
            <span>01 / PROJECT ENQUIRY</span>
            <p>Tell us a little about what you need.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                Your name <span>*</span>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Email address <span>*</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label>
              Brand / company
              <input
                type="text"
                name="company"
                placeholder="Your business name (optional)"
                autoComplete="organization"
              />
            </label>

            <label>
              What can we help you with?
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Website Design">Website Design</option>
                <option value="Social Media">Social Media</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Creative Direction">Creative Direction</option>
                <option value="Multiple Services">Multiple Services</option>
                <option value="Something Else">Something Else</option>
              </select>
            </label>

            <label>
              Tell us about your project <span>*</span>
              <textarea
                name="message"
                rows={5}
                placeholder="A little about your brand, your goals, and what you have in mind..."
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Send project enquiry <Send size={17} />
            </button>

            <p className="contact-form-disclaimer">
              This form opens your email application with your enquiry
              pre-filled. You can review and send it from there.
            </p>

            {status && (
              <p className="contact-form-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-bottom">
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>
          Let's make your
          <br />
          <em>brand unforgettable.</em>
        </h2>
        <a href={`mailto:${CONTACT_EMAIL}`}>
          Start a conversation <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default Contact;
