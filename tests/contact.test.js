const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages_web/loginPage.js');

test.describe('Contact List Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('https://thinking-tester-contact-list.herokuapp.com/');
    });

    test('Adding a new contact', async () => {
        await loginPage.login();
        await loginPage.addNewContact('john',
                                      'smith',
                                      '1995-03-16',
                                      'john_smith@gmail.com',
                                      '0123456789',
                                      '123 St. 10/22',
                                      'Ankara',
                                      'Ic Anadolu',
                                      '06123',
                                      'Turkiye');
        await loginPage.clickLoginButton();
        await expect(loginPage.lastly_added_contact_name).toHaveText('john smith');
    });
});
