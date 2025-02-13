import * as fs from 'fs';
import * as path from 'path';
import { parse, unparse } from 'papaparse';

export class CSVHelper {

    /**
     * Reads a CSV file and parses its content into an array of objects.
     * @param {string} filePath - The path of the CSV file.
     * @returns {Promise<any[]>} - A promise that resolves with an array of objects.
     */
    public static async readCSV(filePath: string): Promise<any[]> {
        try {
            const data = await fs.promises.readFile(filePath, 'utf-8');
            const parsedData = parse(data, {
                header: true, // Treat the first row as headers
                skipEmptyLines: true, // Skip any empty lines
                dynamicTyping: true // Automatically convert types (e.g., string -> number)
            });

            return parsedData.data; // The parsed rows will be in the 'data' property
        } catch (error) {
            console.error(`Error reading CSV file: ${filePath}`, error);
            throw error;
        }
    }

    /**
     * Writes an array of objects to a CSV file.
     * @param {string} filePath - The path where the CSV file will be written.
     * @param {any[]} data - The array of objects to be written.
     * @returns {Promise<void>}
     */
    public static async writeCSV(filePath: string, data: any[]): Promise<void> {
        try {
            const csv = unparse(data, {
                header: true, // Include headers in the output
                skipEmptyLines: true // Skip any empty lines
            });

            await fs.promises.writeFile(filePath, csv, 'utf-8');
            console.log(`CSV file written successfully at: ${filePath}`);
        } catch (error) {
            console.error(`Error writing CSV file: ${filePath}`, error);
            throw error;
        }
    }

    /**
     * Appends data to an existing CSV file.
     * @param {string} filePath - The path of the existing CSV file.
     * @param {any[]} data - The data to append.
     * @returns {Promise<void>}
     */
    public static async appendToCSV(filePath: string, data: any[]): Promise<void> {
        try {
            const csv = unparse(data, {
                header: false, // Do not include headers for appended data
                skipEmptyLines: true
            });

            await fs.promises.appendFile(filePath, csv, 'utf-8');
            console.log(`CSV data appended successfully at: ${filePath}`);
        } catch (error) {
            console.error(`Error appending CSV file: ${filePath}`, error);
            throw error;
        }
    }

    /**
     * Converts an array of objects to a CSV string without writing it to a file.
     * @param {any[]} data - The array of objects to convert.
     * @returns {string} - The CSV formatted string.
     */
    public static toCSVString(data: any[]): string {
        try {
            return unparse(data, {
                header: true, // Include headers
                skipEmptyLines: true
            });
        } catch (error) {
            console.error('Error converting to CSV string', error);
            throw error;
        }
    }

    /**
     * Converts a CSV string into an array of objects.
     * @param {string} csvString - The CSV string to parse.
     * @returns {any[]} - An array of objects parsed from the CSV string.
     */
    public static fromCSVString(csvString: string): any[] {
        try {
            const parsedData = parse(csvString, {
                header: true, // Treat the first row as headers
                skipEmptyLines: true,
                dynamicTyping: true
            });

            return parsedData.data;
        } catch (error) {
            console.error('Error parsing CSV string', error);
            throw error;
        }
    }
}
