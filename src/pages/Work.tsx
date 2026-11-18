import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Code2,
  Camera,
  TrendingUp,
  Package,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Website Design",
    tag: "WEB DESIGN",
    title: "Corporate Brand Website",
    description:
      "A clear, responsive digital presence concept designed to communicate a professional brand and guide visitors towards meaningful action.",
    focus: "Website structure · Responsive UI · Brand presentation",
    image:
      "/images/work-01-website.jpg",
    icon: Code2,
  },
  {
    number: "02",
    category: "Branding",
    tag: "BRANDING",
    title: "Product Brand Identity",
    description:
      "A product identity direction exploring colour, packaging and a consistent visual language for a contemporary lifestyle brand.",
    focus: "Visual identity · Colour direction · Packaging",
    image:
      "/images/work-02-brand-identity.jpg",
    icon: Palette,
  },
  {
    number: "03",
    category: "Social Media",
    tag: "SOCIAL MEDIA",
    title: "Campaign & Creatives",
    description:
      "A social campaign concept built around recognisable visual content and a consistent tone across digital touchpoints.",
    focus: "Campaign direction · Social creatives · Content system",
    image:
      "/images/work-03-social-campaign.jpg",
    icon: Camera,
  },
  {
    number: "04",
    category: "Marketing",
    tag: "MARKETING",
    title: "Digital Growth Campaign",
    description:
      "A digital marketing concept focused on communicating a clear offer, improving discoverability and creating a coherent campaign journey.",
    focus: "Campaign planning · Digital visibility · Messaging",
    image:
      "/images/work-04-marketing.jpg",
    icon: TrendingUp,
  },
  {
    number: "05",
    category: "Packaging Design",
    tag: "PACKAGING",
    title: "Botanical Packaging",
    description:
      "A packaging direction for a botanical-inspired product range, balancing a natural visual mood with clear product communication.",
    focus: "Packaging concept · Product hierarchy · Visual styling",
    image:
      "/images/work-05-packaging.jpg",
    icon: Package,
  },
  {
    number: "06",
    category: "E-commerce",
    tag: "E-COMMERCE",
    title: "Lifestyle Store Experience",
    description:
      "An e-commerce experience concept designed to make product discovery straightforward and keep the brand presentation consistent.",
    focus: "Storefront direction · Product discovery · Responsive layout",
    image:
      "/images/work-06-ecommerce.jpg",
    icon: ShoppingBag,
  },

  {
    number: "07",
    category: "Branding",
    tag: "BRAND EXPERIENCE",
    title: "Luxury Café Identity",
    description:
      "A warm café identity concept combining a distinctive visual mood with a consistent customer-facing brand experience.",
    focus: "Brand direction · Visual identity · Customer experience",
    image: "/images/work-07-cafe-identity.jpg",
    icon: Palette,
  },
  {
    number: "08",
    category: "Social Media",
    tag: "FASHION CAMPAIGN",
    title: "Fashion Social Campaign",
    description:
      "An editorial social campaign concept designed to give a fashion brand a recognisable and consistent digital voice.",
    focus: "Campaign direction · Editorial visuals · Social content",
    image: "/images/work-08-fashion-campaign.jpg",
    icon: Camera,
  },
  {
    number: "09",
    category: "Website Design",
    tag: "PORTFOLIO WEBSITE",
    title: "Creative Portfolio Website",
    description:
      "A portfolio website concept that presents creative work through clear navigation, considered typography and visual storytelling.",
    focus: "Portfolio structure · Responsive UI · Visual storytelling",
    image: "/images/work-09-portfolio-website.jpg",
    icon: Code2,
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

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <main className="work-page">
      <section className="work-hero">
        <div className="work-hero-copy">
          <span className="eyebrow"><i /> SELECTED CREATIVE CONCEPTS</span>
          <h1>
            Ideas made
            <br />
            <em>visible.</em>
          </h1>
          <p>
            Explore a selection of creative directions across branding,
            websites, social content and digital marketing. Each concept
            demonstrates a different way a brand can communicate.
          </p>
          <Link className="button-primary" to="/contact">
            Discuss a Project <ArrowRight size={17} />
          </Link>
        </div>

        <div className="work-hero-image">
          <img
            src="/images/services-studio.jpg"
            alt="Creative planning workspace with notebook and ideas"
            fetchPriority="high"
          />
          <div className="work-hero-overlay">
            <span>THE ROSEDSIGNS PORTFOLIO</span>
            <strong>Thoughtful ideas. Clear direction.</strong>
          </div>
        </div>
      </section>

      <section className="work-intro">
        <span>✦ DESIGN · DIGITAL · GROWTH</span>
        <h2>
          A collection of
          <br />
          <em>creative possibilities.</em>
        </h2>
        <p>
          Browse by discipline to explore the different ways we approach
          brand identity, digital experiences and creative communication.
        </p>
      </section>

      <section className="work-gallery">
        <div className="work-gallery-heading">
          <div>
            <span className="eyebrow"><i /> THE PROJECT COLLECTION</span>
            <h2>
              Explore the <em>work.</em>
            </h2>
          </div>
          <span className="work-count">
            {String(filteredProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="work-filters" aria-label="Filter portfolio projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="work-project-grid" aria-live="polite">
          {filteredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="work-project-card" key={project.number}>
                <div className="work-project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} visual concept`}
                    loading="lazy"
                  />
                  <span className="work-project-category">
                    <Icon size={14} />
                    {project.tag}
                  </span>
                  <span className="work-project-arrow" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className="work-project-info">
                  <div>
                    <small>{project.number} / {project.category}</small>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="work-project-focus">{project.focus}</p>
                  </div>
                  <Link
                    to={`/contact?project=${encodeURIComponent(project.title)}`}
                    aria-label={`Enquire about ${project.title}`}
                    title={`Enquire about ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="work-disclaimer">
          Portfolio note: These are illustrative concept explorations prepared
          for this website assignment. They are not presented as completed
          client projects, verified results or client endorsements.
        </p>
      </section>

      <section className="work-cta">
        <Sparkles />
        <span>HAVE A PROJECT IN MIND?</span>
        <h2>
          Your idea could be
          <br />
          the next <em>story.</em>
        </h2>
        <p>
          Tell us what you are planning and let's explore a creative direction
          that fits your brand.
        </p>
        <Link className="button-primary" to="/contact">
          Start a Conversation <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Work;
