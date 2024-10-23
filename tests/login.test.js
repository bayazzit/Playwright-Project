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
});
