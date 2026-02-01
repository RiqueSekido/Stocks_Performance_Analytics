import { useEffect, useState } from "react";
import "./StockTable.css";

function StockTable({ tickers }) {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStocks() {
      const responses = await Promise.all(
        tickers.map(ticker =>
          fetch(`http://localhost:3001/stocks/summary?ticker=${ticker}`)
            .then(res => res.json())
        )
      );
      setStocks(responses);
      setLoading(false);
    }

    fetchStocks();
  }, [tickers]);

  if (loading) return <p>Loading table...</p>;

  return (
    <table className="stocks-table">
      <thead>
        <tr>
          <th>Ação</th>
          <th>Preço</th>
          <th>DY</th>
          <th>Return 1Y</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map(stock => (
          <tr key={stock.ticker}>
            <td className="ticker-cell">
              {/* <img src={stock.companyLogoUrl} alt="" /> */}
              {stock.ticker}
            </td>
            <td>R$ {(stock.currentPrice).toFixed(2)}</td>
            <td>{(stock.dividendYield).toFixed(2)}%</td>
            <td className={stock.return1Y >= 0 ? "positive" : "negative"}>
              {stock.return1Y}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StockTable;
