export class Item {
  constructor(readonly description: string, readonly quantity: number, readonly price: number) {}
}

export class Pants extends Item {
  constructor(description: string, quantity: number) {
    super(description, quantity, 5.0);
  }
}

export class Shirt extends Item {
  constructor(description: string, quantity: number) {
    super(description, quantity, 10.0);
  }
}
