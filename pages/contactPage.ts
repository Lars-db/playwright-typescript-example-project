import { BasePage } from './basePage';
import { Page } from '@playwright/test';
import { actionHelper } from '../utils/helpers/actionHelper.ts';

export class ContactPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly nameField = '#name';
  private readonly emailField = '#email';
  private readonly messageField = '#message';
  private readonly submitButton = '#submit-button';
  private readonly successMessage = '.success-message';

  async fillContactForm(name: string, email: string, message: string) {
    await actionHelper.typeIntoField(this.page, this.nameField, name);
    await actionHelper.typeIntoField(this.page, this.emailField, email);
    await actionHelper.typeIntoField(this.page, this.messageField, message);
  }

  async submitForm() {
    await actionHelper.clickElement(this.page, this.submitButton);
  }

  async getSuccessMessage() {
    return await actionHelper.getElementText(this.page, this.successMessage);
  }
}
