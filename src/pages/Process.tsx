
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Search,
  Lightbulb,
  Palette,
  Rocket,
  CheckCircle2,
  Target,
  Users,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the vision",
    description:
      "We begin with a conversation about your business, audience, challenges and goals. This gives us a clear understanding of what the project needs to achieve.",
    points: [
      "Understand your business and audience",
      "Discuss goals and expectations",
      "Define project scope and direction",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Strategise",
    subtitle: "Plan the direction",
    description:
      "We turn the initial ideas into a focused creative direction. We identify the priorities, visual approach and structure needed to move forward.",
    points: [
      "Develop creative ideas",
      "Define visual and content direction",
      "Plan the project approach",
    ],
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Create",
    subtitle: "Bring ideas to life",
    description:
      "This is where the creative work takes shape. We develop the design or digital experience and refine it through feedback and collaboration.",
    points: [
      "Develop the creative work",
      "Review and collect feedback",
      "Refine the details",
    ],
    icon: Palette,
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Make it ready to grow",
    description:
      "After the final review, we prepare the agreed deliverables and hand them over. We make sure you understand the outcome and the next steps.",
    points: [
      "Complete final checks",
      "Prepare agreed deliverables",
      "Share the final work and next steps",
    ],
    icon: Rocket,
  },
];

const principles = [
  {
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "Open conversations and clear expectations throughout the project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Your input matters. We work together to shape the right outcome.",
  },
  {
    icon: Target,
    title: "Purposeful decisions",
    description:
      "Creative choices are guided by your brand and project objectives.",
  },
  {
    icon: RefreshCw,
    title: "Thoughtful refinement",
    description:
      "We review, improve and pay attention to the details that matter.",
  },
];

function Process() {
  return (
    <main className="process-page">
      <section className="process-hero">
        <div className="process-hero-copy">
          <span className="eyebrow"><i /> HOW WE WORK</span>
          <h1>
            A thoughtful process.
            <br />
            <em>Better possibilities.</em>
          </h1>
          <p>
            Great creative work doesn't happen by accident. We bring
            structure, collaboration and imagination together to turn
            your ideas into meaningful brand experiences.
          </p>
          <Link className="button-primary" to="/contact">
            Start a Project <ArrowRight size={17} />
          </Link>
        </div>

        <div className="process-hero-visual">
          <img
            src="/images/process-collaboration.jpg"
            alt="Notebook and creative planning workspace"
          />
          <div className="process-hero-caption">
            <span>THE ROSEDSIGNS WAY</span>
            <strong>Think clearly. Create thoughtfully.</strong>
          </div>
          <div className="process-hero-mark">R.</div>
        </div>
      </section>

      <section className="process-intro">
        <span>✦ FROM FIRST IDEA TO FINAL DELIVERY</span>
        <h2>
          Four stages.
          <br />
          One <em>shared vision.</em>
        </h2>
        <p>
          Every project is different, but a clear process helps keep
          the work focused, collaborative and moving forward.
        </p>
      </section>

      <section className="process-steps-section">
        <div className="process-section-heading">
          <div>
            <span className="eyebrow"><i /> THE JOURNEY</span>
            <h2>How an idea <em>blooms.</em></h2>
          </div>
          <span className="process-stage-count">04 STAGES</span>
        </div>

        <div className="process-timeline">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="process-step" key={step.number}>
                <div className="process-step-marker">
                  <span>{step.number}</span>
                  <div><Icon /></div>
                </div>

                <div className="process-step-content">
                  <small>{step.subtitle}</small>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={15} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="process-step-number">{step.number}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-principles">
        <div className="process-principles-heading">
          <span className="eyebrow"><i /> WHAT MATTERS TO US</span>
          <h2>
            Good work grows
            <br />
            from <em>good collaboration.</em>
          </h2>
          <p>
            Our process is guided by the way we communicate, think,
            create and work with you.
          </p>
        </div>

        <div className="process-principles-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <article className="process-principle-card" key={principle.title}>
                <span>0{index + 1}</span>
                <Icon />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-final">
        <span>EVERY GREAT PROJECT STARTS SOMEWHERE</span>
        <h2>
          Have an idea?
          <br />
          Let's <em>shape it together.</em>
        </h2>
        <p>
          Tell us about your project. We'll start with a conversation
          and explore the right direction for your brand.
        </p>
        <Link className="button-primary" to="/contact">
          Let's Talk <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Process;
