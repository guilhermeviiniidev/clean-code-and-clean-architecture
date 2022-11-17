import Cpf from "../src/Cpf";

describe("Cpf", () => {
  test("Deve retornar verdadeiro para cpf válido", () => {
    const cpf = new Cpf("585.193.320-80");
    expect(cpf).toBeDefined();
  });

  test("Deve retornar falso se número de cpf for menor que 11 caracteres", () => {
    expect(() => new Cpf("1234567891")).toThrowError("CPF inválido");
  });
  test("Deve retornar falso se número de cpf for maior que 14 caracteres", () => {
    expect(() => new Cpf("123456789111111")).toThrowError("CPF inválido");
  });
  test("Deve retornar falso se cpf não for do tipo number", () => {
    expect(() => new Cpf("123456789111111")).toThrowError("CPF inválido");
  });

  test("Deve retornar falso se todos os números forem iguais", () => {
    expect(() => new Cpf("11111111111")).toThrowError("CPF inválido");
  });

  test("Deve retornar falso se cpf começar com 0", () => {
    expect(() => new Cpf("004.406.300-03")).toThrowError("CPF inválido");
  });

  test("Deve retornar falso se todos os números forem iguais", () => {
    expect(() => new Cpf("004.406.300-03")).toThrowError("CPF inválido");
  });
});
