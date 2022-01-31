//Variables
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const tweetBtn = document.getElementById("twitter-button");
const newQuoteBtn = document.getElementById("new-quote");

//Functions

//Generate a new quote
function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

//Tweet the quote
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterURL, "_blank");
}

//Adding functionality to buttons
newQuoteBtn.addEventListener("click", newQuote);
tweetBtn.addEventListener("click", tweetQuote);

newQuote();
