import getQuote from "./util/quoteData";
import { useState, useEffect } from "react";

function App() {
  const quote = getQuote();

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
          flex: "0 1 450px",
          minHeight: "20vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>{quote.text}</div>
        <div>{quote.author}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button>1</button>
            <button>2</button>
          </div>

          <button>3</button>
        </div>
      </div>
    </div>
  );
}

export default App;
