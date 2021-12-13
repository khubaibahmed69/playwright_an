const { devices } = require('@playwright/test');
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    {
    
      name: 'Desktop Chromium',
      timeout:10000000,
      use: 
      {
        browserName: 'chromium',
        headless : false,
        acceptDownloads:true,           
      },
    },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //  //   baseURL: 'https://app.snapdebtcollections.com',
    //     browserName: 'webkit',
    //     headless:false
    //     //viewport: { width: 1200, height: 750 },
    //   }
    // },
    // {
    //     name: 'Desktop Firefox',
    //     use: {
    //       browserName: 'firefox',
    //       headless: false
    //    //   viewport: { width: 800, height: 600 },
    //     }
    //   },
    // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
  
  ],
};

module.exports = config;