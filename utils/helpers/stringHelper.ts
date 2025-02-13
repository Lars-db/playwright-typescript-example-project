export class StringHelper {
  
    /**
     * Capitalizes the first letter of the provided string while keeping the rest unchanged.
     * 
     * @param str - The input string to modify.
     * @returns The modified string with the first letter capitalized.
     */
    static capitalizeFirstLetter(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    /**
     * Converts a given string to camelCase format by removing spaces, underscores, and hyphens,
     * and capitalizing the first letter of each subsequent word.
     * 
     * @param str - The input string to convert.
     * @returns The camelCase formatted string.
     */
    static toCamelCase(str: string): string {
      return str
        .toLowerCase()
        .replace(/([-_][a-z])/g, (group) =>
          group.toUpperCase().replace('-', '').replace('_', '')
        );
    }
  
    /**
     * Converts a given string to snake_case format by replacing spaces with underscores 
     * and inserting underscores between lowercase and uppercase letter transitions.
     * 
     * @param str - The input string to convert.
     * @returns The snake_case formatted string.
     */
    static toSnakeCase(str: string): string {
      return str
        .replace(/\s+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase();
    }
  
    /**
     * Converts a given string to kebab-case format by replacing spaces with hyphens 
     * and inserting hyphens between lowercase and uppercase letter transitions.
     * 
     * @param str - The input string to convert.
     * @returns The kebab-case formatted string.
     */
    static toKebabCase(str: string): string {
      return str
        .replace(/\s+/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
    }
  
    /**
     * Removes all whitespace characters from the input string.
     * 
     * @param str - The input string to process.
     * @returns A string without any whitespace characters.
     */
    static removeWhitespace(str: string): string {
      return str.replace(/\s+/g, '');
    }
  
    /**
     * Generates a random alphanumeric string of a specified length.
     * 
     * @param length - The length of the generated string (default is 10).
     * @returns A random alphanumeric string.
     */
    static generateRandomString(length: number = 10): string {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    }
  
    /**
     * Generates a secure random string containing uppercase letters, lowercase letters, digits, and special characters.
     * 
     * @param length - The length of the generated password (default is 12).
     * @returns A randomly generated password string.
     */
    static generateRandomPassword(length: number = 12): string {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
      return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    }
  
    /**
     * Truncates a string to a specified maximum length, adding "..." if truncation occurs.
     * 
     * @param str - The input string to truncate.
     * @param maxLength - The maximum length allowed for the string.
     * @returns The truncated string with "..." appended if necessary.
     */
    static truncate(str: string, maxLength: number): string {
      return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    }

    /**
     * Checks if a string contains another substring (case-insensitive).
     * Useful for verifying partial matches in test validations.
     * @param input - The input string.
     * @param substring - The substring to search for.
     * @returns True if the input contains the substring, false otherwise.
     */
    static containsIgnoreCase(input: string, substring: string): boolean {
        return input.toLowerCase().includes(substring.toLowerCase());
    }
  
    /**
     * Reverses the characters in a given string.
     * 
     * @param str - The input string to reverse.
     * @returns The reversed string.
     */
    static reverseString(str: string): string {
      return str.split('').reverse().join('');
    }
  
    /**
     * Counts the number of times a given substring appears in a string.
     * 
     * @param str - The main string to search within.
     * @param substring - The substring to count occurrences of.
     * @returns The number of times the substring appears in the main string.
     */
    static countOccurrences(str: string, substring: string): number {
      return str.split(substring).length - 1;
    }
  
    /**
     * Removes special characters from a string, keeping only alphanumeric characters and spaces.
     * 
     * @param str - The input string to sanitize.
     * @returns A string containing only letters, numbers, and spaces.
     */
    static removeSpecialCharacters(str: string): string {
      return str.replace(/[^a-zA-Z0-9 ]/g, '');
    }
  
    /**
     * Pads a string with a specified character until it reaches the desired length.
     * 
     * @param str - The input string to pad.
     * @param length - The desired total length of the final string.
     * @param char - The character used for padding (default is a space).
     * @returns The padded string.
     */
    static padString(str: string, length: number, char: string = ' '): string {
      return str.padEnd(length, char);
    }
  
    /**
     * Converts a string to title case, capitalizing the first letter of each word.
     * 
     * @param str - The input string to format.
     * @returns The title-cased string.
     */
    static toTitleCase(str: string): string {
      return str
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  
    /**
     * Masks a portion of a string by replacing characters within a specified range with a masking character.
     * 
     * @param str - The original string to mask.
     * @param start - The starting index of the section to mask.
     * @param end - The ending index of the section to mask.
     * @param maskChar - The character used for masking (default is '*').
     * @returns The masked string.
     * 
     * @example
     * maskString("1234567890", 2, 6) // "12****7890"
     */
    static maskString(str: string, start: number, end: number, maskChar: string = '*'): string {
      if (start >= end || start < 0 || end > str.length) return str;
      const maskedPart = maskChar.repeat(end - start);
      return str.substring(0, start) + maskedPart + str.substring(end);
    }
  
    /**
     * Encodes a string into a URL-safe format using percent-encoding.
     * 
     * @param str - The input string to encode.
     * @returns The URL-encoded string.
     */
    static toUrlSafe(str: string): string {
      return encodeURIComponent(str);
    }
  
    /**
     * Removes all HTML tags from a given string, leaving only plain text.
     * 
     * @param html - The input string containing HTML.
     * @returns The string with all HTML tags removed.
     */
    static stripHtmlTags(html: string): string {
      return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
  
}
