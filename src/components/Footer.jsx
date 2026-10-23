import { hotel } from "../data/hotel.js";
import { springlandsLogo } from "../data/brandAssets.js";

const footerLinks = [
  ["About", "#about"],
  ["Accommodation", "#accommodation"],
  ["Facilities", "#facilities"],
  ["Experiences", "#experiences"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home">
          <img className="brand-logo" src={springlandsLogo.src} alt="" />
          <span className="brand-name"><strong>{hotel.name}</strong><small>MOSHI · TANZANIA</small></span>
        </a>
        <p>{hotel.tagline}</p>
        <nav aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          <a href="#faqs">FAQs</a>
        </nav>
        <a className="footer-book" href="#enquiry">Plan your stay <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Springlands Hotel</span>
        <span>Where comfort meets adventure.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
