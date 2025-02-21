import { test as baseTest, expect } from '@playwright/test';
import { AssertionHelper } from '../../utils/helpers/assertionHelper';
import { RegexHelper } from '../../utils/helpers/regexHelper';

export type ApiFixtures = {
  assertionHelper: AssertionHelper;
  regexHelper: RegexHelper;
};

const apiTest = baseTest.extend<ApiFixtures>({
  assertionHelper: async ({}, use) => {
    const assertionHelper = new AssertionHelper();
    await use(assertionHelper);
  },
  regexHelper: async ({}, use) => {
    const regexHelper = new RegexHelper();
    await use(regexHelper);
  }
});

export { apiTest, expect };
