import { test, expect } from '../../fixtures/fixtures.ts';

test('should log in successfully', async ({ loginPage, dashboardPage }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.login('testuser', 'password123');

  const welcomeMessage = await dashboardPage.getWelcomeMessage();
  expect(welcomeMessage).toContain('Welcome, testuser');
});
