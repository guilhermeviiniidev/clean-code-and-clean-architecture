import { Discount } from "./Discount";
import { Item } from "./Item";
import { ValidatorCPF } from "./Validator";

type PendingOrder = {
  description: string;
  price: number;
  quantity: number;
};

export class Order {
  readonly items: Item[] = [];

  constructor(readonly cpf: string, readonly cupomDiscount?: Discount) {
    if (!ValidatorCPF.isValidCPF(cpf)) throw new Error("Invalid CPF");
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  create(): PendingOrder {
    let price = this.items.reduce((acc, item) => (acc += item.quantity * item.price), 0);
    const description = this.items.map((item) => `${item.description} (${item.quantity})`);
    const quantity = this.items.reduce((quantity, item) => (quantity += item.quantity), 0);

    if (this.cupomDiscount) {
      price = price * this.cupomDiscount.percentage;
    }

    return {
      price,
      description: description.join(", "),
      quantity,
    };
  }
}
