export default class Segment {
  private readonly OVERNIGHT_START = 22;
  private readonly OVERNIGHT_END = 6;
  readonly OVERNIGHT_FARE = 3.9;
  readonly OVERNIGHT_SUNDAY_FARE = 5;
  readonly SUNDAY_FARE = 2.9;
  readonly NORMAL_FARE = 2.1;

  constructor(readonly distance: number, readonly date: Date) {
    if (!this.isValidDate()) throw new Error("Invalid date");
    if (!this.isValidDistance()) throw new Error("Invalid distance");
  }

  isValidDistance() {
    return this.distance && typeof this.distance === "number" && this.distance > 0;
  }

  isValidDate() {
    return this.date && this.date instanceof Date && this.date.toString() !== "Invalid Date";
  }

  isOvernight() {
    return this.date.getHours() >= this.OVERNIGHT_START || this.date.getHours() <= this.OVERNIGHT_END;
  }

  isSunday() {
    return this.date.getDay() === 0;
  }
}
