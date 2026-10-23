import { useEffect, useRef, useState } from "react";
import { attractions } from "../data/attractions.js";
import { facilities } from "../data/facilities.js";
import { faqs } from "../data/faqs.js";
import {
  aboutImage,
  attractionImages,
  facilityImages,
  galleryImages,
  roomImages,
} from "../data/imageManifest.js";
import { rooms } from "../data/rooms.js";

function RoomPhotoPlaceholder({ roomName, onClick }) {
  return (
    <button
      className="room-photo-placeholder room-photo-brand"
      type="button"
      onClick={onClick}
      aria-label={`View details for ${roomName}`}
    >
      <span className="room-brand-mark" aria-hidden="true">S</span>
      <span className="room-brand-name">Springlands Hotel</span>
      <span className="room-photo-placeholder-action">View room details <span aria-hidden="true">↗</span></span>
    </button>
  );
}

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-index">01 <span>·</span> A WELCOME IN MOSHI</div>
      <div className="about-grid">
        <div className="about-lead-column">
          <div>
            <p className="eyebrow eyebrow-green">A place to pause</p>
            <h2><span className="heading-reveal-line">Where comfort</span><span className="heading-reveal-line">meets <em>adventure.</em></span></h2>
          </div>
          <figure className="about-photo">
            <img
              src={aboutImage.src}
              srcSet={aboutImage.srcSet}
              sizes="(max-width: 700px) 100vw, 45vw"
              width={aboutImage.originalDimensions.width}
              height={aboutImage.originalDimensions.height}
              alt={aboutImage.alt}
              loading="lazy"
            />
            <figcaption>Springlands Hotel · Courtyard and gardens</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <p className="lead">{`A peaceful place to land before the climb, after the safari, or simply whenever Moshi calls.`}</p>
          <p>{`Settle into comfortable accommodation, unwind in tropical gardens, cool off in the outdoor pool, and enjoy dining with a friendly team. Springlands welcomes solo travelers, couples, groups, climbers, safari travelers, and holidaymakers.`}</p>
          <p className="family-note">Part of the wider Zara Tanzania Adventures hospitality family.</p>
          <a className="text-link text-link-green" href="#facilities">Get to know the hotel <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="about-stats" aria-label="Hotel highlights">
        <div><strong>01</strong><span>Welcoming base<br />in Moshi</span></div>
        <div><strong>02</strong><span>Rest between<br />adventures</span></div>
        <div><strong>03</strong><span>Warm Tanzanian<br />hospitality</span></div>
      </div>
    </section>
  );
}

