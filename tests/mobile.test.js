const { test, expect, devices, chromium, webkit } = require('@playwright/test');
const MobilePage = require('../pages_app/mobilePage.js');

test.describe('Mobile Tests', () => {

    test('Mobile Login Test with Safari on iOS', async () => {
        
        const iPhone = devices['iPhone 12'];

        const browser = await webkit.launch({ headless: false });
        const context = await browser.newContext({
            ...iPhone,
        });

        const page = await context.newPage();
        const mobilePage = new MobilePage(page);

        await mobilePage.navigate();
        await mobilePage.checkTitle('Contact List App');
        
        await mobilePage.login();
        await expect(mobilePage.add_new_contact_button).toBeVisible();

        await browser.close();
    });

    test('Mobile Login Test with Chrome on Android', async () => {
        
        const Galaxy = devices['Galaxy S9+'];

        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({
            ...Galaxy,
        });

        const page = await context.newPage();
        const mobilePage = new MobilePage(page);
        
        await mobilePage.navigate();
        await mobilePage.checkTitle('Contact List App');
        
        await mobilePage.login();
        await expect(mobilePage.add_new_contact_button).toBeVisible();

        await browser.close();
    });

});