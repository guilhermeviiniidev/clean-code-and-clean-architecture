export default class Cpf {
  constructor(readonly value: string) {
    if (!this.validate(this.value)) throw new Error("CPF inválido");
  }

  private validate(cpf: string) {
    if (!cpf) return false;
    cpf = this.cleanCpf(cpf);
    if (!this.isValidLength(cpf)) return false;
    if (this.hasAllDigitsEqual(cpf)) return false;
    const digit1 = this.calculateDigit(cpf, 10);
    const digit2 = this.calculateDigit(cpf, 11);
    let checkDigit = this.extractDigit(cpf);
    const calculatedDigit = `${digit1}${digit2}`;
    return checkDigit == calculatedDigit;
  }

  private cleanCpf(cpf: string) {
    return cpf.replace(/\D/g, "");
  }

  private isValidLength(cpf: string) {
    return cpf.length === 11;
  }

  private calculateDigit(cpf: string, factor: number) {
    let total = 0;
    for (const digit of cpf) {
      if (factor > 1) total += Number(digit) * factor--;
    }
    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
  }

  private hasAllDigitsEqual(cpf: string) {
    const [fistDigit] = cpf;
    return cpf.split("").every((digit) => digit === fistDigit);
  }

  private extractDigit(cpf: string) {
    return cpf.slice(9);
  }
}
