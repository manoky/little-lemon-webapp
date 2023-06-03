/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingForm } from "./BookingForm";
import { AvailableTimesProvider } from "../../context";

const availableTimes = [
  { time: "17:00" },
  { time: "17:30" },
  { time: "18:00" },
];

const setup = (props = {}) => {
  return render(
    <AvailableTimesProvider>
      <BookingForm {...props} />
    </AvailableTimesProvider>
  );
};
describe("BookingForm", () => {
  describe("Initial Booking form", () => {
    it("should display booking form details", () => {
      setup({ availableTimes });

      expect(screen.getByText("Choose date")).toBeInTheDocument();
      expect(screen.getByText("Choose time")).toBeInTheDocument();
      expect(screen.getByText("Number of guests")).toBeInTheDocument();
      expect(screen.getByText("Occasion")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /make your reservation/i })
      ).toBeInTheDocument();
    });
  });

  describe("Booking Form validation", () => {
    it("should display error for all empty fields when is submitted without values", async () => {
      const updateTimes = jest.fn();
      const onDateBooked = jest.fn();
      const onSubmit = jest.fn();

      setup({
        availableTimes,
        updateTimes,
        onDateBooked,
        onSubmit,
      });

      await act(() => {
        userEvent.click(screen.getByText(/make your reservation/i));
      });

      const dateError = await screen.findByText(/date is required/i);
      expect(dateError).not.toBeNull();

      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/number of guests is required/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();

      expect(updateTimes).not.toHaveBeenCalled();
      expect(onDateBooked).not.toHaveBeenCalled();
      expect(onSubmit).not.toHaveBeenCalled();
    });
    it("should not display error when a valid form is submitted", async () => {
      const updateTimes = jest.fn();
      const onDateBooked = jest.fn();
      const onSubmit = jest.fn();

      setup({
        availableTimes,
        updateTimes,
        onDateBooked,
        onSubmit,
      });

      await act(async () => {
        fireEvent.change(screen.getByLabelText(/choose date/i), {
          target: { value: "2023-05-29" },
        });

        await userEvent.selectOptions(
          screen.getByRole("combobox", {
            name: "Select reservation time",
          }),
          ["17:00"]
        );

        await userEvent.selectOptions(
          screen.getByRole("combobox", {
            name: "Occasion",
          }),
          ["Birthday"]
        );

        const input = screen.getByLabelText(/number of guests/i);
        await userEvent.type(input, "1");
        await userEvent.click(screen.getByText(/make your reservation/i));
      });

      expect(screen.queryByText(/date is required/i)).toBeNull();
      expect(screen.queryByText(/time is required/i)).toBeNull();
      expect(screen.queryByText(/number of guests is required/i)).toBeNull();
      expect(screen.queryByText(/occasion is required/i)).toBeNull();

      expect(updateTimes).toHaveBeenCalled();
      expect(onDateBooked).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
