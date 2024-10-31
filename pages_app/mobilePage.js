const { expect } = require('@playwright/test');
const loginPageLocators = require('../locators/loginPage.json');
const config = require('../playwright.config.js');

class MobilePage {
    constructor(page) {
        this.page = page;
        this.url = 'https://thinking-tester-contact-list.herokuapp.com/';
        this.mail_box = page.locator(loginPageLocators.mail_box);
        this.password_box = page.locator(loginPageLocators.password_box);
        this.submit_button = page.locator(loginPageLocators.submit_button);
        this.add_new_contact_button = page.locator(loginPageLocators.add_new_contact_button);
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async checkTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async clickButton(selector) {
        await this.page.click(selector);
    }
  
    async fillInput(selector, value) {
        await this.page.fill(selector, value);
    }

    async enterMail(username) {
        await this.mail_box.fill(username);
    }

    async enterPassword(password) {
    await this.password_box.fill(password);
    }

    async login(username=config.username, password=config.password) {
        await this.enterMail(username);
        await this.enterPassword(password);
        await this.submit_button.click();
    }
  
}

module.exports = MobilePage;
