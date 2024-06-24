import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers");
  }, []);
  return (
    <div>
      <h1>The Conis!</h1>
      {loading ? <strong>Loading!</strong> : null}
    </div>
  );
}

export default App;
