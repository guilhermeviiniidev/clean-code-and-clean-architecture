import { FiftyDiscount } from "../../src/v2/Discount";
import { Pants, Shirt } from "../../src/v2/Item";
import { Order } from "../../src/v2/Order";

describe("Order", () => {
  test("deve retornar erro ao criar pedido com cpf inválido", () => {
    expect(() => new Order("111.111.111-00")).toThrowError(new Error("Invalid CPF"));
  });
  test("deve criar um pedido com 3 items retornado a descrição, preço e quantidade", () => {
    const shirt1 = new Shirt("Camisa polo", 2);
    const shirt2 = new Shirt("Camisa xadrez", 2);
    const jeans = new Pants("Jeans", 1);

    const order = new Order("463.320.338-00");
    order.addItem(shirt1);
    order.addItem(shirt2);
    order.addItem(jeans);

    const pendingOrder = order.create();
    expect(pendingOrder).toEqual({
      description: "Camisa polo (2), Camisa xadrez (2), Jeans (1)",
      quantity: 5,
      price: 45.0,
    });
  });

  test("deve criar um pedido com desconto sobre o preço final do pedido", () => {
    const shirt1 = new Shirt("Camisa polo", 2);
    const shirt2 = new Shirt("Camisa xadrez", 2);
    const jeans = new Pants("Jeans", 1);

    const order = new Order("463.320.338-00", new FiftyDiscount());
    order.addItem(shirt1);
    order.addItem(shirt2);
    order.addItem(jeans);

    const pendingOrder = order.create();
    expect(pendingOrder).toEqual({
      description: "Camisa polo (2), Camisa xadrez (2), Jeans (1)",
      quantity: 5,
      price: 22.5,
    });
  });
});
