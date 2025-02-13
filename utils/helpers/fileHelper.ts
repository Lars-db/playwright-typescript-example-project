import * as fs from 'fs';
import * as path from 'path';

export class FileHelper {

    /**
     * Reads the contents of a file.
     * @param {string} filePath - The path to the file.
     * @returns {string | null} - Returns the file contents as a string, or null if the file doesn't exist or there's an error.
     */
    public static readFile(filePath: string): string | null {
        try {
            return fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            console.error(`Error reading file at ${filePath}:`, error);
            return null;
        }
    }

    /**
     * Writes data to a file, overwriting it if the file already exists.
     * @param {string} filePath - The path to the file.
     * @param {string} data - The data to write to the file.
     * @returns {boolean} - Returns true if the operation was successful, otherwise false.
     */
    public static writeFile(filePath: string, data: string): boolean {
        try {
            fs.writeFileSync(filePath, data, 'utf-8');
            return true;
        } catch (error) {
            console.error(`Error writing to file at ${filePath}:`, error);
            return false;
        }
    }

    /**
     * Appends data to a file.
     * @param {string} filePath - The path to the file.
     * @param {string} data - The data to append to the file.
     * @returns {boolean} - Returns true if the operation was successful, otherwise false.
     */
    public static appendToFile(filePath: string, data: string): boolean {
        try {
            fs.appendFileSync(filePath, data, 'utf-8');
            return true;
        } catch (error) {
            console.error(`Error appending to file at ${filePath}:`, error);
            return false;
        }
    }

    /**
     * Checks if a file exists at the specified path.
     * @param {string} filePath - The path to the file.
     * @returns {boolean} - Returns true if the file exists, otherwise false.
     */
    public static fileExists(filePath: string): boolean {
        try {
            return fs.existsSync(filePath);
        } catch (error) {
            console.error(`Error checking if file exists at ${filePath}:`, error);
            return false;
        }
    }

    /**
     * Deletes a file at the specified path.
     * @param {string} filePath - The path to the file.
     * @returns {boolean} - Returns true if the file was successfully deleted, otherwise false.
     */
    public static deleteFile(filePath: string): boolean {
        try {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                return true;
            } else {
                console.warn(`File at ${filePath} does not exist.`);
                return false;
            }
        } catch (error) {
            console.error(`Error deleting file at ${filePath}:`, error);
            return false;
        }
    }

    /**
     * Gets the file extension of a file.
     * @param {string} filePath - The path to the file.
     * @returns {string} - Returns the file extension (e.g., ".txt", ".json"), or an empty string if no extension is found.
     */
    public static getFileExtension(filePath: string): string {
        return path.extname(filePath);
    }

    /**
     * Creates a directory if it doesn't exist.
     * @param {string} dirPath - The path to the directory.
     * @returns {boolean} - Returns true if the directory was created or already exists, otherwise false.
     */
    public static createDirectory(dirPath: string): boolean {
        try {
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
                return true;
            }
            return true;
        } catch (error) {
            console.error(`Error creating directory at ${dirPath}:`, error);
            return false;
        }
    }

    /**
     * Writes a JavaScript object to a JSON file.
     * @param {string} filePath - The path to the JSON file.
     * @param {object} data - The data to write to the JSON file.
     * @returns {boolean} - Returns true if the operation was successful, otherwise false.
     */
    public static writeJsonFile(filePath: string, data: object): boolean {
        const jsonData = JSON.stringify(data, null, 2);
        return this.writeFile(filePath, jsonData);
    }
}
