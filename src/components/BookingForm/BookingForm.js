import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BookingSlotList } from "../BookingSlotList";
import "./booking-form.css";

export const BookingForm = ({
  availableTimes = [],
  updateTimes,
  onDateBooked,
  onSubmit,
  loading,
}) => {
  const today = new Date();
  const initDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  )
    .toISOString()
    .substring(0, 10);

  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "guest must at least be one person or more")
      .required("Number of guests is required"),
    occasion: Yup.string()
      .oneOf(
        ["Birthday", "Anniversary"],
        "should be either Birthday or Anniversary"
      )
      .required("Occasion is required"),
  });
  const [date, setDate] = useState(String(initDate));

  const handleSubmit = (values) => {
    onDateBooked(values.time);
    onSubmit(values);
  };

  const handleDateChange = (fn) => (e) => {
    fn(e);
    setDate(e.target.value);
    updateTimes(date);
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    onSubmit: (values, { setSubmitting }) =>
      handleSubmit(values, setSubmitting),
    validationSchema,
  });

  return (
    <div className="booking-form__wrapper">
      <form className="booking-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          aria-label="date"
          onChange={handleDateChange(formik.handleChange)}
          value={formik.values.date || initDate}
          name="date"
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date && (
          <p className="booking-form__error">{formik.errors.date}</p>
        )}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={formik.handleChange}
          defaultValue={availableTimes[0]}
          aria-label="Select reservation time"
          name="time"
          onBlur={formik.handleBlur}
        >
          {availableTimes.map((availableTime, i) => (
            <option
              key={i}
              value={availableTime.time}
              disabled={availableTime.booked}
              dateTime={availableTime.time}
            >
              {availableTime.time}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time && (
          <p className="booking-form__error">{formik.errors.time}</p>
        )}
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          aria-label="number of guests"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.guests}
        />
        {formik.touched.guests && formik.errors.guests && (
          <p className="booking-form__error">{formik.errors.guests}</p>
        )}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Occasion"
        >
          <option>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion && (
          <p className="booking-form__error">{formik.errors.occasion}</p>
        )}
        <input
          type="submit"
          value={loading ? "Loading..." : "Make your reservation"}
          className="btn"
          aria-label="Make your reservation"
          disabled={formik.touched && Object.values(formik.errors).length > 0}
        />
      </form>
      {availableTimes.length > 0 && <BookingSlotList date={date} />}
    </div>
  );
};
