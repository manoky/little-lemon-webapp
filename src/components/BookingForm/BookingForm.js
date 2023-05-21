import { useState } from "react";
import { BookingSlotList } from "../BookingSlotList";
import "./booking-form.css";

export const BookingForm = ({
  availableTimes = [],
  updateTimes,
  onDateBooked,
  onSubmit,
}) => {
  const today = new Date();
  const initDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  )
    .toISOString()
    .substring(0, 10);

  const [date, setDate] = useState(String(initDate));
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateBooked(time);
    onSubmit({ date, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateTimes(date);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="booking-form__wrapper">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={handleDateChange}
          value={date}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={handleTimeChange}
          defaultValue={availableTimes[0]}
          aria-label="Select reservation time"
        >
          {availableTimes.map((availableTime) => (
            <option
              key={availableTime.time}
              value={availableTime.time}
              disabled={availableTime.booked}
              dateTime={availableTime.time}
            >
              {availableTime.time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make your reservation" className="btn" />
      </form>
      {availableTimes.length > 0 && <BookingSlotList date={date} />}
    </div>
  );
};
