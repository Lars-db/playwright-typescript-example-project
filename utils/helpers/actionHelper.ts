import { Page, Cookie, Locator } from '@playwright/test';

class actionHelper {
    /**
     * Gets the text content of an element.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the element.
     * @returns {Promise<string>} - The text content of the element.
     */
    public static async getElementText(page: Page, selector: string): Promise<string> {
        try {
            const element = await page.$(selector);
            if (element) {
                const text = await element.innerText();
                console.log(`Text from element "${selector}": ${text}`);
                return text;
            } else {
                console.error(`Element "${selector}" not found.`);
                throw new Error(`Element "${selector}" not found.`);
            }
        } catch (error) {
            console.error(`Error getting text from element "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Waits for an element to appear on the page.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the element.
     * @param {number} timeout - Timeout in milliseconds (default: 30000ms).
     * @returns {Promise<void>}
     */
    public static async waitForElement(page: Page, selector: string, timeout: number = 30000): Promise<void> {
        try {
            await page.waitForSelector(selector, { timeout });
            console.log(`Element "${selector}" appeared on the page.`);
        } catch (error) {
            console.error(`Timeout waiting for element "${selector}"`, error);
            throw error;
        }
    }
    
    /**
    * Gets the title of the current page.
    * @param {Page} page - The page instance.
    * @returns {Promise<string>} - The title of the page.
    */
    public static async getPageTitle(page: Page): Promise<string> {
        try {
            const title = await page.title();
            console.log(`Page title: "${title}"`);
            return title;
        } catch (error) {
            console.error('Error getting page title:', error);
            throw error;
        }
    }
    
    /**
     * Clears the local storage for the current page context.
     * @param {Page} page - The page instance.
     * @returns {Promise<void>}
     */
    public static async clearLocalStorage(page: Page): Promise<void> {
        try {
            await page.evaluate(() => {
                window.localStorage.clear();
            });
            console.log('Local Storage cleared.');
        } catch (error) {
            console.error('Error clearing local storage:', error);
            throw error;
        }
    }
    
    /**
     * Clears the session storage for the current page context.
     * @param {Page} page - The page instance.
     * @returns {Promise<void>}
     */
    public static async clearSessionStorage(page: Page): Promise<void> {
        try {
            await page.evaluate(() => {
                window.sessionStorage.clear();
            });
            console.log('Session Storage cleared.');
        } catch (error) {
            console.error('Error clearing session storage:', error);
            throw error;
        }
    }

    /**
     * Sets a browser cookie.
     * @param {Page} page - The page instance.
     * @param {object} cookie - The cookie to set (name, value, domain, etc.).
     * @returns {Promise<void>}
     */
    public static async setCookie(page: Page, cookie: Cookie): Promise<void> {
        try {
            await page.context().addCookies([cookie]);
            console.log(`Cookie set: ${JSON.stringify(cookie)}`);
        } catch (error) {
            console.error(`Error setting cookie:`, error);
            throw error;
        }
    }

    /**
     * Retrieves all cookies for the current page.
     * @param {Page} page - The page instance.
     * @returns {Promise<object[]>} - List of cookies.
     */
    public static async getCookies(page: Page): Promise<object[]> {
        try {
            const cookies = await page.context().cookies();
            return cookies;
        } catch (error) {
            console.error(`Error getting cookies:`, error);
            throw error;
        }
    }

    /**
     * Clears all cookies for the current page.
     * @param {Page} page - The page instance.
     * @returns {Promise<void>}
     */
    public static async clearCookies(page: Page): Promise<void> {
        try {
            await page.context().clearCookies();
            console.log('Cookies cleared');
        } catch (error) {
            console.error(`Error clearing cookies:`, error);
            throw error;
        }
    }
        
    /**
     * Navigates the browser to the specified URL.
     * @param {Page} page - The page instance.
     * @param {string} url - The URL to navigate to.
     * @param {number} timeout - The maximum time to wait for navigation (in milliseconds).
     * @returns {Promise<void>}
     */
    public static async navigateTo(page: Page, url: string, timeout: number = 30000): Promise<void> {
        try {
            await page.goto(url, { timeout });
        } catch (error) {
            console.error(`Error navigating to URL ${url}:`, error);
            throw error;
        }
    }

    /**
     * Takes a screenshot of the current page.
     * @param {Page} page - The page instance.
     * @param {string} filePath - The file path to save the screenshot.
     * @param {string} [fullPage] - Whether to capture the full page screenshot (optional).
     * @returns {Promise<void>}
     */
    public static async takeScreenshot(page: Page, filePath: string, fullPage: boolean = false): Promise<void> {
        try {
            await page.screenshot({ path: filePath, fullPage });
            console.log(`Screenshot saved at ${filePath}`);
        } catch (error) {
            console.error(`Error taking screenshot:`, error);
            throw error;
        }
    }

    /**
     * Clicks on an element identified by a selector.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the element.
     * @param {number} [timeout=30000] - Optional timeout for the click action.
     * @returns {Promise<void>}
     */
    public static async clickElement(page: Page, selector: string, timeout: number = 30000): Promise<void> {
        try {
            await page.click(selector, { timeout });
            console.log(`Clicked on element: ${selector}`);
        } catch (error) {
            console.error(`Error clicking on element "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Types text into an input field.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the input field.
     * @param {string} text - The text to type into the input field.
     * @param {number} [timeout=30000] - Optional timeout for the typing action.
     * @returns {Promise<void>}
     */
    public static async typeIntoField(page: Page, selector: string, text: string, timeout: number = 30000): Promise<void> {
        try {
            await page.fill(selector, text, { timeout });
            console.log(`Typed "${text}" into field: ${selector}`);
        } catch (error) {
            console.error(`Error typing into field "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Double clicks on an element.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the element.
     * @param {number} [timeout=30000] - Optional timeout for the double click action.
     * @returns {Promise<void>}
     */
    public static async doubleClickElement(page: Page, selector: string, timeout: number = 30000): Promise<void> {
        try {
            await page.dblclick(selector, { timeout });
            console.log(`Double clicked on element: ${selector}`);
        } catch (error) {
            console.error(`Error double-clicking on element "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Hovers over an element.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the element.
     * @param {number} [timeout=30000] - Optional timeout for the hover action.
     * @returns {Promise<void>}
     */
    public static async hoverOverElement(page: Page, selector: string, timeout: number = 30000): Promise<void> {
        try {
            await page.hover(selector, { timeout });
            console.log(`Hovered over element: ${selector}`);
        } catch (error) {
            console.error(`Error hovering over element "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Selects an option from a dropdown (select element).
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the dropdown.
     * @param {string} optionValue - The value of the option to select.
     * @param {number} [timeout=30000] - Optional timeout for the select action.
     * @returns {Promise<void>}
     */
    public static async selectOption(page: Page, selector: string, optionValue: string, timeout: number = 30000): Promise<void> {
        try {
            await page.selectOption(selector, optionValue, { timeout });
            console.log(`Selected option with value "${optionValue}" from dropdown: ${selector}`);
        } catch (error) {
            console.error(`Error selecting option from dropdown "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Scrolls the page to bring an element into view.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the element.
     * @returns {Promise<void>}
     */
    public static async scrollToElement(page: Page, selector: string): Promise<void> {
        try {
            await page.$eval(selector, (element: HTMLElement) => element.scrollIntoView({ behavior: 'smooth', block: 'center' }));
            console.log(`Scrolled to element: ${selector}`);
        } catch (error) {
            console.error(`Error scrolling to element "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Clears the input field.
     * @param {Page} page - The page instance.
     * @param {string} selector - The CSS selector for the input field.
     * @returns {Promise<void>}
     */
    public static async clearInputField(page: Page, selector: string): Promise<void> {
        try {
            await page.fill(selector, '');
            console.log(`Cleared input field: ${selector}`);
        } catch (error) {
            console.error(`Error clearing input field "${selector}":`, error);
            throw error;
        }
    }

    /**
   * Drags an element and drops it onto another element using Playwright's mouse API.
   */
    public static async dragAndDrop(
        page: Page, 
        source: string | Locator, 
        target: string | Locator, 
        timeout: number = 30000
    ): Promise<void> {
        try {
        const sourceLocator = this.resolveLocator(page, source);
        const targetLocator = this.resolveLocator(page, target);

        await this.ensureElementVisible(sourceLocator, timeout);
        await this.ensureElementVisible(targetLocator, timeout);

        const sourceBox = await this.getBoundingBox(sourceLocator);
        const targetBox = await this.getBoundingBox(targetLocator);

        if (!sourceBox || !targetBox) {
            throw new Error('Failed to retrieve element bounding boxes');
        }

        await this.performDragAndDrop(page, sourceBox, targetBox);
        console.log(`Dragged element successfully`);
        
        } catch (error) {
        console.error('Error performing drag and drop:', error);
        throw error;
        }
    }

    /** Resolves a string selector or Locator into a Playwright Locator. */
    private static resolveLocator(page: Page, element: string | Locator): Locator {
        return typeof element === 'string' ? page.locator(element) : element;
    }

    /** Ensures that an element is visible before interaction. */
    private static async ensureElementVisible(locator: Locator, timeout: number): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout });
    }

    /** Retrieves the bounding box of an element. */
    private static async getBoundingBox(locator: Locator): Promise<{ x: number; y: number; width: number; height: number } | null> {
        return await locator.boundingBox();
    }

    /** Performs the actual drag-and-drop action using Playwright's mouse API. */
    private static async performDragAndDrop(
        page: Page, 
        sourceBox: { x: number; y: number; width: number; height: number }, 
        targetBox: { x: number; y: number; width: number; height: number }
    ): Promise<void> {
        await page.mouse.move(
        sourceBox.x + sourceBox.width / 2, 
        sourceBox.y + sourceBox.height / 2
        );
        await page.mouse.down();
        await page.mouse.move(
        targetBox.x + targetBox.width / 2, 
        targetBox.y + targetBox.height / 2
        );
        await page.mouse.up();
    }
}