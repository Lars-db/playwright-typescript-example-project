import { test, expect } from '../../fixtures/fixtures.ts';
// import * as dotenv from 'dotenv';
// dotenv.config({ path: `environment/.env.${process.env.ENV || 'test'}` });

// console.log('🔍 VALID_USERNAME from test file:', process.env.VALID_USERNAME);


test('Successfull login', async ({ loginPage, dashboardPage, assertionHelper }) => {
  await test.step('Given I am on the login page', async () => 
  {
    await loginPage.navigateToLoginPage();
    await loginPage.acceptCookies();
  });
  await test.step('When I sign in', async () => 
    {
      console.log('VALID_USERNAME:', process.env.VALID_USERNAME);








      await loginPage.login(process.env.VALID_USERNAME!, process.env.VALID_PASSWORD!);
    });
  await test.step('Then I should see the welcome message', async () => 
    {
      const actualUrl: string = await dashboardPage.getUrl();

      assertionHelper.softAssertPageUrl(actualUrl, 'https://practice.expandtesting.com/secure',
      `Actual URL ${actualUrl} did not match expected value: 'https://practice.expandtesting.com/secure'`);

      const successfullLoginMsg = await dashboardPage.getSuccessfullLoginMsg();
      assertionHelper.hardAssertContains(successfullLoginMsg, 'You logged into a secure area!',
        `Actual welcome message ${successfullLoginMsg} did not match expected value: 'You logged into a secure area!'`);
    });  
})

