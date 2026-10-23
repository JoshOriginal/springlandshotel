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

  const update = (event) => {
    setNotice("");
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (event.target.name === "room") onRoomPreferenceChange(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (values.departure <= values.arrival) {
      setNotice("Please choose a departure date later than your arrival date.");
      return;
    }
    setNotice("Your details look complete, but no message was sent. The hotel’s confirmed enquiry method or booking connection is not yet configured.");
  };

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-intro">
        <p className="eyebrow">Make a plan</p>
        <h2><span className="heading-reveal-line">Your next adventure</span><span className="heading-reveal-line">starts <em>here.</em></span></h2>
        <p>Preparing for Kilimanjaro, returning from safari, or planning a peaceful getaway? Springlands Hotel welcomes you.</p>
        <div className="enquiry-promise"><span>01</span><p>Share your stay details and preferred room.</p></div>
        <div className="enquiry-promise"><span>02</span><p>The form is a preview only; your enquiry will not be sent yet.</p></div>
      </div>
      <form className="enquiry-form" onSubmit={submit}>
        <div className="form-heading"><h3>Plan your stay</h3><span>ENQUIRY PREVIEW</span></div>
        <p className="form-notice">This form does not send or store your information. A verified hotel contact or booking integration is needed before launch.</p>
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
        <button className="button button-dark form-submit" type="submit">Review enquiry <span aria-hidden="true">↗</span></button>
        <p className="form-status" role="status" aria-live="polite">{notice}</p>
      </form>
    </section>
  );
}
