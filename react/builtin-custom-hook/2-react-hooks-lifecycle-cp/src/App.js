import React from "react";
import "./App.css";
export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // TODO: answer here
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <div data-testid="quote">
      <div className="App-header">Random Quote</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="App">
          <h1 className="">{quote.content}</h1>
          <h4 className="">{quote.author}</h4>
        </div>
      )}

      <button onClick={getQuote} className="App-button">
        Get another quote
      </button>
    </div>
  );
}
