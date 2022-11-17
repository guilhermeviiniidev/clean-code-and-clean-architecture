export default class Dimensions {
  constructor(readonly heigth: number, readonly width: number, readonly length: number) {
    if (!this.isValidDimensions()) throw new Error("Nenhuma dimensão do item pode ser negativa");
  }

  isValidDimensions() {
    return this.heigth >= 0 && this.length >= 0 && this.width >= 0;
  }
}
