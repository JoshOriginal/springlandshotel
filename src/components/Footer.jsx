import { hotel } from "../data/hotel.js";
import { faqs } from "../data/faqs.js";
import { springlandsLogo } from "../data/brandAssets.js";

const footerLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Accommodation", "/rooms"],
  ["Facilities & Dining", "/facilities"],
  ["Experiences", "/experiences"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="/">
          <img className="brand-logo" src={springlandsLogo.src} alt="" />
          <span className="brand-name"><strong>{hotel.name}</strong><small>MOSHI · TANZANIA</small></span>
        </a>
        <p>{hotel.tagline}</p>
        <nav aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          {faqs.length > 0 && <a href="/#faqs">FAQs</a>}
        </nav>
        <a className="footer-book" href="/contact#enquiry">Plan your stay <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Springlands Hotel</span>
        <span>Where comfort meets adventure.</span>
        <a className="footer-partner" href="https://www.zaratanzaniaadventures.com/" target="_blank" rel="noopener noreferrer">Zara Tanzania Adventures<span className="visually-hidden"> (opens in a new tab)</span></a>
        <a href="/">Back to top ↑</a>
      </div>
    </footer>
  );
}
