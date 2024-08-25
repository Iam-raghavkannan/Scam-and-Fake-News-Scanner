const scamKeywords = [
    "free",
    "winner",
    "urgent",
    "limited time offer",
    "click here",
    "congratulations",
    "claim your prize",
    "money transfer",
    "bank account",
    "password",
    "lottery",
    "prize",
    "investment",
    "risk-free"
];

const fakeNewsSources = [
    "fake-news-site.com",
    "unreliablenews.com"
    // Add more known fake news domains
];

document.getElementById('scan').addEventListener('click', function() {
    const text = document.getElementById('text').value.toLowerCase();
    let scamFound = false;
    let fakeNewsFound = false;

    // Scan for scam keywords
    for (const keyword of scamKeywords) {
        if (text.includes(keyword)) {
            scamFound = true;
            break;
        }
    }

    // Scan for fake news sources in URLs
    for (const source of fakeNewsSources) {
        if (text.includes(source)) {
            fakeNewsFound = true;
            break;
        }
    }

    const resultElement = document.getElementById('result');
    if (scamFound || fakeNewsFound) {
        resultElement.innerHTML = "⚠️ Scam or fake news indicators found! Please be cautious.";
        resultElement.style.color = "red";
    } else {
        resultElement.innerHTML = "✅ No scam or fake news indicators detected.";
        resultElement.style.color = "green";
    }
});
