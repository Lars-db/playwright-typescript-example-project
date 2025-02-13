import { Browser, BrowserType, Page, BrowserContext, chromium, firefox, webkit, Cookie } from '@playwright/test';

export class BrowserHelper {

    /**
     * Launches a new browser instance with a specified browser type.
     * Default is Chromium if no type is provided.
     * @param {string} browserType - The browser type to launch ('chromium', 'firefox', or 'webkit').
     * @param {boolean} headless - Whether to launch in headless mode (default is true).
     * @param {boolean} slowMo - Whether to slow down the browser (default is 0).
     * @returns {Promise<Browser>} - The launched browser instance.
     */
    public static async launchBrowser(browserType: string = 'chromium', headless: boolean = true, slowMo: number = 0): Promise<Browser> {
        let browser: BrowserType;

        switch (browserType.toLowerCase()) {
            case 'firefox':
                browser = firefox;
                break;
            case 'webkit':
                browser = webkit;
                break;
            case 'chromium':
            default:
                browser = chromium;
                break;
        }

        try {
            const launchedBrowser = await browser.launch({ headless, slowMo });
            return launchedBrowser;
        } catch (error) {
            console.error(`Error launching ${browserType}:`, error);
            throw error;
        }
    }


    /**
     * Creates a new browser context.
     * @param {Browser} browser - The browser instance.
     * @returns {Promise<BrowserContext>} - The new browser context.
     */
    public static async createContext(browser: Browser): Promise<BrowserContext> {
        const context = await browser.newContext();
        return context;
    }

    /**
     * Creates a new page in the specified context.
     * @param {BrowserContext} context - The browser context.
     * @returns {Promise<Page>} - The created page instance.
     */
    public static async createPage(context: BrowserContext): Promise<Page> {
        const page = await context.newPage();
        return page;
    }

    /**
     * Closes the browser context (this will close all pages within it).
     * @param {BrowserContext} context - The browser context to close.
     * @returns {Promise<void>}
     */
    public static async closeContext(context: BrowserContext): Promise<void> {
        try {
            await context.close();
        } catch (error) {
            console.error(`Error closing context:`, error);
            throw error;
        }
    }

    /**
     * Closes the browser.
     * @param {Browser} browser - The browser instance.
     * @returns {Promise<void>}
     */
    public static async closeBrowser(browser: Browser): Promise<void> {
        try {
            await browser.close();
        } catch (error) {
            console.error(`Error closing browser:`, error);
            throw error;
        }
    }

    /**
     * Retrieves the browser version.
     * @param {Browser} browser - The browser instance.
     * @returns {Promise<string>} - The browser version.
     */
    public static async getBrowserVersion(browser: Browser): Promise<string> {
        try {
            const version = await browser.version();
            return version;
        } catch (error) {
            console.error('Error retrieving browser version:', error);
            throw error;
        }
    }

}
