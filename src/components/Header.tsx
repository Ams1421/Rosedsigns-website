
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Process", path: "/process" },
  { label: "Testimonials", path: "/testimonials" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <NavLink
        className="brand"
        to="/"
        onClick={closeMenu}
        aria-label="RoseDsigns home"
      >
        <img src="/images/rosedsigns-logo.png" alt="RoseDsigns logo" />
        <span>
          <b>Rose</b>Dsigns<sup>®</sup>
        </span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav
        id="main-navigation"
        className={`main-nav ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <NavLink className="header-cta" to="/contact" onClick={closeMenu}>
        Get a Quote <ArrowUpRight size={15} />
      </NavLink>
    </header>
  );
}

export default Header;
