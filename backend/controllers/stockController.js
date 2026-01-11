import * as stockService from "../services/stockService.js";

export async function getStockSummaryController(req, res) {
    const {ticker} = req.query;

    if(!ticker) {
        return res.status(400).json({error: "ticker is required"});
    }

    const symbol = `${ticker}.SA`;

    try{
        const summary = await stockService.getStockSummary(symbol);
        res.json({
            ticker: ticker,
            currentPrice: summary.currentPrice,
            // companyLogoUrl: summary.companyLogoUrl,
            dividendYield: summary.dividendYield,
            return1Y: summary.return1Y
        });
    }catch(err) {
        res.status(500).json({error: "Failed to fetch stock data"});
    }
}