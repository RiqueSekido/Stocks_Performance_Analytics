export function getReturnByPeriod(priceHistory, startDate, endDate=null) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const filteredPriceHistory = priceHistory.filter(p => {
        const date = new Date(p.date);
        return date >= start && date <= end;
    });

    if(filteredPriceHistory.length < 2) {
        return null;
    }

    const startPrice = filteredPriceHistory[0].adjclose;
    const endPrice = filteredPriceHistory[filteredPriceHistory.length - 1].adjclose;

    // console.log(`${startPrice}: ${filteredPriceHistory[0].date}`);
    // console.log(`${endPrice}: ${filteredPriceHistory[filteredPriceHistory.length - 1].date}`);

    return ((endPrice - startPrice)/startPrice)*100;
}