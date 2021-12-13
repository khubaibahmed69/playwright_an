import { expect, test } from '@playwright/test'

test('mera test' , async ({page}) => {

    await page.goto('https://www.google.com/')
    await page.click('[aria-label="Search"]');
    await page.fill('[aria-label="Search"]', 'hiii')

    for (var i = 0 ; i < 4 ; i++){
             await page.keyboard.press('ArrowDown');
    }
    
    await page.keyboard.press ('Enter');
    const value = await page.locator('[aria-label="Search"]').inputValue();
    await page.waitForTimeout(2000);
    console.log(value);
    expect(value).toBeTruthy();
});