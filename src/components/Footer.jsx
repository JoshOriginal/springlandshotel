import { hotel, socialLinks } from "../data/hotel.js";
import { faqs } from "../data/faqs.js";
import { springlandsLogo } from "../data/brandAssets.js";
import { footerImage } from "../data/imageManifest.js";

const footerLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Accommodation", "/rooms"],
  ["Facilities & Dining", "/facilities"],
  ["Experiences", "/experiences"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

function SocialIcon({ platform }) {
  const paths = {
    facebook: <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.7v8h3.2Z" />,
    instagram: <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.7" cy="6.5" r="1.1" />
    </>,
    youtube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />,
    whatsapp: <path d="M12.1 2.5a9.4 9.4 0 0 0-8 14.3l-1.2 4.4 4.5-1.2a9.5 9.5 0 1 0 4.7-17.5Zm0 17.1c-1.4 0-2.7-.4-3.8-1.1l-.3-.2-2.6.7.7-2.5-.2-.4a7.2 7.2 0 1 1 6.2 3.5Zm4-5.4c-.2-.1-1.3-.7-1.5-.7s-.4-.1-.5.1-.6.7-.7.8-.3.2-.5.1c-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.4-.4c.1-.1.1-.2.2-.3.1-.2 0-.3 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.2.4.5.2 1 .1 1.3.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.2-.2-.2-.4-.3Z" />,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[platform]}</svg>;
}

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
        <figure className="footer-photo">
          <img
            src={footerImage.src}
            srcSet={footerImage.srcSet}
            sizes="(max-width: 700px) 100vw, 40vw"
            width={footerImage.originalDimensions.width}
            height={footerImage.originalDimensions.height}
            alt="Springlands Hotel courtyard with guest-room balconies and tropical gardens."
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="social-links" aria-label="Social media">
          {socialLinks.map(({ platform, label, href }) => (
            href ? (
              <a
                className="social-link"
                href={href}
                key={platform}
                aria-label={`Springlands Hotel on ${label} (opens in a new tab)`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon platform={platform} />
              </a>
            ) : (
              <span className="social-link is-unconfigured" key={platform} role="img" aria-label={`${label} URL not configured`} title={`${label} URL not configured`}>
                <SocialIcon platform={platform} />
              </span>
            )
          ))}
        </div>
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
