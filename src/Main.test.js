import { updateTimes, initializeTimes } from "./Main";

describe("Times Date", () => {
  it("return initial times based on dates", () => {
    expect(initializeTimes(new Date()).length).toBeGreaterThan(0);
  });

  it("updates times date on date change", () => {
    expect(updateTimes("2023-05-23").length).toBeGreaterThan(0);
  });
});
