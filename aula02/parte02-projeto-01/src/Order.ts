import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Dimensions from "./Dimensions";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon?: Coupon;
  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(idItem: number, price: number, quantity: number): void {
    if (this.orderItems.find((orderItem) => orderItem.idItem === idItem))
      throw new Error("Mesmo item adicionado mais de uma vez");
    this.orderItems.push(new OrderItem(idItem, price, quantity, dimensions, weight));
  }

  addCoupon(coupon: Coupon): void {
    this.coupon = coupon;
  }

  getTotal(): number {
    let total = this.orderItems.reduce((acc, orderItem) => (acc += orderItem.getTotal()), 0);
    if (this.coupon) {
      total -= this.coupon.getDiscount(total);
    }
    return total;
  }
}
