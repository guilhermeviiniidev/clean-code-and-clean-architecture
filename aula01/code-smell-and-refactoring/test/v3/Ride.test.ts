import NormalFareCalculator from "../../src/v3/NormalFareCaculator";
import OvernightFareCaculator from "../../src/v3/OvernightFareCaculator";
import OvernightSundayFareCaculator from "../../src/v3/OvernightSundayFareCaculator";
import Ride from "../../src/v3/Ride";
import SundayFareCaculator from "../../src/v3/SundayFareCaculator";

let ride: Ride;
beforeEach(() => {
  const normalFareCalculator = new NormalFareCalculator();
  const overnightFareCaculator = new OvernightFareCaculator(normalFareCalculator);
  const sundayFareCaculator = new SundayFareCaculator(overnightFareCaculator);
  const overnightSundayFareCaculator = new OvernightSundayFareCaculator(sundayFareCaculator);
  ride = new Ride(overnightSundayFareCaculator);
});

test("Deve calcular uma corrida em horário normal", () => {
  ride.addSegment(10, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horário noturno", () => {
  ride.addSegment(10, new Date("2021-03-10T22:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(39);
});

test("Deve calcular uma corrida em horário domingo", () => {
  ride.addSegment(10, new Date("2021-03-07T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(29);
});

test("Deve calcular uma corrida em horário domingo a noite", () => {
  ride.addSegment(10, new Date("2021-03-07T22:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(50);
});
test("Não deve calcular uma corrida com distância inválida", () => {
  expect(() => ride.addSegment(-10, new Date("2021-03-07T22:00:00"))).toThrow(new Error("Invalid distance"));
});

test("Não deve calcular uma corrida com data inválida", () => {
  expect(() => ride.addSegment(10, new Date("javascript"))).toThrow(new Error("Invalid date"));
});

test("Deve calcular uma corrida em horário normal com valor minimo", () => {
  ride.addSegment(3, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(10);
});
