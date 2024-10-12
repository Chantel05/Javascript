const {default: puppeteer } = require("puppeteer");
(async() =>{

   const browser = await puppeteer.launch({
       headless: false});

   const page = await browser.newPage();

   await page.goto('https://bitmaker.la/en/contact.html');

   const name = await page.$eval('#contact-name', el => el.textContent.trim());
   const email = await page.$eval('#contact-email', el => el.textContent.trim());
   const phone = await page.$eval('#contact-phone', el => el.textContent.trim());

   await browser.close();

   console.log(`Name: ${name}`);
   console.log(`Email: ${email}`);
   console.log(`Phone: ${phone}`);
})();