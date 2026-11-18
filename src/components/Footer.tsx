
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Process", path: "/process" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand" to="/" aria-label="RoseDsigns home">
        <img src="/images/rosedsigns-logo.png" alt="RoseDsigns logo" />
        <span>
          <b>Rose</b>Dsigns<sup>®</sup>
        </span>
      </Link>

      <p>Ideas that make your brand bloom.</p>

      <div>
        {footerLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>

      <small>
        © {new Date().getFullYear()} RoseDsigns. Creative · Branding · Advertising.
      </small>
    </footer>
  );
}

export default Footer;
