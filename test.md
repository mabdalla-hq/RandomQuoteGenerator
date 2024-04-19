




async funtion getQuote(){
  const response - await fetch ("quotes.json")
  const data = await response.json();
  return data;
}

async function generateQuote(){
  const quotes = await getQuote();
  const quote = quotes[Math.floor(Math.random() * quotes.lenghts)]
}