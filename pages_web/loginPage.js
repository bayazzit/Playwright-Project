const BasePage = require('./basePage');
const loginPageLocators = require('../locators/loginPage.json');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        // Define page elements
        this.mail_box = page.locator(loginPageLocators.mail_box);
        this.password_box = page.locator(loginPageLocators.password_box);
        this.submit_button = page.locator(loginPageLocators.submit_button);
        this.add_new_contact_button = page.locator(loginPageLocators.add_new_contact_button);
        this.error_warning = page.locator(loginPageLocators.error_warning);
        this.add_first_name_box = page.locator(loginPageLocators.add_first_name_box);
        this.add_last_name_box = page.locator(loginPageLocators.add_last_name_box);
        this.add_birthday_box = page.locator(loginPageLocators.add_birthday_box);
        this.add_email_box = page.locator(loginPageLocators.add_email_box);
        this.add_phone_box = page.locator(loginPageLocators.add_phone_box);
        this.add_address_box = page.locator(loginPageLocators.add_address_box);
        this.add_city_box = page.locator(loginPageLocators.add_city_box);
        this.add_state_box = page.locator(loginPageLocators.add_state_box);
        this.add_postal_code_box = page.locator(loginPageLocators.add_postal_code_box);
        this.add_country_box = page.locator(loginPageLocators.add_country_box);
        this.lastly_added_contact_name = page.locator(loginPageLocators.lastly_added_contact_name);
        //this.locators = require('../locators/loginPage.json');
    }

    async enterMail(username) {
        await this.mail_box.fill(username);
        //await this.page.fill(this.locators.mail_box, username);
    }

    async enterPassword(password) {
        await this.password_box.fill(password);
        //await this.page.fill(this.locators.password_box, password);
    }

    async clickLoginButton() {
        await this.submit_button.click();
        //await this.page.click(this.locators.submit_button);
    }

    async login(username='bayazitb95@gmail.com', password='qwe1234') {
        await this.enterMail(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async addNewContact(first_name, last_name, birthday, email, phone, address, city, state, postal_code, country) {
        await this.add_new_contact_button.click();
        await this.add_first_name_box.fill(first_name);
        await this.add_last_name_box.fill(last_name);
        await this.add_birthday_box.fill(birthday);
        await this.add_email_box.fill(email);
        await this.add_phone_box.fill(phone);
        await this.add_address_box.fill(address);
        await this.add_city_box.fill(city);
        await this.add_state_box.fill(state);
        await this.add_postal_code_box.fill(postal_code);
        await this.add_country_box.fill(country);
    }
}

module.exports = LoginPage;
