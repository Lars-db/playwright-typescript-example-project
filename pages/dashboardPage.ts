import { BasePage } from './basePage';
import { Page } from '@playwright/test';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Elements
  private welcomeMessage = '.welcome-message';

  // Actions
  async getWelcomeMessage() {
    return await this.getText(this.welcomeMessage);
  }
}
