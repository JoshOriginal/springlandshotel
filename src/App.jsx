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
  VideoSection,
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
        <VideoSection />
        <FaqSection />
        <ContactSection />
        <EnquirySection
          roomPreference={roomPreference}
          onRoomPreferenceChange={setRoomPreference}
        />
      </main>
      <Footer />
    </>
  );
}
