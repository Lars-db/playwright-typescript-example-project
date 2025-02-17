import { Page } from '@playwright/test';

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Example: Navigate to a URL
  async navigate(url: string) {
    await this.page.goto(url);
  }

  // Example: Wait for an element to be visible
  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  // Example: Click a button
  async click(selector: string) {
    await this.page.click(selector);
  }

  // Example: Type text into a field
  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  // Example: Get text from an element
  async getText(selector: string) {
    return await this.page.innerText(selector);
  }
}
