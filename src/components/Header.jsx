import { useEffect, useRef, useState } from "react";
import { springlandsLogo } from "../data/brandAssets.js";

export const siteNavigation = [
  { label: "Home", href: "/", path: "/" },
  { label: "About", href: "/about", path: "/about" },
  { label: "Rooms", href: "/rooms", path: "/rooms" },
  { label: "Facilities", href: "/facilities", path: "/facilities" },
  { label: "Experiences", href: "/experiences", path: "/experiences" },
  { label: "Gallery", href: "/gallery", path: "/gallery" },
  { label: "Contact", href: "/contact", path: "/contact" },
];

export default function Header({ currentPath = "/" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleMenuKeyDown = (event) => {
    if (event.key !== "Escape" || !menuOpen) return;
    closeMenu();
    menuToggleRef.current?.focus();
  };

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${currentPath !== "/" ? " site-header-inner" : ""}`}
      onKeyDown={handleMenuKeyDown}
    >
      <a className="brand" href={currentPath === "/" ? "#home" : "/"} onClick={closeMenu} aria-label="Springlands Hotel home">
        <img className="brand-logo" src={springlandsLogo.src} alt={springlandsLogo.alt} />
        <span className="brand-name">
          <strong>Springlands</strong>
          <small>MOSHI, TANZANIA</small>
        </span>
      </a>
      <button
        ref={menuToggleRef}
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
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
        <a className="nav-cta" href="/contact#enquiry" onClick={closeMenu}>Book now</a>
      </nav>
    </header>
  );
}
