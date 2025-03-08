import { APIResponse } from "@playwright/test";

export class JsonHelper {

    /**
     * Parses a JSON string into a JavaScript object.
     * @param {string} jsonString - The JSON string to parse.
     * @returns {object | null} - Returns the parsed JavaScript object or null if the JSON is invalid.
     */
    public static parseJsonToObject(jsonString: string): object | null {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            console.error("Invalid JSON string:", error);
            return null;
        }
    }

    /**
     * Converts a JavaScript object into a JSON string.
     * @param {object} jsonObject - The JavaScript object to convert.
     * @returns {string} - Returns the JSON string representation of the object.
     */
    public static convertObjectToJsonString(jsonObject: object): string {
        try {
            return JSON.stringify(jsonObject, null, 2);  // Pretty print with indentation
        } catch (error) {
            console.error("Failed to convert object to JSON string:", error);
            return "";
        }
    }

    /**
     * Checks if a given JSON string is valid.
     * @param {string} jsonString - The JSON string to validate.
     * @returns {boolean} - Returns true if the string is valid JSON, otherwise false.
     */
    public static isValidJson(jsonString: string): boolean {
        try {
            JSON.parse(jsonString);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Retrieves the value from a JSON object at a specified path.
     * @param {object} jsonObject - The JSON object to search within.
     * @param {string} path - The path to the value (dot notation, e.g., 'user.name').
     * @returns {any} - Returns the value at the specified path, or undefined if the path does not exist.
     */
    public static getValueAtPath(jsonObject: object, path: string): any {
        const pathParts = path.split('.');
        let currentValue = jsonObject;

        for (let part of pathParts) {
            if (currentValue && currentValue.hasOwnProperty(part)) {
                currentValue = currentValue[part];
            } else {
                return undefined;
            }
        }
        return currentValue;
    }

    /**
     * Sets a value in a JSON object at a specified path.
     * @param {object} jsonObject - The JSON object to modify.
     * @param {string} path - The path to the value (dot notation, e.g., 'user.name').
     * @param {any} value - The value to set at the specified path.
     * @returns {boolean} - Returns true if the value was successfully set, otherwise false.
     */
    public static setValueAtPath(jsonObject: object, path: string, value: any): boolean {
        const pathParts = path.split('.');
        let currentValue = jsonObject;

        for (let i = 0; i < pathParts.length - 1; i++) {
            const part = pathParts[i];
            if (!currentValue[part]) {
                return false;  // Path doesn't exist
            }
            currentValue = currentValue[part];
        }

        const lastPart = pathParts[pathParts.length - 1];
        if (currentValue.hasOwnProperty(lastPart)) {
            currentValue[lastPart] = value;
            return true;
        } else {
            return false;  // The last part doesn't exist in the object
        }
    }

    /**
     * Merges two JSON objects, with values from the second object overwriting values in the first.
     * @param {object} target - The target JSON object to merge into.
     * @param {object} source - The source JSON object to merge.
     * @returns {object} - Returns the merged JSON object.
     */
    public static mergeJson(target: object, source: object): object {
        return { ...target, ...source };
    }

    /**
     * Checks if a JSON object contains a specific key.
     * @param {object} jsonObject - The JSON object to check.
     * @param {string} key - The key to check for existence.
     * @returns {boolean} - Returns true if the key exists, otherwise false.
     */
    public static containsKey(jsonObject: object, key: string): boolean {
        return key in jsonObject;
    }

    /**
     * Removes a key from a JSON object.
     * @param {object} jsonObject - The JSON object to modify.
     * @param {string} key - The key to remove from the JSON object.
     * @returns {boolean} - Returns true if the key was successfully removed, otherwise false.
     */
    public static removeKey(jsonObject: object, key: string): boolean {
        if (key in jsonObject) {
            delete jsonObject[key];
            return true;
        }
        return false;
    }

    /**
     * Finds all keys in a JSON object that match a certain pattern.
     * @param {object} jsonObject - The JSON object to search.
     * @param {RegExp} pattern - The regex pattern to match keys against.
     * @returns {string[]} - Returns an array of matching keys.
     */
    public static findKeysMatchingPattern(jsonObject: object, pattern: RegExp): string[] {
        const matchingKeys: string[] = [];

        function searchKeys(obj: object, path: string) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const fullPath = path ? `${path}.${key}` : key;
                    if (pattern.test(fullPath)) {
                        matchingKeys.push(fullPath);
                    }
                    if (typeof obj[key] === 'object' && obj[key] !== null) {
                        searchKeys(obj[key], fullPath);
                    }
                }
            }
        }

        searchKeys(jsonObject, '');
        return matchingKeys;
    }

    /**
     * Validates if a JSON object adheres to a specific schema (defined as a set of required keys).
     * @param {object} jsonObject - The JSON object to validate.
     * @param {string[]} requiredKeys - An array of keys that must exist in the JSON object.
     * @returns {boolean} - Returns true if all required keys exist in the object, otherwise false.
     */
    public static validateJsonSchema(jsonObject: object, requiredKeys: string[]): boolean {
        return requiredKeys.every(key => key in jsonObject);
    }


    public static async safeJsonParse(response: APIResponse): Promise<any> {
        try {
            return await response.json();
        } catch (error) {
            throw new Error(`Response from ${response.url} was not valid JSON.`);
        }
    }
}
