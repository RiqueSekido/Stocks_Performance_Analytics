import StockCard from "./components/StockCard";
import "./App.css";

function App() {

  // let startDate = "2023-01-01";
  // let endDate = "2023-12-31";

  let tickerList = ["BBAS3", "VALE3", "RADL3", "BBSE3", "PETR3", "PETR4", "MGLU3", "WEGE3", "HAPV3", "ITSA4", "ITSA3", "ITUB3",
     "ITUB4", "CXSE3", "BPAC11", "ABEV3", "BBDC3"];

  return (
    <div className="app-layout">
      <h1>Minhas ações</h1>
      {/* <h2>Período selecionado: {startDate} até {endDate} </h2> */}
      <div className="stocks-table">
        {tickerList.map(ticker=>(
          <StockCard key={ticker} ticker={ticker}/>
        ))}
      </div>
    </div>
  );
}

export default App;
