import { test, expect } from '../../fixtures/fixtures.ts';

test('should log in successfully', async ({ loginPage, dashboardPage, assertionHelper }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.login('testuser', 'password123');

  const welcomeMessage = await dashboardPage.getWelcomeMessage();
  expect(welcomeMessage).toContain('Welcome, testuser');
  assertionHelper.hardAssertContains(welcomeMessage, 'Welcome, testuser',
    `Welcome, testuser', 'Actual welcome message ${welcomeMessage} did not match expected value: 'Welcome, testuser`);
});
