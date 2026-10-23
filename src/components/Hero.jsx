import { useEffect, useRef, useState } from "react";
import { heroSlides } from "../data/imageManifest.js";
import { hotel } from "../data/hotel.js";

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

export default function Hero() {
  const [slides] = useState(() => shuffle(heroSlides));
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const swipeStart = useRef(null);
  const activeSlide = slides[activeIndex];
  const previousSlide = previousIndex === null ? null : slides[previousIndex];
  const nextIndex = (activeIndex + 1) % slides.length;

  const showSlide = (index) => {
    if (index === activeIndex) return;
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  };

  const changeSlide = (direction) => {
    showSlide((activeIndex + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setPreviousIndex(activeIndex);
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused, reducedMotion, slides.length]);

  useEffect(() => {
    if (!previousSlide) return undefined;
    const timer = window.setTimeout(() => setPreviousIndex(null), 1200);
    return () => window.clearTimeout(timer);
  }, [previousSlide]);

  useEffect(() => {
    const nextImage = slides[nextIndex]?.image;
    if (!nextImage) return undefined;
    const preload = new window.Image();
    preload.sizes = "100vw";
    preload.srcset = nextImage.srcSet;
    preload.src = nextImage.src;
    return () => {
      preload.onload = null;
      preload.onerror = null;
    };
  }, [nextIndex, slides]);

  const handlePointerDown = (event) => {
    if (event.pointerType === "touch") {
      swipeStart.current = { x: event.clientX, y: event.clientY };
    }
  };

  const handlePointerUp = (event) => {
    if (event.pointerType !== "touch" || !swipeStart.current) return;
    const deltaX = event.clientX - swipeStart.current.x;
    const deltaY = event.clientY - swipeStart.current.y;
    swipeStart.current = null;
    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
      changeSlide(deltaX < 0 ? 1 : -1);
    }
  };

  return (
    <section
      className="hero hero-carousel"
      id="home"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      aria-label="Springlands Hotel photography"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setPaused(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setPaused(false);
      }}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { swipeStart.current = null; }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          changeSlide(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          changeSlide(1);
        }
      }}
    >
      <figure className="hero-art" aria-label={activeSlide.image.alt}>
        {previousSlide && (
          <img
            key={previousSlide.image.filename}
            className="hero-slide hero-slide-outgoing"
            src={previousSlide.image.src}
            srcSet={previousSlide.image.srcSet}
            sizes="100vw"
            width={previousSlide.image.originalDimensions.width}
            height={previousSlide.image.originalDimensions.height}
            alt=""
            aria-hidden="true"
          />
        )}
        <img
          key={activeSlide.image.filename}
          className="hero-slide hero-slide-active"
          src={activeSlide.image.src}
          srcSet={activeSlide.image.srcSet}
          sizes="100vw"
          width={activeSlide.image.originalDimensions.width}
          height={activeSlide.image.originalDimensions.height}
          alt={activeSlide.image.alt}
          fetchPriority={activeIndex === 0 ? "high" : "auto"}
          decoding="async"
        />
        <figcaption>{activeSlide.caption}</figcaption>
      </figure>
      <div className="hero-copy">
        <p className="eyebrow"><span /> Moshi, Tanzania <span className="eyebrow-divider">·</span> Kilimanjaro region</p>
        <h1 id="hero-title">{hotel.headline}</h1>
        <p className="hero-tagline">
          Where comfort meets adventure,<br />and every stay feels like home.
        </p>
        <p className="hero-description">
          Springlands Hotel offers a welcoming escape in Moshi, where comfort, nature, and authentic Tanzanian hospitality meet.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#enquiry">Book your stay <span aria-hidden="true">↗</span></a>
          <a className="button hero-secondary-action" href="#accommodation">Explore Our Rooms <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-controls" role="group" aria-label="Hero image controls">
        <div className="hero-indicators" aria-label="Choose a hotel photograph">
          {slides.map((slide, index) => (
            <button
              key={slide.image.filename}
              className={`hero-indicator${index === activeIndex ? " is-active" : ""}`}
              type="button"
              aria-label={`Show photograph ${index + 1}: ${slide.caption}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button className="hero-arrow" type="button" aria-label="Previous photograph" onClick={() => changeSlide(-1)}>
          <span aria-hidden="true">←</span>
        </button>
        <span className="hero-slide-count" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(slides.length).padStart(2, "0")}
        </span>
        <button className="hero-arrow" type="button" aria-label="Next photograph" onClick={() => changeSlide(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <a className="scroll-cue" href="#about"><span /> Discover Springlands</a>
    </section>
  );
}
