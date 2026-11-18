
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  MessageCircle,
  Lightbulb,
  Target,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Communication comes first",
    description:
      "We believe the best creative partnerships begin with listening, asking the right questions and keeping conversations clear.",
    quote: "Every good idea deserves to be understood.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Ideas grow together",
    description:
      "Creative work becomes stronger when different perspectives come together. Your insight is an important part of the process.",
    quote: "Collaboration makes creativity stronger.",
  },
  {
    number: "03",
    icon: Target,
    title: "Purpose behind every detail",
    description:
      "We aim to make creative decisions that support your brand, connect with your audience and serve a clear purpose.",
    quote: "Beautiful work should have a reason.",
  },
];

const commitments = [
  "Understand your goals before suggesting solutions",
  "Keep project communication clear and consistent",
  "Explain creative decisions and recommendations",
  "Value your feedback throughout the process",
  "Focus on agreed project scope and deliverables",
];

function Testimonials() {
  return (
    <main className="testimonials-page">
      <section className="testimonials-hero">
        <div className="testimonials-hero-copy">
          <span className="eyebrow"><i /> THE PEOPLE BEHIND THE IDEAS</span>
          <h1>
            Great work begins
            <br />
            with <em>great connections.</em>
          </h1>
          <p>
            We believe meaningful creative work grows from trust,
            collaboration and a shared understanding of what matters
            to your brand.
          </p>
          <Link className="button-primary" to="/contact">
            Let's Connect <ArrowRight size={17} />
          </Link>
        </div>

        <div className="testimonials-hero-visual">
          <img
            src="/images/client-experience.jpg"
            alt="People collaborating around a table"
          />
          <div className="testimonials-hero-caption">
            <HeartHandshake />
            <span>
              <strong>Built on collaboration</strong>
              <small>Ideas are better when shared</small>
            </span>
          </div>
        </div>
      </section>

      <section className="testimonials-intro">
        <span>✦ THE ROSEDSIGNS PHILOSOPHY</span>
        <h2>
          It's not just about
          <br />
          the work. It's about <em>the experience.</em>
        </h2>
        <p>
          A successful creative project is more than a finished design.
          It is a process built on understanding, thoughtful decisions
          and working towards a shared goal.
        </p>
      </section>

      <section className="testimonials-values">
        <div className="testimonials-section-heading">
          <span className="eyebrow"><i /> WHAT WE BELIEVE</span>
          <h2>
            The foundation of
            <br />
            every <em>partnership.</em>
          </h2>
        </div>

        <div className="testimonials-values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article className="testimonials-value-card" key={value.number}>
                <div className="testimonials-value-top">
                  <span>{value.number}</span>
                  <Icon />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <blockquote>{value.quote}</blockquote>
              </article>
            );
          })}
        </div>
      </section>

      <section className="testimonials-commitment">
        <div className="testimonials-commitment-image">
          <img
            src="/images/contact-workspace.jpg"
            alt="Thoughtfully arranged creative workspace"
            loading="lazy"
          />
        </div>

        <div className="testimonials-commitment-copy">
          <span className="eyebrow"><i /> OUR COMMITMENT</span>
          <h2>
            A creative process
            <br />
            built around <em>you.</em>
          </h2>
          <p>
            Whether you're building a brand from the beginning or
            improving an existing digital presence, we aim to make
            the experience clear, collaborative and purposeful.
          </p>

          <ul>
            {commitments.map((commitment) => (
              <li key={commitment}>
                <CheckCircle2 />
                {commitment}
              </li>
            ))}
          </ul>

          <Link className="button-primary" to="/process">
            Explore Our Process <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="testimonials-note">
        <Sparkles />
        <span>GOOD PARTNERSHIPS CREATE GREAT STORIES.</span>
        <h2>
          We'd love to make
          <br />
          <em>one with you.</em>
        </h2>
        <p>
          Every collaboration starts with a conversation. Tell us
          about your next idea.
        </p>
        <Link className="button-primary" to="/contact">
          Start a Conversation <ArrowUpRight size={17} />
        </Link>
      </section>

      <section className="testimonials-bottom">
        <Users />
        <p>
          As genuine client feedback becomes available, this page can
          grow into a collection of real experiences and testimonials.
        </p>
      </section>
    </main>
  );
}

export default Testimonials;
