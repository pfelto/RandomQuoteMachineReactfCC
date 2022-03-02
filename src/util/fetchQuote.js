//api https://api.quotable.io/random

export const fetchQuote = () => {
  return fetch("https://api.quotable.io/random").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Error("Cannot get Quote");
    }
  });
};
