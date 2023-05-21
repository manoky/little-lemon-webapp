import { BookingForm } from "../components/BookingForm";
import restaurant from "../assets/images/restaurant.jpg";
import chef from "../assets/images/chef.jpg";
import "./booking-page.css";

export const BookingPage = ({
  updateTimes,
  availableTimes,
  onDateBooked,
  onSubmit,
}) => {
  return (
    <section className="container booking-page">
      <h2>Little Lemon</h2>
      <span className="booking-page__city">Chicago</span>
      <h3>Find a table for any occasion</h3>
      <div className="booking-form__images-row">
        <div className="booking-form__image-col">
          <img src={restaurant} alt="" />
        </div>
        <div className="booking-form__image-col">
          <img src={chef} alt="" />
        </div>
      </div>
      <BookingForm
        updateTimes={updateTimes}
        onDateBooked={onDateBooked}
        availableTimes={availableTimes}
        onSubmit={onSubmit}
      />
    </section>
  );
};
