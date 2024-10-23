const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages_web/loginPage.js');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('https://thinking-tester-contact-list.herokuapp.com/');
    });

    test('Logging in with valid credentials', async () => {
        await loginPage.login();
        await expect(loginPage.add_new_contact_button).toBeVisible();
    });

    test('Logging in with invalid password', async () => {
        await loginPage.login('bayazitb95@gmail.com', 'wrong_password');
        await expect(loginPage.error_warning).toBeVisible();
    });

    test('Logging in with invalid username', async () => {
        await loginPage.login('invalid_mail@gmail.com', 'any_password');
        await expect(loginPage.error_warning).toBeVisible();
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
