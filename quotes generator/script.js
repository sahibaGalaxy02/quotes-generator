const quotes = [
    "Dream big. Start small. Act now.",
    "You are stronger than you think.",
    "Do something today that your future self will thank you for.",
    "Happiness is not by chance, but by choice.",
    "Believe you can and you’re halfway there.",
    "Stars can’t shine without darkness.",
    "Be the energy you want to attract.",
    "Little things make big days.",
    "Your vibe attracts your tribe.",
    "Don’t watch the clock; do what it does. Keep going."
];

const quoteElement = document.getElementById("quote");
const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.style.opacity = 0; // fade out 
    
    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = 1; // fade in
    }, 300);
});


