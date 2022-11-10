import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OvernightSundayFareCaculator implements FareCalculator {
  readonly FARE = 5;
  next?: FareCalculator;

  constructor(next?: FareCalculator) {
    this.next = next;
  }

  calculate(segment: Segment): number {
    if (segment.isOvernight() && segment.isSunday()) {
      return segment.distance * this.FARE;
    }
    if(!this.next) throw new Error('Could implementation calculator')

    return this.next.calculate(segment)
  }
}
