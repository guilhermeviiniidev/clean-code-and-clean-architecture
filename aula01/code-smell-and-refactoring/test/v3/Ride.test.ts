import Ride from "../../src/v3/Ride";

test("Deve calcular uma corrida em horário normal", () => {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horário noturno", () => {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-10T22:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(39);
});

test("Deve calcular uma corrida em horário domingo", () => {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-07T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(29);
});

test("Deve calcular uma corrida em horário domingo a noite", () => {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-07T22:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(50);
});
test("Não deve calcular uma corrida com distância inválida", () => {
  const ride = new Ride();
  expect(() => ride.addSegment(-10, new Date("2021-03-07T22:00:00"))).toThrow(new Error("Invalid distance"));
});

test("Não deve calcular uma corrida com data inválida", () => {
  const ride = new Ride();
  expect(() => ride.addSegment(10, new Date("javascript"))).toThrow(new Error("Invalid date"));
});

test("Deve calcular uma corrida em horário normal com valor minimo", () => {
  const ride = new Ride();
  ride.addSegment(3, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(10);
});
