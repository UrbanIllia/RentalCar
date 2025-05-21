import { useState } from "react";
import css from "./BookingForm.module.css";

const BookingForm = ({ carId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking for car ${carId} successful!`);
    setFormData({ name: "", email: "", date: "", comment: "" });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h3>Book your car now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name*"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email*"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        placeholder="Booking date"
      />
      <textarea
        name="comment"
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        placeholder="Comment"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default BookingForm;
