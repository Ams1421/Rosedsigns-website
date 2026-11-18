
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Code2,
  Layers3,
  MessageCircle,
  Palette,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Globe,
  Flower2,
} from "lucide-react";

import "../App.css";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    detail:
      "Beautiful, responsive websites built to turn visitors into customers.",
  },
  {
    icon: ShieldCheck,
    title: "Branding & Identity",
    detail:
      "Distinctive brand systems, visual identities and thoughtful design assets.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    detail:
      "Consistent content and social strategies that build real connections.",
  },
  {
    icon: Search,
    title: "SEO & Digital Growth",
    detail:
      "Search visibility and practical digital improvements that help people find you.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Setup",
    detail:
      "A clearer, more useful customer communication experience.",
  },
  {
    icon: Globe,
    title: "Google Business Profile",
    detail:
      "A polished local presence that makes your business easier to discover.",
  },
];

const projects = [
  {
    category: "Website Design",
    title: "Corporate Brand Website",
    image:
      "/images/work-01-website.jpg",
    tag: "WEB DESIGN",
  },
  {
    category: "Branding",
    title: "Product Brand Identity",
    image:
      "/images/work-02-brand-identity.jpg",
    tag: "BRANDING",
  },
  {
    category: "Social Media",
    title: "Campaign & Creatives",
    image:
      "/images/work-03-social-campaign.jpg",
    tag: "SOCIAL MEDIA",
  },
  {
    category: "Marketing",
    title: "Digital Growth Campaign",
    image:
      "/images/work-04-marketing.jpg",
    tag: "MARKETING",
  },
  {
    category: "Packaging Design",
    title: "Botanical Packaging",
    image:
      "/images/work-05-packaging.jpg",
    tag: "PACKAGING",
  },
  {
    category: "E-commerce",
    title: "Lifestyle Store Experience",
    image:
      "/images/work-06-ecommerce.jpg",
    tag: "E-COMMERCE",
  },
  {
    category: "Branding",
    title: "Luxury Café Identity",
    image:
      "/images/work-07-cafe-identity.jpg",
    tag: "BRANDING",
  },
  {
    category: "Social Media",
    title: "Fashion Social Campaign",
    image:
      "/images/work-08-fashion-campaign.jpg",
    tag: "SOCIAL MEDIA",
  },
  {
    category: "Website Design",
    title: "Creative Portfolio Website",
    image:
      "/images/work-09-portfolio-website.jpg",
    tag: "WEB DESIGN",
  },
];

const process = [
  {
    icon: Target,
    title: "Discover",
    text: "Understand your goals, audience and what makes your brand different.",
  },
  {
    icon: Palette,
    title: "Design",
    text: "Shape a clear creative direction and a memorable visual identity.",
  },
  {
    icon: Code2,
    title: "Develop",
    text: "Build responsive experiences and bring the details together.",
  },
  {
    icon: BarChart3,
    title: "Grow",
    text: "Learn, improve and help your brand move forward.",
  },
];

const filters = [
  "All",
  "Website Design",
  "Branding",
  "Social Media",
  "Marketing",
  "Packaging Design",
  "E-commerce",
];

