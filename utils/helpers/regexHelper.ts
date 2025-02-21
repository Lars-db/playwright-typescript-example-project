export class RegexHelper {

    /**
     * Validates if the given string matches the provided regular expression pattern.
     * @param {string} input - The string to be validated.
     * @param {string} pattern - The regex pattern to match against.
     * @returns {boolean} - Returns true if the input matches the regex pattern, otherwise false.
     */
    public validateRegex(input: string, pattern: string): boolean {
        const regex = new RegExp(pattern);
        return regex.test(input);
    }

    /**
     * Extracts all matches of a given regex pattern from the input string.
     * @param {string} input - The string to search for matches.
     * @param {string} pattern - The regex pattern to match.
     * @returns {string[]} - Returns an array of all matched substrings.
     */
    public extractMatches(input: string, pattern: string): string[] {
        const regex = new RegExp(pattern, 'g');
        return input.match(regex) || [];
    }

    /**
     * Replaces all occurrences of a pattern in the input string with a specified replacement.
     * @param {string} input - The string to perform replacements on.
     * @param {string} pattern - The regex pattern to search for.
     * @param {string} replacement - The string to replace matches with.
     * @returns {string} - Returns the modified string with replacements.
     */
    public replacePattern(input: string, pattern: string, replacement: string): string {
        const regex = new RegExp(pattern, 'g');
        return input.replace(regex, replacement);
    }

    /**
     * Extracts the first match of a regex pattern from the input string.
     * @param {string} input - The string to search for the first match.
     * @param {string} pattern - The regex pattern to match.
     * @returns {string | null} - Returns the first match found or null if no match is found.
     */
    public extractFirstMatch(input: string, pattern: string): string | null {
        const regex = new RegExp(pattern);
        const match = regex.exec(input);
        return match ? match[0] : null;
    }

    /**
     * Checks if the input string contains a valid email address using a regex pattern.
     * @param {string} input - The string to check.
     * @returns {boolean} - Returns true if the string is a valid email, otherwise false.
     */
    public isValidEmail(input: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return this.validateRegex(input, emailPattern.source);
    }

    /**
     * Checks if the input string is a valid phone number using a regex pattern.
     * @param {string} input - The string to check.
     * @returns {boolean} - Returns true if the string is a valid phone number, otherwise false.
     */
    public isValidPhoneNumber(input: string): boolean {
        const phonePattern = /^\+?[1-9]\d{1,14}$/; // International phone number format
        return this.validateRegex(input, phonePattern.source);
    }

    /**
     * Extracts a number (integer or float) from the input string using a regex pattern.
     * @param {string} input - The string to extract the number from.
     * @returns {number | null} - Returns the extracted number or null if no number is found.
     */
    public extractNumber(input: string): number | null {
        const numberPattern = /[-+]?\d*\.?\d+/;
        const match = this.extractFirstMatch(input, numberPattern.source);
        return match ? parseFloat(match) : null;
    }

    /**
     * Validates if a string contains only alphabetic characters.
     * @param {string} input - The string to validate.
     * @returns {boolean} - Returns true if the string contains only letters (a-z, A-Z), otherwise false.
     */
    public isAlphabetic(input: string): boolean {
        const alphabeticPattern = /^[a-zA-Z]+$/;
        return this.validateRegex(input, alphabeticPattern.source);
    }

    /**
     * Validates if a string contains only numeric digits.
     * @param {string} input - The string to validate.
     * @returns {boolean} - Returns true if the string contains only digits, otherwise false.
     */
    public isNumeric(input: string): boolean {
        const numericPattern = /^\d+$/;
        return this.validateRegex(input, numericPattern.source);
    }

    /**
     * Validates if a string contains only alphanumeric characters (letters and digits).
     * @param {string} input - The string to validate.
     * @returns {boolean} - Returns true if the string contains only alphanumeric characters, otherwise false.
     */
    public isAlphanumeric(input: string): boolean {
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;
        return this.validateRegex(input, alphanumericPattern.source);
    }

    /**
     * Validates if the input string is in the proper URL format.
     * @param {string} input - The string to validate.
     * @returns {boolean} - Returns true if the string is a valid URL, otherwise false.
     */
    public isValidURL(input: string): boolean {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return this.validateRegex(input, urlPattern.source);
    }
}
