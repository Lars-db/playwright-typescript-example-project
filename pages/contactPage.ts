import { BasePage } from './basePage';
import { Page } from '@playwright/test';

export class ContactPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private nameField = '#name';
  private emailField = '#email';
  private messageField = '#message';
  private submitButton = '#submit-button';
  private successMessage = '.success-message';

  async fillContactForm(name: string, email: string, message: string) {
    await this.type(this.nameField, name);
    await this.type(this.emailField, email);
    await this.type(this.messageField, message);
  }

  async submitForm() {
    await this.click(this.submitButton);
  }

  async getSuccessMessage() {
    return await this.getText(this.successMessage);
  }
}
