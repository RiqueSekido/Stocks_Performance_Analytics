import express from "express";
import cors from "cors";
import stockRoutes from "./routes/stocks.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());





app.use("/stocks", stockRoutes);






app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





// app.get("/stocks/min-info", async (req, res) => {
//   const {ticker} = req.query;

//   if (!ticker) {
//     return res.status(400).json({ error: "Missing parameters" });
//   }

//   console.log("Backend version:", Date.now());

//   const symbol = `${ticker}.SA`;

//   // const weekly = await yf.chart(symbol, {
//   //   period1: "2020-01-01",
//   //   interval: '1wk'
//   // });

//   const quote = await yf.quote(symbol);
//   const currentPrice = quote.regularMarketPrice;

//   const dividendInfo = await getStockSummary(ticker);

//   res.json({
//     ticker,
//     currentPrice,
//     dividendYield: dividendInfo.dividendYield
//   });

//   // http://localhost:3001/stocks/return?ticker=PETR4&startDate=2023-01-01&endDate=2023-12-31

// });





































app.get("/stocks/full-info", async (req, res) => {
  const {ticker} = req.query;

  if (!ticker) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  console.log("Backend version:", Date.now());

  const symbol = `${ticker}.SA`;

  const weekly = await yf.chart(symbol, {
    period1: "2020-01-01",
    interval: '1wk'
  });

  // console.log(weekly);

  // const startPrice = weekly.quotes[0].close;
  // const endPrice = weekly.quotes[weekly.quotes.length - 1].close;

  // const returnPercentage = ((endPrice - startPrice) / startPrice) * 100;


  // res.json({
  //   ticker,
  //   startDate,
  //   endDate,
  //   dy,
  //   startPrice: Number(startPrice.toFixed(2)),
  //   endPrice: Number(endPrice.toFixed(2)),
  //   returnPercentage: Number(returnPercentage.toFixed(2)),
  // });

  // http://localhost:3001/stocks/return?ticker=PETR4&startDate=2023-01-01&endDate=2023-12-31

});
