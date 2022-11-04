import Segment from "./Segment";

export default class Ride {
  readonly MIN_FARE = 10;

  private segments: Segment[];

  constructor() {
    this.segments = [];
  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  calculateFare() {
    let fare = 0;
    for (const segment of this.segments) {
      if (segment.isOvernight() && !segment.isSunday()) {
        fare += segment.distance * segment.OVERNIGHT_FARE;
      }
      if (segment.isOvernight() && segment.isSunday()) {
        fare += segment.distance * segment.OVERNIGHT_SUNDAY_FARE;
      }
      if (!segment.isOvernight() && segment.isSunday()) {
        fare += segment.distance * segment.SUNDAY_FARE;
      }
      if (!segment.isOvernight() && !segment.isSunday()) {
        fare += segment.distance * segment.NORMAL_FARE;
      }
    }

    return fare < this.MIN_FARE ? this.MIN_FARE : fare;
  }
}
