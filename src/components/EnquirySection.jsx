import { useState } from "react";
import { rooms } from "../data/rooms.js";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  arrival: "",
  departure: "",
  guests: "1",
  room: "",
  message: "",
};

export default function EnquirySection({ roomPreference, onRoomPreferenceChange }) {
  const [values, setValues] = useState(initialValues);
  const [notice, setNotice] = useState("");
  const [whatsAppFallback, setWhatsAppFallback] = useState("");

  const update = (event) => {
    setNotice("");
    setWhatsAppFallback("");
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (event.target.name === "room") onRoomPreferenceChange(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (values.departure <= values.arrival) {
      setNotice("Please choose a departure date later than your arrival date.");
      return;
    }

    const message = [
      "Hello Springlands Hotel, I would like to enquire about accommodation.",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone && `Telephone: ${values.phone}`,
      `Arrival: ${values.arrival}`,
      `Departure: ${values.departure}`,
      `Guests: ${values.guests}`,
      (roomPreference || values.room) && `Room preference: ${roomPreference || values.room}`,
      values.message && `Additional message: ${values.message}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/255753997777?text=${encodeURIComponent(message)}`;
    const chatWindow = window.open(url, "_blank");

    if (chatWindow) {
      chatWindow.opener = null;
      setWhatsAppFallback("");
      setNotice("Your enquiry is ready in WhatsApp. Review it there and press Send to contact the hotel.");
    } else {
      setWhatsAppFallback(url);
      setNotice("Your WhatsApp enquiry is ready. Open WhatsApp to review and send it to the hotel.");
    }
  };

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-intro">
        <p className="eyebrow">Make a plan</p>
        <h2><span className="heading-reveal-line">Your next adventure</span><span className="heading-reveal-line">starts <em>here.</em></span></h2>
        <p>Preparing for Kilimanjaro, returning from safari, or planning a peaceful getaway? Springlands Hotel welcomes you.</p>
        <div className="enquiry-promise"><span>01</span><p>Share your stay details and preferred room.</p></div>
        <div className="enquiry-promise"><span>02</span><p>Review and send your enquiry directly in WhatsApp.</p></div>
      </div>
      <form className="enquiry-form" onSubmit={submit}>
        <div className="form-heading"><h3>Plan your stay</h3><span>CONTACT THE HOTEL</span></div>
        <p className="form-notice">Your stay details open in WhatsApp so you can review your enquiry before sending it.</p>
        <div className="form-grid">
          <label>Full name<input name="name" autoComplete="name" value={values.name} onChange={update} required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" value={values.email} onChange={update} required /></label>
          <label>Telephone number<input name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={update} /></label>
          <label>Number of guests<input name="guests" type="number" min="1" max="50" value={values.guests} onChange={update} required /></label>
          <label>Arrival date<input name="arrival" type="date" value={values.arrival} onChange={update} required /></label>
          <label>Departure date<input name="departure" type="date" min={values.arrival || undefined} value={values.departure} onChange={update} required /></label>
          <label className="form-wide">Room preference
            <select name="room" value={roomPreference || values.room} onChange={update}>
              <option value="">Choose a room (optional)</option>
              {rooms.map((room) => <option key={room.name} value={room.name}>{room.name}</option>)}
            </select>
          </label>
          <label className="form-wide">Additional message<textarea name="message" rows="3" value={values.message} onChange={update} /></label>
        </div>
        <button className="button button-dark form-submit" type="submit">Continue in WhatsApp <span aria-hidden="true">↗</span></button>
        <p className="form-status" role="status" aria-live="polite">
          {notice}
          {whatsAppFallback && <> <a href={whatsAppFallback} target="_blank" rel="noopener noreferrer">Open WhatsApp</a></>}
        </p>
      </form>
    </section>
  );
}
