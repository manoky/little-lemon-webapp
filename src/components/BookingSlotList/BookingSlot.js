import './booking-slot.css'

export const BookingSlot = ({ slot }) => {
  const statusClass = slot.booked ? 'booked' : 'available'
  return (
    <p className="booking-slot">
      {slot.time}
      <span className={`booking-slot__pill ${statusClass}`}>
        {slot.booked ? 'Booked' : 'Available'}
      </span>
    </p>
  )
}