export function RoomsSection({ onSelectRoom }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const roomDialogRef = useRef(null);

  useEffect(() => {
    const dialog = roomDialogRef.current;
    if (selectedRoom && dialog && !dialog.open) dialog.showModal();
    if (!selectedRoom && dialog?.open) dialog.close();
  }, [selectedRoom]);

  return (
    <section className="section rooms-section" id="accommodation">
      <div className="section-index">02 <span>·</span> ACCOMMODATION</div>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow eyebrow-green">Find your place to rest</p>
          <h2><span className="heading-reveal-line">Room for every</span><span className="heading-reveal-line"><em>kind of journey.</em></span></h2>
        </div>
        <p className="section-intro">From a quiet solo stay to a room shared with your trekking team, choose the accommodation that suits your time in Moshi.</p>
      </div>
      <div className="room-grid">
        {rooms.map((room, index) => (
          <article className={`room-card room-card-${index + 1}`} key={room.name}>
            {roomImages[room.name].image ? (
              <button
                className="room-photo-button"
                type="button"
                onClick={() => setSelectedRoom(room)}
                aria-label={`View ${room.name} photo and details`}
              >
                <img
                  className="room-photo"
                  src={roomImages[room.name].image.src}
                  srcSet={roomImages[room.name].image.srcSet}
                  sizes="(max-width: 430px) 86vw, (max-width: 700px) 44vw, (max-width: 980px) 44vw, 27vw"
                  width={roomImages[room.name].image.originalDimensions.width}
                  height={roomImages[room.name].image.originalDimensions.height}
                  alt={roomImages[room.name].image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="room-photo-action">View room details <span aria-hidden="true">↗</span></span>
              </button>
            ) : (
              <RoomPhotoPlaceholder
                roomName={room.name}
                onClick={() => setSelectedRoom(room)}
              />
            )}
            <div className="room-content">
              <h3>
                <button className="room-title-button" type="button" onClick={() => setSelectedRoom(room)}>
                  {room.name}
                </button>
              </h3>
              <p>{room.description}</p>
              <ul className="feature-list">
                {room.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className="room-link" href="#enquiry" onClick={() => onSelectRoom(room.name)}>
                Enquire about this room <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <dialog
        className="room-dialog"
        ref={roomDialogRef}
        aria-labelledby="room-dialog-title"
        onClose={() => setSelectedRoom(null)}
        onCancel={(event) => {
          event.preventDefault();
          setSelectedRoom(null);
          event.currentTarget.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setSelectedRoom(null);
            roomDialogRef.current?.close();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {selectedRoom && (
          <div className="room-dialog-content">
            <button className="dialog-close" type="button" onClick={() => roomDialogRef.current?.close()} aria-label="Close room details">
              <span aria-hidden="true">×</span>
            </button>
            {roomImages[selectedRoom.name].image ? (
              <img
                className="room-dialog-image"
                src={roomImages[selectedRoom.name].image.src}
                srcSet={roomImages[selectedRoom.name].image.srcSet}
                sizes="(max-width: 700px) 90vw, 760px"
                width={roomImages[selectedRoom.name].image.originalDimensions.width}
                height={roomImages[selectedRoom.name].image.originalDimensions.height}
                alt={roomImages[selectedRoom.name].image.alt}
              />
            ) : (
              <div className="room-photo-placeholder room-photo-brand room-photo-placeholder-static" aria-hidden="true">
                <span className="room-brand-mark">S</span>
                <span className="room-brand-name">Springlands Hotel</span>
              </div>
            )}
            <p className="eyebrow eyebrow-green">Accommodation details</p>
            <h2 id="room-dialog-title">{selectedRoom.name}</h2>
            <p>{selectedRoom.description}</p>
            <ul className="room-dialog-features">
              {selectedRoom.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a
              className="button button-dark"
              href="#enquiry"
              onClick={() => {
                onSelectRoom(selectedRoom.name);
                roomDialogRef.current?.close();
              }}
            >
              Enquire about this room <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}

export function FacilitiesSection() {
  return (
    <section className="section facilities-section" id="facilities">
      <div className="section-index">03 <span>·</span> THOUGHTFUL COMFORTS</div>
      <div className="facilities-layout">
        <div className="facilities-intro">
          <p className="eyebrow">Make yourself at home</p>
          <h2><span className="heading-reveal-line">Little comforts.</span><span className="heading-reveal-line"><em>More moments.</em></span></h2>
          <p>Everything you need to settle in, recharge, and get ready for what comes next.</p>
          <a className="button button-light" href="#enquiry">Ask about your stay <span aria-hidden="true">↗</span></a>
        </div>
        <div className="facilities-list">
          {facilities.map((facility, index) => (
            <article className="facility-item" key={facility.name}>
              <span className="facility-index">0{index + 1}</span>
              <div><h3>{facility.name}</h3><p>{facility.note}</p></div>
              <span className="facility-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
      <div className="facility-photos">
        {facilityImages.map((image) => (
          <figure key={image.filename}>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(max-width: 700px) 100vw, 25vw"
              width={image.originalDimensions.width}
              height={image.originalDimensions.height}
              alt={image.alt}
              loading="lazy"
            />
            <figcaption>{image.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function ExperiencesSection() {
  return (
    <section className="section experiences-section" id="experiences">
      <div className="section-index">04 <span>·</span> OUT AND ABOUT</div>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow eyebrow-green">A northern Tanzania welcome</p>
          <h2><span className="heading-reveal-line">Discover more of</span><span className="heading-reveal-line"><em>northern Tanzania.</em></span></h2>
        </div>
        <div className="experience-aside">
          <p>Make Springlands your welcoming base for exploring the region. Ask the hotel about local experiences and transport assistance.</p>
          <a className="text-link text-link-green" href="#enquiry">Ask about local experiences <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="experience-grid">
        {attractions.map((place, index) => {
          const image = attractionImages[place.imageKey];
          return (
            <article
              className={`experience-card experience-card-${index + 1}${image ? " experience-card-photo" : ""}`}
              key={place.name}
            >
              {image ? (
                <button
                  className="experience-image-trigger"
                  type="button"
                  aria-label={`Open image in gallery: ${image.alt}`}
                  onClick={() => window.dispatchEvent(new CustomEvent("springlands:open-gallery-image", {
                    detail: { filename: image.filename },
                  }))}
                >
                  <img
                    className="experience-image"
                    src={image.src}
                    srcSet={image.srcSet}
                    sizes="(max-width: 700px) 50vw, 33vw"
                    width={image.originalDimensions.width}
                    height={image.originalDimensions.height}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="experience-photo-action">Open photo <span aria-hidden="true">↗</span></span>
                </button>
              ) : (
                null
              )}
              <span className="experience-category">{place.category}</span>
              <span className="experience-number">0{index + 1}</span>
              <div><h3>{place.name}</h3><p>{place.description}</p></div>
              <span className="experience-line" />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function GallerySection() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
  const galleryDialogRef = useRef(null);
  const activeImage = activeGalleryIndex === null ? null : galleryImages[activeGalleryIndex];

  useEffect(() => {
    const dialog = galleryDialogRef.current;
    if (activeImage && dialog && !dialog.open) dialog.showModal();
    if (!activeImage && dialog?.open) dialog.close();
  }, [activeImage]);

  useEffect(() => {
    if (activeGalleryIndex === null) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveGalleryIndex((index) => (index + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveGalleryIndex((index) => (index - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGalleryIndex]);

  useEffect(() => {
    const openGalleryImage = (event) => {
      const index = galleryImages.findIndex((image) => image.filename === event.detail?.filename);
      if (index >= 0) setActiveGalleryIndex(index);
    };
    window.addEventListener("springlands:open-gallery-image", openGalleryImage);
    return () => window.removeEventListener("springlands:open-gallery-image", openGalleryImage);
  }, []);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-index">05 <span>·</span> A GLIMPSE OF SPRINGLANDS</div>
      <div className="gallery-heading">
        <div>
          <p className="eyebrow eyebrow-green">Gallery</p>
          <h2><span className="heading-reveal-line">See it for <em>yourself.</em></span></h2>
        </div>
        <p>Selected photographs of the hotel, rooms, gardens, and guest spaces.</p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <figure key={image.filename}>
            <button
              className="gallery-trigger"
              type="button"
              onClick={() => setActiveGalleryIndex(index)}
              aria-label={`Open gallery image: ${image.alt}`}
            >
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes="(max-width: 700px) 50vw, 33vw"
                width={image.originalDimensions.width}
                height={image.originalDimensions.height}
                alt={image.alt}
                loading="lazy"
              />
              <span className="gallery-caption">{image.subject}</span>
            </button>
          </figure>
        ))}
      </div>
      <dialog
        className="gallery-dialog"
        ref={galleryDialogRef}
        aria-label="Photo gallery"
        onClose={() => setActiveGalleryIndex(null)}
        onCancel={(event) => {
          event.preventDefault();
          setActiveGalleryIndex(null);
          event.currentTarget.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setActiveGalleryIndex(null);
            galleryDialogRef.current?.close();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {activeImage && (
          <div className="gallery-dialog-content">
            <button className="dialog-close" type="button" onClick={() => galleryDialogRef.current?.close()} aria-label="Close gallery">
              <span aria-hidden="true">×</span>
            </button>
            <button
              className="gallery-nav gallery-nav-previous"
              type="button"
              onClick={() => setActiveGalleryIndex((index) => (index - 1 + galleryImages.length) % galleryImages.length)}
              aria-label="Previous image"
            >
              <span aria-hidden="true">←</span>
            </button>
            <figure>
              <img
                src={activeImage.src}
                srcSet={activeImage.srcSet}
                sizes="(max-width: 700px) 90vw, 1100px"
                width={activeImage.originalDimensions.width}
                height={activeImage.originalDimensions.height}
                alt={activeImage.alt}
              />
              <figcaption>{activeImage.subject} · {activeGalleryIndex + 1} of {galleryImages.length}</figcaption>
            </figure>
            <button
              className="gallery-nav gallery-nav-next"
              type="button"
              onClick={() => setActiveGalleryIndex((index) => (index + 1) % galleryImages.length)}
              aria-label="Next image"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}

export function VideoSection() {
  return null;
}

export function FaqSection() {
  if (!faqs.length) return null;
  return (
    <section className="section faq-section" id="faqs">
      <div className="section-index">06 <span>·</span> GOOD TO KNOW</div>
      <div className="faq-content">
        <div><p className="eyebrow eyebrow-green">Your questions</p><h2><span className="heading-reveal-line">Good <em>to know.</em></span></h2></div>
        <div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>
  );
}

export const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.887373704311!2d37.340879974972154!3d-3.377693496596959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1839d84fffffffff%3A0xaa398c768ee13da9!2sSpringlands%20Hotel%20Moshi!5e0!3m2!1sen!2ske!4v1792761467420!5m2!1sen!2ske";
export const mapDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=-3.377693496596959%2C37.340879974972154";

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-mark" aria-hidden="true">S</div>
      <div className="contact-copy">
        <p className="eyebrow">Find your way to us</p>
        <h2><span className="heading-reveal-line">A warm welcome</span><span className="heading-reveal-line">in <em>Moshi.</em></span></h2>
        <p>Springlands Hotel is in Moshi, Tanzania, at the foothills of Mount Kilimanjaro.</p>
        <a className="contact-directions" href={mapDirectionsUrl} target="_blank" rel="noopener noreferrer">
          Get directions <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </div>
      <div className="contact-map">
        <iframe
          title="Map showing the location of Springlands Hotel in Moshi, Tanzania"
          src={mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="contact-location"><span className="location-dot" /><div><strong>Moshi, Tanzania</strong><span>Kilimanjaro region</span></div></div>
      </div>
    </section>
  );
}
