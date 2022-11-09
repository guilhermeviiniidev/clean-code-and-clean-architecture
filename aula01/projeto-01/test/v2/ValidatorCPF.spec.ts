import { ValidatorCPF } from "../../src/v2/Validator";

describe("ValidatorCPF", () => {
  test("Deve retornar verdadeiro para cpf válido", () => {
    const isValid = ValidatorCPF.isValidCPF("585.193.320-80");
    expect(isValid).toBeTruthy();
  });
  test("Deve retornar falso se valor for nulo", () => {
    const isValid = ValidatorCPF.isValidCPF(null);
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se número de cpf for menor que 11 caracteres", () => {
    const isValid = ValidatorCPF.isValidCPF("1234567891");
    expect(isValid).toBeFalsy();
  });
  test("Deve retornar falso se número de cpf for maior que 14 caracteres", () => {
    const isValid = ValidatorCPF.isValidCPF("123456789111111");
    expect(isValid).toBeFalsy();
  });
  test("Deve retornar falso se cpf não for do tipo number", () => {
    const isValid = ValidatorCPF.isValidCPF("123456789111111");
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se todos os números forem iguais", () => {
    const isValid = ValidatorCPF.isValidCPF("11111111111");
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se valor for undefined", () => {
    const isValid = ValidatorCPF.isValidCPF(undefined);
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se cpf começar com 0", () => {
    const isValid = ValidatorCPF.isValidCPF("004.406.300-03");
    expect(isValid).toBeFalsy();
  });

  test("Deve retornar falso se todos os números forem iguais", () => {
    const isValid = ValidatorCPF.isValidCPF("004.406.300-03");
    expect(isValid).toBeFalsy();
  });
});
