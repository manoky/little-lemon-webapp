import "./confirmation-page.css";
import restaurant from "../assets/images/restaurant.jpg";
export const ConfirmationPage = () => {
  return (
    <section className="container confirmation-page">
      <h2>Success!</h2>
      <div className="confirmation-image-wrapper">
        <img src={restaurant} alt="" />
      </div>
      <div>
        <p className="confirmation-message">
          Your reservation has successfully been booked
        </p>
        <p>Thank you for your business.</p>
      </div>
    </section>
  );
};
