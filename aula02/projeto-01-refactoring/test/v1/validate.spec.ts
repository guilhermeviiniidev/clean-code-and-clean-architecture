import { validate } from "../../src/v1/validate";

describe("validate", () => {
  test("Deve retornar verdadeiro para cpf válido", () => {
    const isValid = validate("585.193.320-80");
    expect(isValid).toBeTruthy();
  });

  test("Deve retornar falso se número de cpf for menor que 11 caracteres", () => {
    const isValid = validate("1234567891");
    expect(isValid).toBeFalsy();
  });
  test("Deve retornar falso se número de cpf for maior que 14 caracteres", () => {
    const isValid = validate("123456789111111");
    expect(isValid).toBeFalsy();
  });
  test("Deve retornar falso se cpf não for do tipo number", () => {
    const isValid = validate("123456789111111");
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se todos os números forem iguais", () => {
    const isValid = validate("11111111111");
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se cpf começar com 0", () => {
    const isValid = validate("004.406.300-03");
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se todos os números forem iguais", () => {
    const isValid = validate("004.406.300-03");
    expect(isValid).toBeFalsy();
  });
});
