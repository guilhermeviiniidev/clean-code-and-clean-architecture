export class Discount {
  constructor(readonly percentage: number) {}
}

export class FiftyDiscount extends Discount {
  constructor() {
    super(0.5);
  }
}
