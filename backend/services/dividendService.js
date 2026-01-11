import yahooFinance from "yahoo-finance2";
const yf = new yahooFinance();

export function filterDividendsByPeriod(dividends, startDate, endDate) {

    return dividends.filter(d => {
        const date = new Date(d.date);
        return date >= startDate && date <= endDate;
    });

}

export function calculateDividendYield(dividends, stockPrice) {
    // dividens must be in a interval of 1 year

    const sumYearDividends = dividends.reduce(
        (sum, d) => sum + d.amount,
        0
    )

    const dividendYield = (sumYearDividends/stockPrice)*100;

    return dividendYield;
}