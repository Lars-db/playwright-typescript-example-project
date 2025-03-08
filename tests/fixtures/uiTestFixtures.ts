import { test as baseTest, expect, Browser, Page } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { DashboardPage } from '../../pages/dashboardPage';
import { BrowserHelper } from '../../utils/helpers/browserHelper';
import { ContactPage } from '../../pages/contactPage';
import { AssertionHelper } from '../../utils/helpers/assertionHelper';

export type UiFixtures = {
  browser: Browser;
  page: Page;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  contactPage: ContactPage;
  assertionHelper: AssertionHelper;
};

const uiTest = baseTest.extend<UiFixtures>({
  browser: async ({}, use) => {
    const browser = await BrowserHelper.launchBrowser();
    await use(browser);
    await browser.close();
  },
  page: async ({ browser }, use) => {
    const page = await browser.newPage();
    await use(page);
    await page.close();
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  assertionHelper: async ({}, use) => {
    const assertionHelper = new AssertionHelper();
    await use(assertionHelper);
  }
});

export { uiTest, expect };
