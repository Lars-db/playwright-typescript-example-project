import { expect } from '@playwright/test';

export class AssertionHelper {

    /**
     * Hard asserts that the actual value is equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public static hardAssertEqual(actual: any, expected: any, message: string = ''): void {
        try {
            expect(actual).toBe(expected);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertEqual(actual: any, expected: any, message: string = ''): void {
        try {
            expect.soft(actual).toBe(expected);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the actual value is not equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public static hardAssertNotEqual(actual: any, expected: any, message: string = ''): void {
        try {
            expect(actual).not.toBe(expected);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is not equal to the expected value.
     * @param {any} actual - The actual value to be tested.
     * @param {any} expected - The expected value to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertNotEqual(actual: any, expected: any, message: string = ''): void {
        try {
            expect.soft(actual).not.toBe(expected);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the actual value is true.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static hardAssertTrue(actual: boolean, message: string = ''): void {
        try {
            expect(actual).toBe(true);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is true.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertTrue(actual: boolean, message: string = ''): void {
        try {
            expect.soft(actual).toBe(true);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the actual value is false.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static hardAssertFalse(actual: boolean, message: string = ''): void {
        try {
            expect(actual).toBe(false);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the actual value is false.
     * @param {boolean} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertFalse(actual: boolean, message: string = ''): void {
        try {
            expect.soft(actual).toBe(false);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Asserts that the value is defined (not null or undefined).
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static hardAssertDefined(actual: any, message: string = ''): void {
        try {
            expect(actual).not.toBeNull();
            expect(actual).not.toBeUndefined();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the value is defined (not null or undefined).
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertDefined(actual: any, message: string = ''): void {
        try {
            expect.soft(actual).not.toBeNull();
            expect.soft(actual).not.toBeUndefined();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the value is null.
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static hardAssertNull(actual: any, message: string = ''): void {
        try {
            expect(actual).toBeNull();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the value is null.
     * @param {any} actual - The value to be tested.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertNull(actual: any, message: string = ''): void {
        try {
            expect.soft(actual).toBeNull();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the string contains the given substring.
     * @param {string} actual - The actual string.
     * @param {string} expectedSubstring - The expected substring.
     * @param {string} [message] - Optional custom error message.
     */
    public static hardAssertContains(actual: string, expectedSubstring: string, message: string = ''): void {
        try {
            expect(actual).toContain(expectedSubstring);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the string contains the given substring.
     * @param {string} actual - The actual string.
     * @param {string} expectedSubstring - The expected substring.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertContains(actual: string, expectedSubstring: string, message: string = ''): void {
        try {
            expect.soft(actual).toContain(expectedSubstring);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Asserts that an element is visible on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementVisible(element: any, message: string = ''): Promise<void> {
        try {
            await expect(element).toBeVisible();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that an element is visible on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async softAssertElementVisible(element: any, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).toBeVisible();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that an element is hidden on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementHidden(element: any, message: string = ''): Promise<void> {
        try {
            await expect(element).toBeHidden();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that an element is hidden on the page.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async softAssertElementHidden(element: any, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).toBeHidden();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element's text content matches the expected value.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} expectedText - The expected text.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementText(element: any, expectedText: string, message: string = ''): Promise<void> {
        try {
            await expect(element).toHaveText(expectedText);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element's text content matches the expected value.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} expectedText - The expected text.
     * @param {string} [message] - Optional custom error message.
     */
    public static async softAssertElementText(element: any, expectedText: string, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).toHaveText(expectedText);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element's attribute matches the expected value.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} attributeName - The attribute name (e.g., 'id', 'class').
     * @param {string} expectedValue - The expected value of the attribute.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementAttribute(element: any, attributeName: string, expectedValue: string, message: string = ''): Promise<void> {
        try {
            await expect(element).toHaveAttribute(attributeName, expectedValue);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
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
    public static async softAssertElementAttribute(element: any, attributeName: string, expectedValue: string, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).toHaveAttribute(attributeName, expectedValue);
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is enabled (e.g., not disabled).
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementEnabled(element: any, message: string = ''): Promise<void> {
        try {
            await expect(element).toBeEnabled();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is enabled (e.g., not disabled).
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async softAssertElementEnabled(element: any, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).toBeEnabled();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is disabled.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementDisabled(element: any, message: string = ''): Promise<void> {
        try {
            await expect(element).toBeDisabled();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is disabled.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async softAssertElementDisabled(element: any, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).toBeDisabled();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementInDOM(element: any, message: string = ''): Promise<void> {
        try {
            await expect(element).toBeVisible(); // Or use .toBeInDOM if applicable
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async softAssertElementInDOM(element: any, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).toBeVisible(); // Or use .toBeInDOM if applicable
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Hard asserts that the element is not in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async hardAssertElementNotInDOM(element: any, message: string = ''): Promise<void> {
        try {
            await expect(element).not.toBeVisible();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
            throw error;
        }
    }

    /**
     * Soft asserts that the element is not in the DOM.
     * @param {Playwright.ElementHandle} element - The element to check.
     * @param {string} [message] - Optional custom error message.
     */
    public static async softAssertElementNotInDOM(element: any, message: string = ''): Promise<void> {
        try {
            await expect.soft(element).not.toBeVisible();
        } catch (error) {
            console.error(`Assertion failed: ${message}`);
        }
    }

    /**
     * Soft asserts that all keys and values in the actual JSON match the expected object.
     * If there's a mismatch, it will log which key and value didn't match.
     * @param {any} actual - The actual JSON object to be tested.
     * @param {any} expected - The expected object to compare with.
     * @param {string} [message] - Optional custom error message.
     */
    public static softAssertJsonEqual(actual: any, expected: any, message: string = ''): void {
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
                console.error(`Assertion failed: ${detailedMessage}`);
            }
        } catch (error) {
            // Handle and log unexpected errors
            console.error(`Assertion failed: ${message} - ${error.message}`);
        }
    }
}
