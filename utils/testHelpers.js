const { request } = require('@playwright/test');

async function getToken() {
  const apiRequest = await request.newContext();

  const response = await apiRequest.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
    data: {
      'email': 'bayazitb95@gmail.com',
      'password': 'qwe1234',
    },
  });

  if (!response.ok()) {
    throw new Error('Token is not reachable: ' + response.status());
  }

  const responseBody = await response.json();
  return responseBody.token;
}

module.exports = { getToken };
