import { Page, Cookie, Locator } from '@playwright/test';
import { logger } from '../logger';

export class actionHelper {
    /**
     * Gets the text content of an element identified by a selector or a Locator.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selector - The CSS selector for the element or a Locator instance.
     * @param {number} [timeout=45000] - Optional timeout for the click action.
     * @returns {Promise<string>} - The text content of the element.
     */
    public static async getElementText(page: Page, selector: string | Locator, timeout: number = 45000): Promise<string> {
        try {
            // Resolve the selector to a Locator if it's a string
            const locator = typeof selector === 'string' ? page.locator(selector) : selector;

            // Wait for the element to be visible before getting the text
            await locator.waitFor({ state: 'visible', timeout: timeout });

            // Retrieve the text content
            const text = await locator.innerText();
            logger.debug('Text from element: ', text)

            return text;
        } catch (error) {
            logger.error(`Error getting text from element "${typeof selector === 'string' ? selector : selector.toString()}":`, error);
            throw error;
        }
    }

    /**
     * Waits for an element to appear on the page.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selectorOrLocator - The CSS selector as a string or a Playwright Locator.
     * @param {number} timeout - Timeout in milliseconds (default: 30000ms).
     * @returns {Promise<void>}
     */
    public static async waitForElement(
        page: Page, 
        selectorOrLocator: string | Locator, 
        timeout: number = 30000
    ): Promise<void> {
        try {
            if (typeof selectorOrLocator === 'string') {
                await page.waitForSelector(selectorOrLocator, { timeout });
                logger.debug(`Element "${selectorOrLocator}" appeared on the page.`);
            } else {
                await selectorOrLocator.waitFor({ state: 'visible', timeout });
                logger.debug(`Element "${selectorOrLocator}" appeared on the page.`);
            }
        } catch (error) {
            logger.error(`Timeout waiting for element "${selectorOrLocator}"`, error);
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
            logger.debug(`Page title: "${title}"`);
            return title;
        } catch (error) {
            logger.error('Error getting page title:', error);
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
            logger.info('Local Storage cleared.');
        } catch (error) {
            logger.error('Error clearing local storage:', error);
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
            logger.info('Session Storage cleared.');
        } catch (error) {
            logger.error('Error clearing session storage:', error);
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
            logger.info(`Cookie set: ${JSON.stringify(cookie)}`);
        } catch (error) {
            logger.error(`Error setting cookie:`, error);
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
            logger.error(`Error getting cookies:`, error);
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
            logger.info('Cookies cleared');
        } catch (error) {
            logger.error(`Error clearing cookies:`, error);
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
            logger.error(`Error navigating to URL ${url}:`, error);
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
            logger.info(`Screenshot saved at ${filePath}`);
        } catch (error) {
            logger.error(`Error taking screenshot:`, error);
            throw error;
        }
    }

    /**
     * Clicks on an element identified by a selector or a Locator.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selector - The CSS selector for the element or a Locator instance.
     * @param {number} [timeout=45000] - Optional timeout for the click action.
     * @returns {Promise<void>}
     */
    public static async clickElement(page: Page, selector: string | Locator, timeout: number = 45000): Promise<void> {
        try {
            const locator = typeof selector === 'string' ? page.locator(selector) : selector;

            // Wait for the element to be visible and clickable before clicking
            await locator.waitFor({ state: 'visible', timeout });
            await locator.click({ timeout });

            logger.debug(`Clicked on element: ${typeof selector === 'string' ? selector : selector.toString()}`);
        } catch (error) {
            logger.error(`Error clicking on element "${typeof selector === 'string' ? selector : selector.toString()}":`, error);
            throw error;
        }
    }

