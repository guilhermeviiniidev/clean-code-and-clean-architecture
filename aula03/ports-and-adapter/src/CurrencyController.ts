import express from "express";
const app = express();

app.get("/currencies", function (req, res) {
  res.json({
    amount: 3,
  });
});

app.listen(3000);
