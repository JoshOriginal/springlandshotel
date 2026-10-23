import { useEffect, useState } from "react";
import { springlandsLogo } from "../data/brandAssets.js";

const links = [
  ["About", "#about"],
  ["Accommodation", "#accommodation"],
  ["Facilities", "#facilities"],
  ["Experiences", "#experiences"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Header() {
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
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Springlands Hotel home">
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
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="nav-cta" href="#enquiry" onClick={closeMenu}>Book your stay</a>
      </nav>
    </header>
  );
}
