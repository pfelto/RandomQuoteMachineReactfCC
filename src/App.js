import { fetchQuote } from "./util/fetchQuote";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({
    status: "idle",
    quote: null,
    error: null,
  });

  useEffect(() => {
    setQuote({ status: "loading" });
    fetchQuote().then(
      (data) => setQuote({ status: "fulfilled", quote: data, error: null }),
      (error) => setQuote({ status: "rejected", quote: null, error: error })
    );
  }, []);

  const handleClick = () => {
    setQuote({ status: "loading" });
    fetchQuote().then(
      (data) => setQuote({ status: "fulfilled", quote: data, error: null }),
      (error) => setQuote({ status: "rejected", quote: null, error: error })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "red",
      }}
    >
      <div
        id="quote-box"
        style={{
          position: "relative",
          minHeight: "20vh",
          flex: "0 1 450px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px 20px",
          borderRadius: "3px",
        }}
      >
        <div id="text" style={{ flex: "4", textAlign: "center" }}>
          {quote.status === "fulfilled" ? quote.quote.content : "...Loading"}
        </div>
        <div id="author" style={{ flex: "1", alignSelf: "flex-end" }}>
          {quote.status === "fulfilled" ? quote.quote.author : "...Loading"}
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
            style={{ alignSelf: "center" }}
          >
            <button>
              <i className="fab fa-twitter"></i>
            </button>
          </a>

          <button
            id="new-quote"
            style={{ alignSelf: "center" }}
            onClick={handleClick}
          >
            new quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
