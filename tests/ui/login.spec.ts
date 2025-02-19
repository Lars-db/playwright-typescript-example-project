import { test } from '../../fixtures/fixtures.ts';

test('Successfull login', async ({ loginPage, dashboardPage, assertionHelper }) => {
  await test.step('Given I am on the login page', async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.acceptCookies();
  });

  await test.step('When I sign in', async () => {
    await loginPage.login(process.env.VALID_USERNAME!, process.env.VALID_PASSWORD!);
  });

  await test.step('Then I should see the welcome message', async () => {
    const actualUrl: string = await dashboardPage.getUrl();
    assertionHelper.softAssertPageUrl(actualUrl, process.env.SUCCESSFULL_LOGIN_URL!,
    `Actual URL ${actualUrl} did not match expected value: ${process.env.SUCCESSFULL_LOGIN_URL!}`);

    const successfullLoginMsg = await dashboardPage.getSuccessfullLoginMsg();
    const expectedMsg = 'You logged into a secure area!';

    assertionHelper.hardAssertContains(successfullLoginMsg, expectedMsg,
      `Actual welcome message ${successfullLoginMsg} did not match expected value: ${expectedMsg}'`);
  });  
})

