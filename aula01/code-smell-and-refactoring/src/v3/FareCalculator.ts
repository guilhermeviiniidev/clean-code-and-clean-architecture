import Segment from "./Segment";

export default interface FareCalculator {
  next?: FareCalculator;
  calculate(segement: Segment): number;
}
