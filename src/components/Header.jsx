import { useEffect, useState } from "react";
import { springlandsLogo } from "../data/brandAssets.js";

export const siteNavigation = [
  { label: "Home", href: "/", path: "/" },
  { label: "About Us", href: "/about", path: "/about" },
  { label: "Accommodation", href: "/rooms", path: "/rooms" },
  { label: "Facilities & Dining", href: "/facilities", path: "/facilities" },
  { label: "Experiences", href: "/experiences", path: "/experiences" },
  { label: "Gallery", href: "/gallery", path: "/gallery" },
  { label: "Contact", href: "/contact", path: "/contact" },
];

export default function Header({ currentPath = "/" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${currentPath !== "/" ? " site-header-inner" : ""}`}>
      <a className="brand" href={currentPath === "/" ? "#home" : "/"} onClick={closeMenu} aria-label="Springlands Hotel home">
        <img className="brand-logo" src={springlandsLogo.src} alt={springlandsLogo.alt} />
        <span className="brand-name">
          <strong>Springlands</strong>
          <small>HOTEL · MOSHI, TANZANIA</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        id="primary-navigation"
        className={`primary-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {siteNavigation.map(({ label, href, path }) => (
          <a key={path} href={href} onClick={closeMenu} aria-current={currentPath === path ? "page" : undefined}>{label}</a>
        ))}
        <a className="nav-cta" href="/contact#enquiry" onClick={closeMenu}>Book Your Stay</a>
      </nav>
    </header>
  );
}
