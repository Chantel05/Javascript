//1.1 Follow the link provided (http://quotes.toscrape.com/). 
//1.2 Write a program that will capture a screenshot of the link provided above. 
//1.3 Save the project with Question 1 and student number. 

const {default: puppeteer } = require("puppeteer");
(async() =>{

    const browser = await puppeteer.launch({
        headless: false});

    const page = await browser.newPage();
    await page.goto('http://quotes.toscrape.com/');
    await page.screenshot({path:"mywebsite.png"});
   
    
    await browser.close();

})();


