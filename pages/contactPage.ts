import { BasePage } from './basePage';
import { Page } from '@playwright/test';
import { actionHelper } from '../utils/helpers/actionHelper.ts';

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
