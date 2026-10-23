import { useEffect } from "react";

const revealSelector = [
  ".hero-copy",
  ".about-grid h2",
  ".about-copy > p",
  ".about-photo",
  ".about-stats > div",
  ".section-heading-row h2",
  ".section-intro",
  ".room-card",
  ".facilities-intro > *",
  ".facility-item",
  ".facility-photos figure",
  ".experience-aside > *",
  ".experience-card",
  ".gallery-heading h2",
  ".gallery-heading > p",
  ".gallery-grid figure",
  ".video-copy > *",
  ".faq-content > *",
  ".contact-copy > *",
  ".contact-location",
  ".enquiry-intro > *",
  ".enquiry-form > *",
  ".footer-main > *",
  ".footer-bottom > *",
].join(",");

const tiltSelector = ".room-card, .experience-card, .gallery-grid figure, .button";

export default function ScrollExperience() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let observer;
    let currentTiltTarget = null;
    let scrollFrame = 0;

    const revealTargets = [...new Set(document.querySelectorAll(revealSelector))];
    if (!reduceMotion.matches && "IntersectionObserver" in window && revealTargets.length) {
      const siblingCounts = new Map();
      revealTargets.forEach((target) => {
        const parent = target.parentElement;
        const index = siblingCounts.get(parent) ?? 0;
        siblingCounts.set(parent, index + 1);
        target.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 70}ms`);
        target.classList.add("motion-reveal");
      });
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px" });
      revealTargets.forEach((target) => observer.observe(target));
      document.documentElement.classList.add("motion-enhanced");
    }

    const updateScrollEffects = () => {
      scrollFrame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);

      if (observer) {
        revealTargets.forEach((target) => {
          if (target.classList.contains("motion-reveal")
            && !target.classList.contains("is-visible")
            && target.getBoundingClientRect().bottom <= 0) {
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      }

      if (!reduceMotion.matches) {
        const heroImage = document.querySelector(".hero-image");
        if (heroImage) {
          const sectionTop = heroImage.closest(".hero").getBoundingClientRect().top;
          heroImage.style.setProperty("--parallax-offset", `${Math.max(-16, Math.min(16, -sectionTop * 0.035))}px`);
        }
        const aboutImage = document.querySelector(".about-photo img");
        if (aboutImage) {
          const distance = aboutImage.getBoundingClientRect().top - window.innerHeight / 2;
          aboutImage.style.setProperty("--parallax-offset", `${Math.max(-10, Math.min(10, -distance * 0.018))}px`);
        }
      }
    };

    const scheduleScrollEffects = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects);
    };
    window.addEventListener("scroll", scheduleScrollEffects, { passive: true });
    window.addEventListener("resize", scheduleScrollEffects, { passive: true });
    scheduleScrollEffects();

    const clearTilt = () => {
      if (!currentTiltTarget) return;
      currentTiltTarget.style.removeProperty("transform");
      currentTiltTarget.classList.remove("is-tilting");
      currentTiltTarget = null;
    };
    const onPointerMove = (event) => {
      if (!finePointer.matches || reduceMotion.matches || event.pointerType !== "mouse") return;
      const target = event.target.closest(tiltSelector);
      if (target !== currentTiltTarget) clearTilt();
      if (!target) return;
      currentTiltTarget = target;
      const bounds = target.getBoundingClientRect();
      const maxTilt = target.matches(".button") ? 1.2 : target.matches(".gallery-grid figure") ? 1.7 : 2.6;
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      const rotateX = (0.5 - y) * maxTilt * 2;
      const rotateY = (x - 0.5) * maxTilt * 2;
      const lift = target.matches(".button") ? -2 : -4;
      target.classList.add("is-tilting");
      target.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(${lift}px)`;
    };
    const onPointerOut = (event) => {
      if (currentTiltTarget && !currentTiltTarget.contains(event.relatedTarget)) clearTilt();
    };
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });

    return () => {
      observer?.disconnect();
      document.documentElement.classList.remove("motion-enhanced");
      revealTargets.forEach((target) => {
        target.classList.remove("motion-reveal", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });
      window.removeEventListener("scroll", scheduleScrollEffects);
      window.removeEventListener("resize", scheduleScrollEffects);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      clearTilt();
    };
  }, []);

  return <div className="reading-progress" aria-hidden="true" />;
}
