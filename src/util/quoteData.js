const quote = [
  { text: "Hey", author: "Paul" },
  { text: "What's", author: "Tom" },
  { text: "Up", author: "Robert" },
  { text: "Hello", author: "John" },
];

export default function getQuote() {
  return quote[Math.floor(Math.random() * quote.length)];
}
