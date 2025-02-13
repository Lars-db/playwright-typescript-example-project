import * as dotenv from 'dotenv';
import * as path from 'path';

export class EnvHelper {

    /**
     * Loads environment variables based on the current environment.
     * @param {string} [envFilePath='.env'] - The path to the .env file (default is .env).
     * @param {string} [envName='development'] - The name of the environment (e.g., 'development', 'test', 'acceptance').
     * @returns {void}
     */
    public static loadEnvVariables(envName: string = 'dev'): void {
        try {
            const envFile = `${envName}.env`;
            const resolvedPath = path.resolve(envFile);
            dotenv.config({ path: resolvedPath });
            console.log(`Environment variables loaded from: ${resolvedPath}`);
        } catch (error) {
            console.error('Error loading environment variables:', error);
            throw error;
        }
    }

    /**
     * Retrieves an environment variable value, throwing an error if it is not found.
     * @param {string} key - The name of the environment variable.
     * @returns {string} - The value of the environment variable.
     */
    public static getEnvVariable(key: string): string {
        const value = process.env[key];
        if (!value) {
            console.error(`Error: Environment variable ${key} is not set.`);
            throw new Error(`Environment variable ${key} is not set.`);
        }
        return value;
    }

    /**
     * Retrieves an environment variable value and returns a fallback value if it is not found.
     * @param {string} key - The name of the environment variable.
     * @param {string} fallback - The fallback value if the variable is not found.
     * @returns {string} - The value of the environment variable or the fallback.
     */
    public static getEnvVariableWithFallback(key: string, fallback: string): string {
        const value = process.env[key];
        if (value) {
            return value;
        } else {
            console.warn(`Warning: Environment variable ${key} is not set. Using fallback: ${fallback}`);
            return fallback;
        }
    }

    /**
     * Validates that the required environment variables are set for the current environment.
     * @param {string[]} requiredKeys - An array of environment variable keys that must be set.
     * @returns {void}
     */
    public static validateEnvVariablesAreSet(requiredKeys: string[]): void {
        requiredKeys.forEach((key) => {
            const value = process.env[key];
            if (!value) {
                console.error(`Error: Required environment variable ${key} is missing.`);
                throw new Error(`Required environment variable ${key} is missing.`);
            }
        });
        console.log('All required environment variables are set.');
    }

    /**
     * Sets a new environment variable value.
     * @param {string} key - The name of the environment variable.
     * @param {string} value - The value of the environment variable.
     * @returns {void}
     */
    public static setEnvVariable(key: string, value: string): void {
        process.env[key] = value;
        console.log(`Environment variable ${key} set to: ${value}`);
    }

    /**
     * Checks if an environment variable exists.
     * @param {string} key - The name of the environment variable.
     * @returns {boolean} - True if the environment variable exists, false otherwise.
     */
    public static envVariableExists(key: string): boolean {
        return process.env[key] !== undefined;
    }

    /**
     * Removes an environment variable from the current process.
     * @param {string} key - The name of the environment variable.
     * @returns {void}
     */
    public static deleteEnvVariable(key: string): void {
        if (process.env[key]) {
            delete process.env[key];
            console.log(`Environment variable ${key} removed.`);
        } else {
            console.warn(`Environment variable ${key} is not set.`);
        }
    }

    /**
     * Gets all environment variables as a key-value object.
     * @returns {Record<string, string>} - An object containing all environment variables.
     */
    public static getAllEnv(): Record<string, string> {
        return process.env;
    }
}
