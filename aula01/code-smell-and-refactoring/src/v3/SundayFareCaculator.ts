import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class SundayFareCaculator implements FareCalculator {
  readonly FARE = 2.9;
  next?: FareCalculator;

  constructor(next?: FareCalculator) {
    this.next = next;
  }

  calculate(segment: Segment): number {
    if (!segment.isOvernight() && segment.isSunday()) {
      return segment.distance * this.FARE;
    }
    if(!this.next) throw new Error('Could implementation calculator')

    return this.next.calculate(segment)
  }
}
