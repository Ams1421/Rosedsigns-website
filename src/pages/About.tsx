
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Lightbulb,
  Palette,
  Target,
  Users,
} from "lucide-react";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">
            <i /> GET TO KNOW US
          </span>

          <h1>
            Creativity with
            <br />
            purpose. Design with
            <br />
            <em>meaning.</em>
          </h1>

          <p>
            We are RoseDsigns — a creative design and digital marketing
            agency focused on helping brands build a memorable identity,
            meaningful digital experiences and lasting connections.
          </p>

          <div className="about-hero-actions">
            <Link className="button-primary" to="/services">
              Explore Our Services <ArrowRight size={17} />
            </Link>
            <a className="button-ghost" href="#our-approach">
              Discover our approach <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <div className="about-hero-visual">
          <img
            src="/images/work-08-fashion-campaign.jpg"
            alt="Soft pink flowers in bloom"
          />
          <div className="about-visual-caption">
            <span>THE ROSEDSIGNS PHILOSOPHY</span>
            <strong>Ideas deserve to bloom.</strong>
          </div>
          <span className="about-visual-number">01 / 04</span>
        </div>
      </section>

      <section className="about-intro" id="our-approach">
        <div className="about-intro-label">
          <span>✦ WHO WE ARE</span>
          <small>CREATIVE THINKING · DIGITAL IMPACT</small>
        </div>

        <div className="about-intro-content">
          <h2>
            More than design.
            <br />
            A <em>creative partnership.</em>
          </h2>

          <div>
            <p>
              Every brand has a story worth telling. Our role is to help
              bring that story to life through thoughtful design, useful
              digital experiences and creative marketing.
            </p>
            <p>
              From shaping a visual identity to building an online presence,
              we bring ideas together with one goal: making your brand
              clearer, more memorable and ready to grow.
            </p>
            <Link className="text-link" to="/contact">
              Let's talk about your brand <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-pillars-section">
        <div className="about-section-heading">
          <span className="eyebrow">
            <i /> WHAT GUIDES US
          </span>
          <h2>
            The thinking behind
            <br />
            the <em>creative.</em>
          </h2>
          <p>
            Good work starts with a clear purpose. These principles shape
            how we approach every creative challenge.
          </p>
        </div>

        <div className="about-values-grid">
          <article className="about-value-card">
            <span className="about-value-icon"><Lightbulb /></span>
            <small>01 / THINK</small>
            <h3>Ideas with purpose</h3>
            <p>
              We start by understanding the problem, the audience and the
              opportunity before shaping a creative direction.
            </p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon"><Palette /></span>
            <small>02 / CREATE</small>
            <h3>Design with intention</h3>
            <p>
              Every visual choice should support the brand story and create
              a consistent, recognisable experience.
            </p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon"><Users /></span>
            <small>03 / COLLABORATE</small>
            <h3>People-first thinking</h3>
            <p>
              Clear communication and collaboration help turn different
              perspectives into stronger creative outcomes.
            </p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon"><BarChart3 /></span>
            <small>04 / GROW</small>
            <h3>Progress that matters</h3>
            <p>
              We look beyond appearances and focus on useful digital
              experiences that support business goals.
            </p>
          </article>
        </div>
      </section>

      <section className="about-approach">
        <div className="about-approach-image">
          <img
            src="/images/rosedsigns-about.jpg"
            alt="Creative planning and notes on a desk"
            loading="lazy"
          />
        </div>

        <div className="about-approach-copy">
          <span className="eyebrow">
            <i /> OUR CREATIVE APPROACH
          </span>
          <h2>
            Strategy meets
            <br />
            <em>imagination.</em>
          </h2>
          <p>
            We bring creative thinking and practical execution together.
            That means understanding your brand first, developing a clear
            direction and creating work that feels connected across every
            touchpoint.
          </p>

          <div className="about-approach-points">
            <div><Target /><span>Understand the brand and its goals</span></div>
            <div><Palette /><span>Create a consistent visual direction</span></div>
            <div><BarChart3 /><span>Build for visibility and growth</span></div>
          </div>

          <Link className="button-primary" to="/process">
            See How We Work <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="about-services-strip">
        <div>
          <span className="eyebrow">
            <i /> ONE CREATIVE ROOF
          </span>
          <h2>
            Everything your brand needs
            <br />
            to <em>move forward.</em>
          </h2>
        </div>

        <Link className="button-primary" to="/services">
          Discover Our Services <ArrowUpRight size={17} />
        </Link>
      </section>

      <section className="about-cta">
        <span>HAVE AN IDEA?</span>
        <h2>
          Let's make it
          <br />
          <em>happen.</em>
        </h2>
        <p>
          Tell us what you're building. Let's explore how creative thinking
          can help your brand bloom.
        </p>
        <Link className="button-primary" to="/contact">
          Start a Conversation <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default About;
