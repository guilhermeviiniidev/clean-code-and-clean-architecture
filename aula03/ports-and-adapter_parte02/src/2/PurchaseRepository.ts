import Purchase from "./Purchase";

export default interface PurchaseRepository {
  getPurchase(
    cardNumber: string,
    month: number,
    year: number
  ): Promise<Purchase[]>;
}
