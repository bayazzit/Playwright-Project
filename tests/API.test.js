const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages_web/loginPage.js');
const { getToken } = require('../utils/testHelpers.js');

let bearerToken;
test.beforeAll(async () => {
  bearerToken = await getToken();
});

test.describe('API Tests', () => {

    test('Test Getting Contact List', async ({ request }) => {

        const response = await request.get('https://thinking-tester-contact-list.herokuapp.com/contacts', {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody[0]).toHaveProperty(['_id']);
        expect(responseBody[0]).toHaveProperty('firstName');
        expect(responseBody[0]).toHaveProperty('lastName');
    });
    
    test('Test Adding a Contact to List', async ({ request }) => {

        const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
            data: {
              "firstName": "john",
              "lastName": "smith",
              "birthdate": "1970-01-01",
              "email": "jdoe@fake.com",
              "phone": "8005555555",
              "street1": "1 Main St.",
              "street2": "Apartment A",
              "city": "Anytown",
              "stateProvince": "KS",
              "postalCode": "12345",
              "country": "USA"
            },
          });

        expect(response.status()).toBe(201);
    });
    /*
    test('Test Deleting a Contact from List', async ({ request }) => {

        const response = await request.delete('https://thinking-tester-contact-list.herokuapp.com/contacts/', {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          });

        expect(response.status()).toBe(200);
    });
    */
});