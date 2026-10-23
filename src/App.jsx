import { useState } from "react";
import { hotel } from "./data/hotel.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import EnquirySection from "./components/EnquirySection.jsx";
import Footer from "./components/Footer.jsx";
import ScrollExperience from "./components/ScrollExperience.jsx";
import {
  AboutSection,
  ContactSection,
  ExperiencesSection,
  FacilitiesSection,
  FaqSection,
  GallerySection,
  RoomsSection,
} from "./components/Sections.jsx";

export default function App() {
  const [roomPreference, setRoomPreference] = useState("");

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollExperience />
      <Header />
      <main id="main">
        <Hero />
        <div className="brand-strip">
          <span>{hotel.location}</span>
          <span className="strip-flower" aria-hidden="true">✳</span>
          <span>Mount Kilimanjaro</span>
          <span className="strip-flower" aria-hidden="true">✳</span>
          <span>Warm Tanzanian hospitality</span>
        </div>
        <AboutSection />
        <RoomsSection onSelectRoom={setRoomPreference} />
        <FacilitiesSection />
        <ExperiencesSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
        <EnquirySection
          roomPreference={roomPreference}
          onRoomPreferenceChange={setRoomPreference}
        />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
        href="https://wa.me/255753997777"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Springlands Hotel on WhatsApp (opens in a new tab)"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M16.02 3C9.38 3 4 8.37 4 15c0 2.12.56 4.19 1.61 6.01L4 29l8.17-1.57A12 12 0 0 0 16.02 27C22.65 27 28 21.63 28 15S22.65 3 16.02 3Zm0 21.9c-1.2 0-2.38-.28-3.44-.82l-.5-.26-4.85.93.96-4.7-.28-.5A9.9 9.9 0 0 1 6.1 15c0-5.45 4.46-9.9 9.92-9.9S25.9 9.55 25.9 15s-4.44 9.9-9.88 9.9Zm5.45-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
        </svg>
      </a>
    </>
  );
}
