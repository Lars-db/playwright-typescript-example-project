import { BasePage } from './basePage';
import { Page } from '@playwright/test';
import { actionHelper } from '../utils/helpers/actionHelper.ts';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private usernameField = '#username';
  private passwordField = '#password';
  private loginButton = '#login-button';

  async navigateToLoginPage() {
    await actionHelper.navigateTo(this.page, 'https://example.com/login');
  }

  async login(username: string, password: string) {
    await actionHelper.typeIntoField(this.page, this.usernameField, username);
    await actionHelper.typeIntoField(this.page, this.passwordField, password);
    await actionHelper.clickElement(this.page, this.loginButton);
  }
}
