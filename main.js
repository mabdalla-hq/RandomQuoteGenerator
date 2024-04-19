let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteID = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status");

let intervalId;

generateBtn.addEventListener("click", generateQuote);
autoBtn.onclick = startAutoPlay;
stopBtn.onclick = stopAutoPlay;
async function getQuotes() {
  const response = await fetch("quotes.json");
  const data = await response.json();
  return data;
}

async function generateQuote() {
  const quotes = await getQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDiv.innerHTML = quote.text;
  quoteID.innerHTML = quote.id;
}

function startAutoPlay() {
  intervalID = setInterval(generateQuote, 2000);
  autoStatus.innerHTML = "Auto: ON";
}

function stopAutoPlay() {
  clearInterval(intervalID);
  autoStatus.innerHTML = "";
}
