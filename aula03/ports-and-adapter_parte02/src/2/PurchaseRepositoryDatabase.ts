import Purchase from "./Purchase";
import PurchaseRepository from "./PurchaseRepository";
import pgp from "pg-promise";

export default class PurchaseRepositoryDatabase implements PurchaseRepository {
  async getPurchase(
    cardNumber: string,
    month: number,
    year: number
  ): Promise<Purchase[]> {
    const connection = pgp()("postgres://postgres:test@localhost:5432/app");
    const purchasesData = await connection.query(
      "select * from guilherme.purchase where card_number = $1 and extract(month from date)::integer = $2 and extract(year from date)::integer = $3",
      [cardNumber, month, year]
    );
    let purchases = [];
    for (const purchase of purchasesData) {
      purchases.push(
        new Purchase(
          purchase.card_number,
          parseFloat(purchase.amount),
          purchase.currency
        )
      );
    }
    return purchases;
  }
}
