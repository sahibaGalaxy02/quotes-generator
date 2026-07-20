const quotes = [
    "Dream big. Start small. Act now.",
    "You are stronger than you think.",
    "Do something today that your future self will thank you for.",
    "Happiness is not by chance, but by choice.",
    "Believe you can and you're halfway there.",
    "Stars can't shine without darkness.",
    "Be the energy you want to attract.",
    "Little things make big days.",
    "Your vibe attracts your tribe.",
    "Don't watch the clock; do what it does. Keep going.",
    "Don't praise yourself, let the world do this for you",
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It is during our darkest moments that we must focus to see the light.",
    "The way to get started is to quit talking and begin doing.",
    "Success is not final, failure is not fatal.",
    "You miss 100% of the shots you don't take.",
    "Whether you think you can, or you think you can't – you're right."
];
const quoteElement = document.getElementById("quote");
const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.style.opacity = 0; // fade out 
    
    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = 1;
    }, 300);
});
