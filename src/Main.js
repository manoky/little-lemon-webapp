import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage, BookingPage } from "./pages";
import { useAvailableTimes } from "./context";
import { useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "./utils/fetchUtils";
import { ConfirmationPage } from "./pages/ConfirmationPage";

export const updateTimes = (date) => {
  return fetchAPI(new Date(Date.parse(date)));
};

export const initializeTimes = (date = new Date()) => {
  return fetchAPI(date);
};

export const Main = () => {
  const [loading, setLoading] = useState(false);

  const { availableTimes, dispatch } = useAvailableTimes();
  const navigate = useNavigate();

  const handleInitTimes = () => {
    dispatch({ type: "INIT_TIMES", payload: initializeTimes() });
  };

  const handleUpdateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", payload: updateTimes(date) });
  };
  const handleBookedDate = (time) => {
    dispatch({ type: "MARK_BOOKED", payload: time });
  };

  const submitForm = (formData) => {
    setLoading(true);
    submitAPI(formData);
    setTimeout(() => {
      setLoading(false);
      navigate("/confirmation");
    }, 2000);
  };

  useEffect(() => {
    handleInitTimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            updateTimes={handleUpdateTimes}
            onDateBooked={handleBookedDate}
            onSubmit={submitForm}
            loading={loading}
          />
        }
      />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
};
