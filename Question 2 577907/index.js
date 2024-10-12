
//2.1 Follow the link provided (http://quotes.toscrape.com/). 
//2.2 Write a program that will scrape all the quotes in the webpage (The program should scrape all 
//the quotes in one go.)

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('http://quotes.toscrape.com/');

    const quotes = await page.evaluate(() => {
        const quotes = [];
        const quoteElements = document.querySelectorAll('.quote');

        quoteElements.forEach(quoteElement => {
            const text = quoteElement.querySelector('.text').innerText;
            const author = quoteElement.querySelector('.author').innerText;

            quotes.push({
                text,
                author
            });
        });

        return quotes;
    });

    console.log(quotes);

    await browser.close();
})();

