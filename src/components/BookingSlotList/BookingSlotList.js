import { BookingSlot } from "./BookingSlot";
import { useAvailableTimes } from "../../context";
import "./booking-slot-list.css";

export const BookingSlotList = ({ date }) => {
  const { availableTimes } = useAvailableTimes();
  const dateCurrent = new Date(Date.parse(date));

  return (
    <aside className="booking-slot-list">
      <h2>Date: {dateCurrent.toLocaleDateString()}</h2>
      <p className="booking-slot-list__info">Available Time slots</p>
      {availableTimes.map((slot) => (
        <BookingSlot key={slot.time} slot={slot} />
      ))}
    </aside>
  );
};
