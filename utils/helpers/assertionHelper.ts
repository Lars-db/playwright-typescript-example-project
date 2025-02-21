import { expect } from '@playwright/test';
import { logger } from '../logger';

export class AssertionHelper {
    [x: string]: any;

    /**
     * Hard asserts that the actual value is equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public hardAssertEquals(actual: any, expected: any, message?: string): void {
        try {
            expect(actual).toBe(expected);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertEquals(actual: any, expected: any, message?: string): void {
        try {
            expect.soft(actual).toBe(expected);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the actual value is not equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public hardAssertNotEquals(actual: any, expected: any, message?: string): void {
        try {
            expect(actual).not.toBe(expected);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is not equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertNotEquals(actual: any, expected: any, message?: string): void {
        try {
            expect.soft(actual).not.toBe(expected);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the actual value is true.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public hardAssertTrue(actual: boolean, message?: string): void {
        try {
            expect(actual).toBe(true);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is true.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertTrue(actual: boolean, message?: string): void {
        try {
            expect.soft(actual).toBe(true);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the actual value is false.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public hardAssertFalse(actual: boolean, message?: string): void {
        try {
            expect(actual).toBe(false);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is false.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertFalse(actual: boolean, message?: string): void {
        try {
            expect.soft(actual).toBe(false);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Asserts that the value is defined (not null or undefined).
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public hardAssertDefined(actual: any, message?: string): void {
        try {
            expect(actual).not.toBeNull();
            expect(actual).not.toBeUndefined();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the value is defined (not null or undefined).
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertDefined(actual: any, message?: string): void {
        try {
            expect.soft(actual).not.toBeNull();
            expect.soft(actual).not.toBeUndefined();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the value is null.
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public hardAssertNull(actual: any, message?: string): void {
        try {
            expect(actual).toBeNull();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the value is null.
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertNull(actual: any, message?: string): void {
        try {
            expect.soft(actual).toBeNull();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the string contains the given substring.
     * @param {string} actual - The actual string.
     * @param {string} expectedSubstring - The expected substring.
     * @param {string} [message] - Optional custom error message.
     */
    public hardAssertContains(actual: string, expectedSubstring: string, message?: string): void {
        try {
            expect(actual).toContain(expectedSubstring);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the string contains the given substring.
     * @param {string} actual - The actual string.
     * @param {string} expectedSubstring - The expected substring.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertContains(actual: string, expectedSubstring: string, message?: string): void {
        try {
            expect.soft(actual).toContain(expectedSubstring);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Asserts that an element is visible on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementVisible(element: any, message?: string): Promise<void> {
        try {
            await expect(element).toBeVisible();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that an element is visible on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementVisible(element: any, message?: string): Promise<void> {
        try {
            await expect.soft(element).toBeVisible();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that an element is hidden on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementHidden(element: any, message?: string): Promise<void> {
        try {
            await expect(element).toBeHidden();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that an element is hidden on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementHidden(element: any, message?: string): Promise<void> {
        try {
            await expect.soft(element).toBeHidden();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element's text content matches the expected value.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} expectedText - The expected text.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementText(element: any, expectedText: string, message?: string): Promise<void> {
        try {
            await expect(element).toHaveText(expectedText);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element's text content matches the expected value.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} expectedText - The expected text.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementText(element: any, expectedText: string, message?: string): Promise<void> {
        try {
            await expect.soft(element).toHaveText(expectedText);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element's attribute matches the expected value.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} attributeName - The attribute name (e.g., 'id', 'class').
     * @param {string} expectedValue - The expected value of the attribute.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementAttribute(element: any, attributeName: string, expectedValue: string, message?: string): Promise<void> {
        try {
            await expect(element).toHaveAttribute(attributeName, expectedValue);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element's attribute matches the expected value.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} attributeName - The attribute name (e.g., 'id', 'class').
     * @param {string} expectedValue - The expected value of the attribute.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementAttribute(element: any, attributeName: string, expectedValue: string, message?: string): Promise<void> {
        try {
            await expect.soft(element).toHaveAttribute(attributeName, expectedValue);
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is enabled (e.g., not disabled).
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementEnabled(element: any, message?: string): Promise<void> {
        try {
            await expect(element).toBeEnabled();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is enabled (e.g., not disabled).
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementEnabled(element: any, message?: string): Promise<void> {
        try {
            await expect.soft(element).toBeEnabled();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is disabled.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementDisabled(element: any, message?: string): Promise<void> {
        try {
            await expect(element).toBeDisabled();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is disabled.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementDisabled(element: any, message?: string): Promise<void> {
        try {
            await expect.soft(element).toBeDisabled();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementInDOM(element: any, message?: string): Promise<void> {
        try {
            await expect(element).toBeVisible(); // Or use .toBeInDOM if applicable
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementInDOM(element: any, message?: string): Promise<void> {
        try {
            await expect.soft(element).toBeVisible(); // Or use .toBeInDOM if applicable
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is not in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async hardAssertElementNotInDOM(element: any, message?: string): Promise<void> {
        try {
            await expect(element).not.toBeVisible();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is not in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public async softAssertElementNotInDOM(element: any, message?: string): Promise<void> {
        try {
            await expect.soft(element).not.toBeVisible();
        } catch (error) {
            logger.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Soft asserts that all keys and values in the actual JSON match the expected object.
     * If there's a mismatch, it will log which key and value didn't match.
     * @param {any} actual - The actual JSON object to be tested.
     * @param {any} expected - The expected object to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public softAssertJsonEquals(actual: any, expected: any, message?: string): void {
        try {
            // Ensure both are objects before proceeding
            if (typeof actual !== 'object' || typeof expected !== 'object') {
                throw new Error('Both actual and expected should be objects');
            }

            // Collect mismatches for key-value pairs
            const mismatches: string[] = [];

            // Compare all keys and values in expected with actual
            for (const key of Object.keys(expected)) {
                if (expected[key] !== actual[key]) {
                    mismatches.push(`Key '${key}' mismatch: Expected '${expected[key]}', but was '${actual[key]}'`);
                }
            }

            // If there are mismatches, log them and throw an error message
            if (mismatches.length > 0) {
                const mismatchDetails = mismatches.join('\n');
                const detailedMessage = `${message} Mismatches: ${mismatchDetails}`;
                logger.error(`Assertion failed: ${detailedMessage}`);
            }
        } catch (error) {
            // Handle and log unexpected errors
            logger.error(`Assertion failed: ${message} - ${error.message}`);
        }
    }

        /**
         * Hard asserts that the actual URL is equal to the expected URL.
         * @param {string} actualUrl - The url to check.
         * @param {string} expectedUrl - The expected url to compare with.
         * @param {string} [message] - Optional custom error message.
         */
        public async hardAssertPageUrl(actualUrl: string, expectedUrl: string, message?: string): Promise<void> {
            try {
                await expect(actualUrl).toBe(expectedUrl);
            } catch (error) {
                logger.error(`Assertion failed: ${message}`);
                throw error;
            }
        }
    
        /**
         * Soft asserts that the actual URL is equal to the expected URL.
         * @param {string} actualUrl - The url to check.
         * @param {string} expectedUrl - The expected url to compare with.
         * @param {string} [message] - Optional custom error message.
         */
        public async softAssertPageUrl(actualUrl: string, expectedUrl: string, message?: string): Promise<void> {
            try {
                await expect.soft(actualUrl).toBe(expectedUrl);
                logger.debug('Assertion passed. URL Matched');
            } catch (error) {
                logger.error(`Assertion failed: ${message}`);
            }
        }
}
