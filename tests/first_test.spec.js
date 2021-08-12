const {test, expect} = require('playwright');

test('basic test', async ({ page }) => {
    await page.goto("https://beta.niceday.app/");
    await page.fill("//input[@id='email']", "email@email.com");
    await page.fill("//input[@id='password']", "email@email.com");
    await page.click("//span[contains(text(),'Login')]");
    const name = await page.innerText('.navbar_title')
    expect(name).toBe('Playwright');
})
