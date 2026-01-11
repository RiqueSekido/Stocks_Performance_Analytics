import yahooFinance from "yahoo-finance2";
const yf = new yahooFinance();

import { fetchCurrentPrice, fetchDividends, fetchPriceHistory,  fetchLogoUrl } from "../datasources/yahooFinance.js";
import { filterDividendsByPeriod, calculateDividendYield } from "./dividendService.js";
import { getReturnByPeriod } from "./returnService.js";

export async function getStockSummary(symbol) {

    // const companyLogoUrl = await fetchLogoUrl(symbol);

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const currentPrice = await fetchCurrentPrice(symbol);

    const allDividends = await fetchDividends(symbol);
    const dividends1Y = filterDividendsByPeriod(
        allDividends,
        oneYearAgo,
        new Date()
    );
    const dividendYield1Y = calculateDividendYield(dividends1Y, currentPrice);

    const priceHistory = await fetchPriceHistory(symbol);
    const return1Y = getReturnByPeriod(
        priceHistory,
        oneYearAgo,
        new Date()
    )
    // console.log("\n");

    return {
        symbol,
        currentPrice,
        // companyLogoUrl,
        dividendYield: Number(dividendYield1Y.toFixed(2)),
        return1Y: Number(return1Y.toFixed(2))
    }

}