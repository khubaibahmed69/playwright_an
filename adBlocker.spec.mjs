import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';  /// 
import fetch from 'cross-fetch'; // required 'fetch'  

/// please check package.json file 

test(' CollectionAgent ', async ({ page }) => {

    PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
        blocker.enableBlockingInPage(page);
    });
});    