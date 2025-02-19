import { BasePage } from './basePage';
import { Page } from '@playwright/test';
import { actionHelper } from '../utils/helpers/actionHelper.ts';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private usernameField = '#username';
  private passwordField = '#password';
  private loginButton = this.page.getByRole('button', { name: 'Login'});
  private acceptCookiesBtn = this.page.getByRole('button', { name: 'Consent'});

  async navigateToLoginPage() {
    await actionHelper.navigateTo(this.page, 'https://practice.expandtesting.com/login');
  }

  async acceptCookies() {
    await actionHelper.clickElement(this.page, this.acceptCookiesBtn);
  }

  async login(username: string, password: string) {
    await actionHelper.typeIntoField(this.page, this.usernameField, username);
    await actionHelper.typeIntoField(this.page, this.passwordField, password);
    await actionHelper.clickElement(this.page, this.loginButton);
  }
}
