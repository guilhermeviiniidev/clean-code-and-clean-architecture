import Dimensions from "./Dimensions";

export default class OrderItem {
  constructor(
    readonly idItem: number,
    readonly price: number,
    readonly quantity: number,
    readonly dimensions: Dimensions,
    readonly weight: number
  ) {
    if (!this.isValidQuantity()) throw new Error("Quantidade do item pedido não pode ser negativa");
    if (!this.isValidWeight()) throw new Error("O peso do item não pode ser negativo");
  }

  private isValidQuantity() {
    return this.quantity >= 0;
  }

  private isValidWeight() {
    return this.weight >= 0;
  }

  public getTotal(): number {
    return this.price * this.quantity;
  }
}
