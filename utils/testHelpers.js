const { request } = require('@playwright/test');
const config = require('../playwright.config.js');

async function getToken() {
  const apiRequest = await request.newContext();

  const response = await apiRequest.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
    data: {
      'email': config.username,
      'password': config.password,
    },
  });

  if (!response.ok()) {
    throw new Error('Token is not reachable: ' + response.status());
  }

  const responseBody = await response.json();
  return responseBody.token;
}

module.exports = { getToken };
