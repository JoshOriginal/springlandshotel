import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "../data/imageManifest.js";
import { hotel } from "../data/hotel.js";

function shuffleSlides(items) {
  const uniqueSlides = items.filter(
    (slide, index) => slide?.image?.filename
      && items.findIndex((item) => item?.image?.filename === slide.image.filename) === index,
  );

  for (let index = uniqueSlides.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [uniqueSlides[index], uniqueSlides[swapIndex]] = [uniqueSlides[swapIndex], uniqueSlides[index]];
  }
  return uniqueSlides;
}

export default function Hero() {
  const [slides] = useState(() => shuffleSlides(heroSlides));
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const swipeStart = useRef(null);
  const requestId = useRef(0);
  const imageCache = useRef(new Map());
  const activeSlide = slides[activeIndex];
  const previousSlide = previousIndex === null ? null : slides[previousIndex];
  const nextIndex = (activeIndex + 1) % slides.length;

  const preloadSlide = useCallback((slide, priority = "low") => {
    const filename = slide?.image?.filename;
    if (!filename) return Promise.reject(new Error("The selected hero slide has no image."));

    const cached = imageCache.current.get(filename);
    if (cached) {
      if (priority === "high") cached.image.fetchPriority = "high";
      return cached.promise;
    }

    const image = new window.Image();
    image.sizes = "100vw";
    image.srcset = slide.image.srcSet;
    image.fetchPriority = priority;
    image.src = slide.image.src;
    const loaded = image.decode().then(() => image).catch((error) => {
      if (image.naturalWidth > 0) return image;
      imageCache.current.delete(filename);
      throw new Error(`Unable to load the hero photograph "${filename}".`, { cause: error });
    });
    imageCache.current.set(filename, { image, promise: loaded });
    return loaded;
  }, []);

  const showSlide = useCallback(async (index) => {
    if (index === activeIndex) return;
    const request = ++requestId.current;

    try {
      await preloadSlide(slides[index], "high");
      if (request !== requestId.current) return;
      setLoadError("");
      setPreviousIndex(activeIndex);
      setActiveIndex(index);
    } catch (error) {
      if (request !== requestId.current) return;
      console.error(error);
      setLoadError(`The photograph "${slides[index].image.filename}" could not be loaded.`);
    }
  }, [activeIndex, preloadSlide, slides]);

  const changeSlide = useCallback((direction) => {
    showSlide((activeIndex + direction + slides.length) % slides.length);
  }, [activeIndex, showSlide, slides.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return undefined;
    const timer = window.setTimeout(() => changeSlide(1), 3000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, changeSlide, loadError, paused, reducedMotion, slides.length]);

  useEffect(() => {
    if (!previousSlide) return undefined;
    const timer = window.setTimeout(() => setPreviousIndex(null), 1300);
    return () => window.clearTimeout(timer);
  }, [previousSlide]);

  useEffect(() => {
    if (!slides[nextIndex]) return undefined;
    let cancelled = false;
    preloadSlide(slides[nextIndex]).catch((error) => {
      if (cancelled) return;
      console.error(error);
      setLoadError(`The next photograph "${slides[nextIndex].image.filename}" could not be preloaded.`);
    });
    return () => { cancelled = true; };
  }, [nextIndex, preloadSlide, slides]);

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

  if (!activeSlide) return null;

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
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{ objectPosition: activeSlide.objectPosition || "center 52%" }}
        />
        <figcaption>{activeSlide.caption}</figcaption>
      </figure>
      <div className="hero-copy">
        <p className="eyebrow"><span /> Moshi, Tanzania <span className="eyebrow-divider">·</span> Kilimanjaro region</p>
        <h1 id="hero-title">{hotel.headline}</h1>
        <p className="hero-tagline">
          Springlands Hotel – Where Comfort Meets Adventure, and Every Stay Feels Like Home.
        </p>
        <p className="hero-description">
          Springlands Hotel offers a welcoming escape in Moshi, where comfort, nature, and authentic Tanzanian hospitality meet.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="/contact#enquiry">Book your stay <span aria-hidden="true">↗</span></a>
          <a className="button hero-secondary-action" href="#accommodation">Explore Our Rooms <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <button
        className="hero-arrow hero-arrow-previous"
        type="button"
        aria-label="Previous photograph"
        onClick={() => changeSlide(-1)}
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        className="hero-arrow hero-arrow-next"
        type="button"
        aria-label="Next photograph"
        onClick={() => changeSlide(1)}
      >
        <span aria-hidden="true">→</span>
      </button>
      <div className="hero-controls" role="group" aria-label="Hero image controls">
        <div className="hero-indicators" role="group" aria-label="Choose a hotel photograph">
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
        <span className="hero-slide-count" aria-label={`Photograph ${activeIndex + 1} of ${slides.length}`}>
          {String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(slides.length).padStart(2, "0")}
        </span>
      </div>
      {loadError && <span className="visually-hidden" role="status">{loadError}</span>}
      <a className="scroll-cue" href="#about"><span /> Discover Springlands</a>
    </section>
  );
}