function Home() {
  const [activeService, setActiveService] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectIndex, setProjectIndex] = useState(0);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@rosedsigns.com?subject=${subject}&body=${body}`;
  };

  const moveProjects = (direction: number) => {
    setProjectIndex(
      (current) =>
        (current + direction + Math.max(visibleProjects.length, 1)) %
        Math.max(visibleProjects.length, 1)
    );
  };

  const orderedProjects = visibleProjects.length
    ? [
        ...visibleProjects.slice(projectIndex),
        ...visibleProjects.slice(0, projectIndex),
      ]
    : [];

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="eyebrow">
              <i /> CREATIVE DESIGN & DIGITAL MARKETING AGENCY
            </span>

            <h1>
              Ideas that make your brand <em>Bloom.</em>
            </h1>

            <p>
              We design, build, and grow brands through creative design,
              powerful websites, and data-driven digital marketing.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#services">
                Our Services <ArrowRight size={17} />
              </a>

              <a className="button-ghost" href="#work">
                <span className="play-icon">▶</span> Explore Our Work
              </a>
            </div>

            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-flower" aria-hidden="true">
              ✿
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art-glow" />

            <img
              className="hero-rose"
              src="/images/hero-yellow-flowers.jpg"
              alt="Pink and coral flowers in bloom"
            />

            <div className="hero-art-caption">
              <span>THE ROSEDSIGNS APPROACH</span>
              <strong>
                Make ideas
                <br />
                matter.
              </strong>
            </div>

            <div className="floating-stat stat-project">
              <Layers3 />
              <b>Creative ideas</b>
              <small>Built with purpose</small>
            </div>

            <div className="floating-stat stat-growth">
              <ArrowUpRight />
              <b>Brand growth</b>
              <small>Designed to bloom</small>
            </div>

            <span className="hero-side-note">
              CREATIVE · BRANDING · ADVERTISING
            </span>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <Layers3 />
            <span>
              <b>Creative</b>
              <small>Strategy & ideas</small>
            </span>
          </div>

          <div>
            <Users />
            <span>
              <b>Collaborative</b>
              <small>People-first process</small>
            </span>
          </div>

          <div>
            <Trophy />
            <span>
              <b>Thoughtful</b>
              <small>Quality in every detail</small>
            </span>
          </div>

          <div>
            <Sparkles />
            <span>
              <b>One vision</b>
              <small>Design meets growth</small>
            </span>
          </div>
        </div>
      </section>

      <section className="feature-layout" id="work">
        <div className="feature-left">
          <div className="section-kicker">
            <span>✦ FEATURED WORK</span>
            <small>SELECTED CONCEPTS</small>
          </div>

          <div className="section-title-row">
            <h2>
              Our Creative <em>Work</em>
            </h2>

            <div className="carousel-controls">
              <button
                aria-label="Previous project"
                onClick={() => moveProjects(-1)}
              >
                <ChevronLeft />
              </button>

              <button
                aria-label="Next project"
                onClick={() => moveProjects(1)}
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="project-grid">
            {orderedProjects.slice(0, 3).map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} concept`}
                    loading="lazy"
                  />
                  <span className="project-tag">{project.tag}</span>
                  <ArrowUpRight className="project-link-icon" />
                </div>

                <h3>{project.title}</h3>
              </article>
            ))}
          </div>

          <div className="work-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => {
                  setActiveFilter(filter);
                  setProjectIndex(0);
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <p className="concept-note">
            Portfolio visuals are illustrative concept explorations for this
            assignment, not verified client projects.
          </p>

          <div className="process-testimonial-row">
            <section className="process-block" id="process">
              <div className="section-kicker">
                <span>✦ OUR PROCESS</span>
                <small>FROM IDEA TO IMPACT</small>
              </div>

              <h2>
                From Idea to <em>Impact</em>
              </h2>

              <div className="process-grid">
                {process.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article className="process-item" key={step.title}>
                      <span className="process-icon">
                        <Icon />
                      </span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="testimonial-block" id="testimonials">
              <div className="section-kicker">
                <span>✦ CLIENTS LOVE US</span>
                <small>YOUR STORY COULD BE NEXT</small>
              </div>

              <div className="testimonial-card">
                <span className="quote-mark">“</span>

                <p>
                  We believe great creative partnerships are built on clear
                  communication, thoughtful ideas and work that makes a
                  difference.
                </p>

                <div className="testimonial-footer">
                  <span className="testimonial-avatar">
                    <Flower2 />
                  </span>

                  <span>
                    <b>A partnership built on ideas</b>
                    <small>RoseDsigns creative philosophy</small>
                  </span>

                  <span className="stars">✦ ✦ ✦</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <aside className="feature-right">
          <section className="about-panel" id="about">
            <div className="section-kicker">
              <span>ABOUT ROSEDESIGNS</span>
            </div>

            <div className="about-panel-content">
              <div>
                <h2>
                  A creative partner for brand <em>growth.</em>
                </h2>

                <p>
                  RoseDsigns is a creative design and digital marketing agency
                  that helps businesses build a strong, memorable, and
                  impactful online presence.
                </p>

                <div className="about-pillars">
                  <div>
                    <Target />
                    <b>
                      Creative
                      <br />
                      Strategy
                    </b>
                  </div>

                  <div>
                    <Layers3 />
                    <b>
                      Design &
                      <br />
                      Development
                    </b>
                  </div>

                  <div>
                    <BarChart3 />
                    <b>
                      Marketing
                      <br />
                      & Growth
                    </b>
                  </div>
                </div>

                <Link className="button-outline" to="/about">
                  Know More About Us <ArrowRight size={16} />
                </Link>
              </div>

              <div className="about-rose">
                <img
                  src="/images/rosedsigns-about.jpg"
                  alt="RoseDsigns floral rose emblem"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </section>

          <section className="services-panel" id="services">
            <div className="section-kicker">
              <span>✦ OUR SERVICES</span>
              <Link to="/services">
                View All Services <ArrowUpRight size={14} />
              </Link>
            </div>

            <h2>
              Everything your brand needs,
              <br />
              <em>under one creative roof.</em>
            </h2>

            <div className="service-cards">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isOpen = activeService === index;

                return (
                  <article
                    className={`service-card ${isOpen ? "service-open" : ""}`}
                    key={service.title}
                  >
                    <button
                      onClick={() =>
                        setActiveService(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <Icon />
                      <span>{service.title}</span>
                      <ArrowUpRight className="service-arrow" />
                    </button>

                    {isOpen && <p>{service.detail}</p>}
                  </article>
                );
              })}
            </div>
          </section>

          <section className="quote-panel" id="contact">
            <img
              src="/images/contact-workspace.jpg"
              alt=""
              aria-hidden="true"
            />

            <div className="quote-panel-content">
              <span>LET'S CREATE TOGETHER</span>

              <h2>
                Have a project
                <br />
                in mind?
              </h2>

              <p>
                Let's turn your ideas into a brand experience that creates
                real impact.
              </p>

              <div className="quote-actions">
                <Link className="button-primary" to="/contact">
                  Get a Quote <ArrowRight />
                </Link>

                <a
                  className="button-ghost"
                  href="https://wa.me/?text=Hello%20RoseDsigns%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </aside>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-heading">
          <span className="eyebrow">
            <i /> START A CONVERSATION
          </span>

          <h2>
            Let's make something <em>meaningful.</em>
          </h2>
        </div>

        <form className="contact-form" onSubmit={handleContact}>
          <label>
            Your name
            <input name="name" placeholder="Your name" required />
          </label>

          <label>
            Email address
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            What do you need?
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>

              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}

              <option>Something else</option>
            </select>
          </label>

          <label className="message-field">
            Tell us about your idea
            <textarea
              name="message"
              rows={3}
              placeholder="A few details about your project..."
              required
            />
          </label>

          <button className="button-primary" type="submit">
            Send your enquiry <Send size={16} />
          </button>

          <small>
            Your email application will open with your enquiry ready to send.
          </small>
        </form>
      </section>
    </main>
  );
}

export default Home;
