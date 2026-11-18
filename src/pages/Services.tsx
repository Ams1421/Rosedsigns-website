
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  Camera,
  Search,
  MessageCircle,
  MapPin,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    category: "DIGITAL EXPERIENCE",
    title: "Website Design & Development",
    description:
      "Responsive, visually engaging websites designed to communicate your brand and make it easy for visitors to take action.",
    features: [
      "Responsive website design",
      "Business and portfolio websites",
      "Landing pages",
      "User-friendly layouts",
    ],
  },
  {
    number: "02",
    icon: Palette,
    category: "BRAND IDENTITY",
    title: "Branding & Visual Identity",
    description:
      "Build a recognisable brand with a consistent visual language that reflects your personality, purpose and audience.",
    features: [
      "Logo and identity concepts",
      "Colour and typography direction",
      "Brand collateral",
      "Visual consistency",
    ],
  },
  {
    number: "03",
    icon: Camera,
    category: "SOCIAL PRESENCE",
    title: "Social Media Management",
    description:
      "Create a consistent social presence through thoughtful content, engaging creatives and a clear communication strategy.",
    features: [
      "Social media creatives",
      "Content planning",
      "Post and story design",
      "Brand consistency",
    ],
  },
  {
    number: "04",
    icon: Search,
    category: "DIGITAL VISIBILITY",
    title: "SEO & Digital Marketing",
    description:
      "Improve how people discover your business through search-focused improvements and practical digital marketing.",
    features: [
      "SEO fundamentals",
      "Website content optimisation",
      "Digital campaign planning",
      "Online visibility improvements",
    ],
  },
  {
    number: "05",
    icon: MessageCircle,
    category: "CUSTOMER CONNECTION",
    title: "WhatsApp Business Setup",
    description:
      "Make customer communication more organised with a professional WhatsApp Business presence.",
    features: [
      "Business profile setup",
      "Product and service catalogue",
      "Quick replies and greeting messages",
      "Customer communication basics",
    ],
  },
  {
    number: "06",
    icon: MapPin,
    category: "LOCAL DISCOVERY",
    title: "Google Business Profile",
    description:
      "Present your business clearly on Google with an organised profile that helps local customers find useful information.",
    features: [
      "Business profile setup",
      "Business information organisation",
      "Photo and service presentation",
      "Profile improvement guidance",
    ],
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div>
          <span className="eyebrow"><i /> WHAT WE DO</span>
          <h1>
            Creative services.
            <br />
            <em>Meaningful impact.</em>
          </h1>
          <p>
            From your first brand idea to your digital presence, we bring
            creative thinking and practical execution together to help your
            business move forward.
          </p>
          <Link className="button-primary" to="/contact">
            Discuss Your Project <ArrowRight size={17} />
          </Link>
        </div>

        <div className="services-hero-art">
          <img
            src="/images/services-studio.jpg"
            alt="Creative planning and design workspace"
          />
          <div className="services-hero-note">
            <Sparkles />
            <span>
              <b>Ideas into action</b>
              <small>One creative direction</small>
            </span>
          </div>
        </div>
      </section>

      <section className="services-intro">
        <span>✦ OUR CAPABILITIES</span>
        <h2>
          Everything your brand needs,
          <br />
          <em>under one creative roof.</em>
        </h2>
        <p>
          Explore our services and find the right starting point for your
          next creative project.
        </p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-detail-card" key={service.number}>
                <div className="service-detail-top">
                  <span>{service.number}</span>
                  <Icon />
                </div>

                <small>{service.category}</small>
                <h2>{service.title}</h2>
                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="service-detail-link"
                >
                  Enquire about this service <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-approach">
        <div>
          <span className="eyebrow"><i /> HOW WE THINK</span>
          <h2>
            Good design should
            <br />
            do more than <em>look good.</em>
          </h2>
        </div>
        <p>
          We approach every project with your brand, audience and goals in
          mind. The result should feel visually consistent, easy to use and
          purposeful.
        </p>
      </section>

      <section className="services-cta">
        <span>YOUR NEXT IDEA STARTS HERE</span>
        <h2>
          Let's create something
          <br />
          <em>worth remembering.</em>
        </h2>
        <p>
          Tell us what you have in mind. We can explore the right creative
          direction together.
        </p>
        <Link className="button-primary" to="/contact">
          Start a Conversation <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Services;
