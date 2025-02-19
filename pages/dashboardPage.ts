import { BasePage } from './basePage';
import { Page } from '@playwright/test';
import { actionHelper } from '../utils/helpers/actionHelper.ts';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private welcomeMessage = this.page.getByRole('alert', { name: 'You logged into a secure area!'});

  async getSuccessfullLoginMsg() {
    return await actionHelper.getElementText(this.page, this.welcomeMessage);
  }

  async getUrl() {
    return this.page.url();
  }

}
