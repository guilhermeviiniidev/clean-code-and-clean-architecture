import express from "express";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import InvoiceServiceImp from "./InvoiceServiceImp";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";
const app = express();
app.get("/cards/:cardNumber/invoices", async function (req, res) {
  const currencyGateway = new CurrencyGatewayHttp();
  const purchaseRepository = new PurchaseRepositoryDatabase();
  const invoiceService = new InvoiceServiceImp(
    purchaseRepository,
    currencyGateway
  );
  const total = await invoiceService.calculateInvoice(req.params.cardNumber, 9, 2022);
  res.json({
    total,
  });
});

app.listen(3001);
