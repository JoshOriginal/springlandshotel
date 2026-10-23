import { heroImage } from "../data/imageManifest.js";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Moshi, Tanzania <span className="eyebrow-divider">·</span> Kilimanjaro region</p>
        <h1 id="hero-title"><span className="heading-reveal-line">Your peaceful retreat at the</span><span className="heading-reveal-line"><em>foot of Kilimanjaro.</em></span></h1>
        <p className="hero-description">
          Springlands Hotel offers a welcoming escape in Moshi, where comfort, nature, and authentic Tanzanian hospitality meet.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#accommodation">Explore accommodation <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#enquiry">Book your stay <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-note">
          <span className="note-rule" />
          <span>Where comfort meets adventure,<br />and every stay feels like home.</span>
        </div>
      </div>
      <figure className="hero-art">
        <img
          className="hero-image"
          src={heroImage.src}
          srcSet={heroImage.srcSet}
          sizes="(max-width: 700px) 100vw, 50vw"
          width={heroImage.originalDimensions.width}
          height={heroImage.originalDimensions.height}
          alt={heroImage.alt}
          fetchPriority="high"
        />
        <figcaption>SPRINGLANDS HOTEL <span>·</span> MOSHI, TANZANIA</figcaption>
      </figure>
      <a className="scroll-cue" href="#about"><span /> Scroll to discover</a>
    </section>
  );
}
