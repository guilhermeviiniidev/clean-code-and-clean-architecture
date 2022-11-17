import Coupon from "../src/Coupon";
import Dimensions from "../src/Dimensions";
import Order from "../src/Order";

describe("Order class", () => {
  test("Não deve criar um pedido com CPF inválido", () => {
    expect(() => {
      new Order("111.111.111-11");
    }).toThrow("CPF inválido");
  });

  test("Deve criar pedido com 3 itens", () => {
    const order = new Order("585.193.320-80");
    order.addItem(1, 180, 1, new Dimensions(100, 10, 10), 20);
    order.addItem(2, 60, 2, new Dimensions(100, 10, 10), 20);
    order.addItem(3, 500, 1, new Dimensions(100, 10, 10), 20);
    expect(order.getTotal()).toBe(800);
  });

  test("Deve criar pedido com 3 itens com cupom de desconto", () => {
    const order = new Order("585.193.320-80");
    order.addItem(1, 180, 1, new Dimensions(100, 10, 10), 20);
    order.addItem(2, 60, 2, new Dimensions(100, 10, 10), 20);
    order.addItem(3, 500, 1, new Dimensions(100, 10, 10), 20);
    order.addCoupon(new Coupon("VALE20", 20, new Date(2023, 0, 1).getTime()));
    expect(order.getTotal()).toBe(640);
  });

  test("Deve criar pedido sem item", () => {
    const order = new Order("585.193.320-80");
    expect(order.getTotal()).toBe(0);
  });

  test("Não deve aplicar cupom de desconto expirado", () => {
    const order = new Order("585.193.320-80");
    order.addItem(1, 180, 1, new Dimensions(100, 10, 10), 20);
    order.addItem(2, 60, 2, new Dimensions(100, 10, 10), 20);
    order.addItem(3, 500, 1, new Dimensions(100, 10, 10), 20);
    order.addCoupon(new Coupon("CUPOM50", 50, new Date(2020, 5, 1).getTime()));
    expect(order.getTotal()).toBe(800);
  });

  test("Não deve criar pedido com quantidade de item negativa", () => {
    expect(() => {
      const order = new Order("585.193.320-80");
      order.addItem(1, 180, -1, new Dimensions(100, 10, 10), 20);
    }).toThrowError("Quantidade do item pedido não pode ser negativa");
  });

  test("Não deve criar pedido com item repetido", () => {
    expect(() => {
      const order = new Order("585.193.320-80");
      order.addItem(1, 180, 1, new Dimensions(100, 10, 10), 20);
      order.addItem(1, 180, 2, new Dimensions(100, 10, 10), 20);
    }).toThrowError("Mesmo item adicionado mais de uma vez");
  });

  test("Nenhuma dimensão do item pode ser negativa", () => {
    expect(() => {
      const order = new Order("585.193.320-80");
      order.addItem(1, 180, 1, new Dimensions(100, -20, -20), 20);
    }).toThrowError("Nenhuma dimensão do item pode ser negativa");
  });

  test("O peso do item não pode ser negativo", () => {
    expect(() => {
      const order = new Order("585.193.320-80");
      order.addItem(1, 180, 1, new Dimensions(100, 10, 10), -10);
    }).toThrowError("O peso do item não pode ser negativo");
  });

  test("Deve criar um pedido com frete e calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg) do item", () => {
    const order = new Order("585.193.320-80");
    order.addItem(1, 180, 1);
    order.orderItems.forEach((item) => expect(item.getTotalShipping()).toBe(9.99));
  });
});
