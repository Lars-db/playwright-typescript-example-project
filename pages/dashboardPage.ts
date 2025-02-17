import { BasePage } from './basePage';
import { Page } from '@playwright/test';
import { actionHelper } from '../utils/helpers/actionHelper.ts';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private welcomeMessage = 'welcome-message';

  async getWelcomeMessage() {
    return await actionHelper.getElementText(this.page, this.welcomeMessage);
  }
}
