import yahooFinance from "yahoo-finance2";
const yf = new yahooFinance();

export async function fetchPriceHistory(symbol) {
    const chart = await yf.chart(symbol, {
        period1: "1900-01-01",
        interval: "1wk"
    });

    const priceHistory = chart.quotes;
    
    return priceHistory;
}

export async function fetchCurrentPrice(symbol) {

    const quote = await yf.quote(symbol);
    const currentPrice = quote.regularMarketPrice;

    return currentPrice;
}

export async function fetchDividends(symbol) {
    const chart = await yf.chart(symbol, {
        period1: "1900-01-01",
        interval: '1wk'
    });

    const dividends = chart.events.dividends;

    return dividends;
}

export async function fetchLogoUrl(symbol) {
    // const result = await yf.quote("TSLA", {
    //     fields: ["logoUrl"]
    // });

    // console.log(result);

    // return result.companyLogoUrl;
}

// teste("TSLA");