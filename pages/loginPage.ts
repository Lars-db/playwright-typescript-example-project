import { BasePage } from './basePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Elements
  private usernameField = '#username';
  private passwordField = '#password';
  private loginButton = '#login-button';

  // Actions
  async login(username: string, password: string) {
    await this.type(this.usernameField, username);
    await this.type(this.passwordField, password);
    await this.click(this.loginButton);
  }
}
