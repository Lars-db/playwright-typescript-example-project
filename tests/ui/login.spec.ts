import { uiTest } from '../fixtures/uiTestFixtures';

uiTest('As a registered user, I want to successfully log in to the secure area of the application', async ({ loginPage, dashboardPage, assertionHelper }) => {
  await uiTest.step('Given I am on the login page', async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.acceptCookies();
  });

  await uiTest.step('When I sign in', async () => {
    await loginPage.login(process.env.VALID_USERNAME!, process.env.VALID_PASSWORD!);
  });

  await uiTest.step('Then I should see the welcome message', async () => {
    const actualUrl: string = await dashboardPage.getUrl();
    assertionHelper.softAssertPageUrl(actualUrl, process.env.SUCCESSFULL_LOGIN_URL!,
    `Actual URL ${actualUrl} did not match expected value: ${process.env.SUCCESSFULL_LOGIN_URL!}`);

    const successfullLoginMsg = await dashboardPage.getSuccessfullLoginMsg();
    const expectedMsg = 'You logged into a secure area!';

    assertionHelper.hardAssertContains(successfullLoginMsg, expectedMsg,
      `Actual welcome message ${successfullLoginMsg} did not match expected value: ${expectedMsg}'`);
  });  
})

