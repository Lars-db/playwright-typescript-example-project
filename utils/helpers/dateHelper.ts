class DateHelper {

    /**
     * Get the current date in YYYY-MM-DD format.
     * @returns {string} - Current date in YYYY-MM-DD format.
     */
    public static getCurrentDate(): string {
      const date = new Date();
      return date.toISOString().split('T')[0];
    }
  
    /**
     * Get the current date and time in ISO string format.
     * @returns {string} - Current date and time in ISO string format (YYYY-MM-DDTHH:mm:ss.sssZ).
     */
    public static getCurrentDateTime(): string {
      return new Date().toISOString();
    }
  
    /**
     * Format a given date object into a string in the specified format.
     * @param {Date} date - The date to be formatted.
     * @param {string} format - The desired format (e.g., "YYYY-MM-DD", "MM/DD/YYYY").
     * @returns {string} - Formatted date as string.
     */
    public static formatDate(date: Date, format: string): string {
      const options: Intl.DateTimeFormatOptions = {};
      
      if (format.includes("YYYY")) options.year = "numeric";
      if (format.includes("MM")) options.month = "2-digit";
      if (format.includes("DD")) options.day = "2-digit";
      if (format.includes("HH")) options.hour = "2-digit";
      if (format.includes("mm")) options.minute = "2-digit";
      if (format.includes("ss")) options.second = "2-digit";
      
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
  
    /**
     * Add days to the current date.
     * @param {number} days - Number of days to add.
     * @returns {string} - The resulting date in YYYY-MM-DD format after adding the days.
     */
    public static addDays(days: number): string {
      const date = new Date();
      date.setDate(date.getDate() + days);
      return date.toISOString().split('T')[0];
    }
  
    /**
     * Subtract days from the current date.
     * @param {number} days - Number of days to subtract.
     * @returns {string} - The resulting date in YYYY-MM-DD format after subtracting the days.
     */
    public static subtractDays(days: number): string {
      const date = new Date();
      date.setDate(date.getDate() - days);
      return date.toISOString().split('T')[0];
    }
  
    /**
     * Compare two dates and check if they are the same (ignoring time).
     * @param {Date} date1 - First date to compare.
     * @param {Date} date2 - Second date to compare.
     * @returns {boolean} - True if the dates are the same (ignores time), otherwise false.
     */
    public static areDatesEqual(date1: Date, date2: Date): boolean {
      const date1Str = date1.toISOString().split('T')[0];
      const date2Str = date2.toISOString().split('T')[0];
      return date1Str === date2Str;
    }
  
    /**
     * Get the difference in days between two dates.
     * @param {Date} startDate - The start date.
     * @param {Date} endDate - The end date.
     * @returns {number} - The difference in days.
     */
    public static getDifferenceInDays(startDate: Date, endDate: Date): number {
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
  
    /**
     * Convert a date string (YYYY-MM-DD) to a Date object.
     * @param {string} dateString - Date in the string format YYYY-MM-DD.
     * @returns {Date} - Corresponding Date object.
     */
    public static parseDate(dateString: string): Date {
      return new Date(dateString);
    }
  
    /**
     * Get the start of the day (midnight) for a given date.
     * @param {Date} date - The date from which to get the start of the day.
     * @returns {Date} - A new Date object set to midnight of the given date.
     */
    public static getStartOfDay(date: Date): Date {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      return startOfDay;
    }
  
    /**
     * Get the end of the day (11:59 PM) for a given date.
     * @param {Date} date - The date from which to get the end of the day.
     * @returns {Date} - A new Date object set to 11:59 PM of the given date.
     */
    public static getEndOfDay(date: Date): Date {
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      return endOfDay;
    }
  
    /**
     * Check if a given date is a valid date.
     * @param {string} dateString - Date in the string format YYYY-MM-DD.
     * @returns {boolean} - True if valid date, otherwise false.
     */
    public static isValidDate(dateString: string): boolean {
      const date = new Date(dateString);
      return !isNaN(date.getTime());
    }

    /**
     * Check if a given date is a business date.
     * @param {string} dateString - Date in the string format YYYY-MM-DD.
     * @returns {boolean} - True if valid business date, otherwise false.
     */
    public static isBusinessDay(date: Date): boolean {
        const dayOfWeek = date.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        
        // Return true if it's Monday (1) to Friday (5), false for weekends
        return dayOfWeek >= 1 && dayOfWeek <= 5;
    }
  }