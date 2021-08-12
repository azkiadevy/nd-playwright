const playwright = require('@playwright/test');

(async () => {
    // code execution within in here
    const browser = await playwright["chromium"].launch({
        headless: false
    });

    // context 
    const context = await browser.newContext();

    // page
    const page = await context.newPage();

    // navigate to the page
    await page.goto("https://beta.niceday.app/");
    // await page.fill("//input[@id='email']", "email@email.com");
    // await page.fill("//input[@id='password']", "email@email.com");
    // await page.click("//span[contains(text(),'Login')]");

    await page.screenshot({path: `ea-${Date.now}.png`})

    await browser.close();
    
})();
