import { calculateRide } from "../../src/v2/calculateRide";

test("Deve calcular uma corrida em horário normal", () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-10T10:00:00") }]);
  expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horário noturno", () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-10T22:00:00") }]);
  expect(fare).toBe(39);
});

test("Deve calcular uma corrida em horário domingo", () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-07T10:00:00") }]);
  expect(fare).toBe(29);
});

test("Deve calcular uma corrida em horário domingo a noite", () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-07T22:00:00") }]);
  expect(fare).toBe(50);
});
test("Não deve calcular uma corrida com distância inválida", () => {
  expect(() => calculateRide([{ distance: -10, date: new Date("2021-03-07T22:00:00") }])).toThrow(new Error("Invalid distance"));
});

test("Não deve calcular uma corrida com data inválida", () => {
  expect(() => calculateRide([{ distance: 10, date: new Date("javascript") }])).toThrow(new Error("Invalid date"));
});

test("Deve calcular uma corrida em horário normal com valor minimo", () => {
  const fare = calculateRide([{ distance: 3, date: new Date("2021-03-10T10:00:00") }]);
  expect(fare).toBe(10);
});
