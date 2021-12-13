
import {test} from '@playwright/test'


    test('save mjs' , async ({page}) => {

  
        
  await page.goto('https://www.rapidtables.com/tools/notepad.html');
   
  //await page.waitForTimeout(500);

  await page.type('textarea[name="S1"]', 'Admin Agency--:');
  await page.type('textarea[name="S1"]', 'aoaaaa');
  await page.keyboard.press('Enter');
  await page.type('textarea[name="S1"]', 'Password--:Testing123$$');
  await page.press('textarea[name="S1"]', 'Tab');


  await page.click('[aria-label="Toolbar"] button:has-text("save_alt")');

  await page.fill('[placeholder="filename.txt"]', 'admin');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('input:has-text("Save")')
  ]);

  const path = 'C:\Snapdept\carbonteqsnap'
  await download.path();
  await download.saveAs(path);
  //await page.goto('https://temp-mail.io/en');
});