    /**
     * Types text into an input field identified by a selector or a Locator.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selector - The CSS selector for the input field or a Locator instance.
     * @param {string} text - The text to type into the input field.
     * @param {number} [timeout=30000] - Optional timeout for the typing action.
     * @returns {Promise<void>}
     */
    public static async typeIntoField(page: Page, selector: string | Locator, text: string, timeout: number = 30000): Promise<void> {
        try {
            const locator = typeof selector === 'string' ? page.locator(selector) : selector;

            // Wait for the input field to be visible before typing
            await locator.waitFor({ state: 'visible', timeout });
            await locator.fill(text, { timeout });

            logger.debug(`Typed "${text}" into field: ${typeof selector === 'string' ? selector : selector.toString()}`);
        } catch (error) {
            logger.error(`Error typing into field "${typeof selector === 'string' ? selector : selector.toString()}":`, error);
            throw error;
        }
    }


/**
     * Double clicks on an element.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selectorOrLocator - The CSS selector as a string or a Playwright Locator.
     * @param {number} [timeout=30000] - Optional timeout for the double-click action.
     * @returns {Promise<void>}
     */
    public static async doubleClickElement(
        page: Page, 
        selectorOrLocator: string | Locator, 
        timeout: number = 30000
    ): Promise<void> {
        try {
            if (typeof selectorOrLocator === 'string') {
                await page.dblclick(selectorOrLocator, { timeout });
                logger.debug(`Double clicked on element: "${selectorOrLocator}"`);
            } else {
                await selectorOrLocator.dblclick({ timeout });
                logger.debug(`Double clicked on element: "${selectorOrLocator}"`);
            }
        } catch (error) {
            logger.error(`Error double-clicking on element "${selectorOrLocator}":`, error);
            throw error;
        }
    }

    /**
     * Hovers over an element.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selectorOrLocator - The CSS selector as a string or a Playwright Locator.
     * @param {number} [timeout=30000] - Optional timeout for the hover action.
     * @returns {Promise<void>}
     */
    public static async hoverOverElement(
        page: Page, 
        selectorOrLocator: string | Locator, 
        timeout: number = 30000
    ): Promise<void> {
        try {
            if (typeof selectorOrLocator === 'string') {
                await page.hover(selectorOrLocator, { timeout });
                logger.debug(`Hovered over element: "${selectorOrLocator}"`);
            } else {
                await selectorOrLocator.hover({ timeout });
                logger.debug(`Hovered over element: "${selectorOrLocator}"`);
            }
        } catch (error) {
            logger.error(`Error hovering over element "${selectorOrLocator}":`, error);
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
            logger.debug(`Selected option with value "${optionValue}" from dropdown: ${selector}`);
        } catch (error) {
            logger.error(`Error selecting option from dropdown "${selector}":`, error);
            throw error;
        }
    }

    /**
     * Scrolls the page to bring an element into view.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selectorOrLocator - The CSS selector as a string or a Playwright Locator.
     * @returns {Promise<void>}
     */
    public static async scrollToElement(
        page: Page, 
        selectorOrLocator: string | Locator
    ): Promise<void> {
        try {
            if (typeof selectorOrLocator === 'string') {
                await page.$eval(selectorOrLocator, (element: HTMLElement) => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
                logger.debug(`Scrolled to element: "${selectorOrLocator}"`);
            } else {
                await selectorOrLocator.scrollIntoViewIfNeeded();
                logger.debug(`Scrolled to element using locator: "${selectorOrLocator}"`);
            }
        } catch (error) {
            logger.error(`Error scrolling to element "${selectorOrLocator}":`, error);
            throw error;
        }
    }

    /**
     * Clears the input field.
     * @param {Page} page - The page instance.
     * @param {string | Locator} selectorOrLocator - The CSS selector as a string or a Playwright Locator.
     * @returns {Promise<void>}
     */
    public static async clearInputField(
        page: Page, 
        selectorOrLocator: string | Locator
    ): Promise<void> {
        try {
            if (typeof selectorOrLocator === 'string') {
                await page.fill(selectorOrLocator, '');
                logger.debug(`Cleared input field: "${selectorOrLocator}"`);
            } else {
                await selectorOrLocator.fill('');
                logger.debug(`Cleared input field using locator: "${selectorOrLocator}"`);
            }
        } catch (error) {
            logger.error(`Error clearing input field "${selectorOrLocator}":`, error);
            throw error;
        }
    }

    // Drags an element and drops it onto another element using Playwright's mouse API.
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
        logger.debug(`Dragged element successfully`);
        
        } catch (error) {
        logger.error('Error performing drag and drop:', error);
        throw error;
        }
    }

    // Resolves a string selector or Locator into a Playwright Locator. 
    private static resolveLocator(page: Page, element: string | Locator): Locator {
        return typeof element === 'string' ? page.locator(element) : element;
    }

    // Ensures that an element is visible before interaction.
    private static async ensureElementVisible(locator: Locator, timeout: number): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout });
    }

    /** Retrieves the bounding box of an element. */
    private static async getBoundingBox(locator: Locator): Promise<{ x: number; y: number; width: number; height: number } | null> {
        return await locator.boundingBox();
    }

    // Performs the actual drag-and-drop action using Playwright's mouse API.
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