export default class Coupon {
  constructor(readonly code: string, readonly percentage: number, readonly expiredAt: number) {}

  getDiscount(total: number) {
    if (this.expiredAt <= new Date().getTime()) return 0;
    return (this.percentage * total) / 100;
  }
}
