import { useEffect, useState } from "react";
import "./StockCard.css";

function StockCard({ticker}){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await fetch(
          `http://localhost:3001/stocks/summary?ticker=${ticker}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    if(ticker) {
      fetchStock();
    }
    
  }, [ticker]);








  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="stock-card">
      <p className="ticker">{data.ticker}</p>
      <p><strong>Cotação:</strong> R$ {data.currentPrice}</p>
      <p><strong>DY:</strong> {data.dividendYield}%</p>
      <p>
        <strong>Return 1Y:</strong>{" "}
        <span className={data.return1Y >= 0 ? "value-positive" : "value-negative"}>
          {data.return1Y}%
        </span>
      </p>
      {/* <img src={data.companyLogoUrl} alt={`${data.ticker} logo`} className="company-logo" /> */}
    </div>

    
  );
}

export default StockCard;