// Phot Koseekriniramon (z5387411)
// COMP1531 lab03
// on 19/06/2022

import promptSync from 'prompt-sync';
import { getEaster, getChristmas, getValentinesDay } from 'date-fns-holiday-us';
import { format } from 'date-fns';

/**
 * Given a starting year and an ending year:
 * - If `start` is not at least 325, return an empty array.
 * - If `start` is strictly greater than `end`, return an empty array.
 * - Otherwise, return an object containing information about the valentine,
 * easter and christmas date strings in the given (inclusive) range.
 *
 * An example format for christmas in 1970 is
 * - Friday, 25.12.1970
 *
 * @param {number} start - starting year, inclusive
 * @param {number} end - ending year, inclusive
 * @returns {Array<{valentinesDay: number, easter: number, christmas: number}>}
 */
export function holidaysInRange(start, end) {
  const holiday = [];
  if (start > end || start < 325) {
    return holiday;
  }
  for (let i = 0; i <= (end - start); i++) {
    const valentine = format(new Date(getValentinesDay(start + i)), 'EEEE, dd.MM.yyyy');
    const easter = format(new Date(getEaster(start + i)), 'EEEE, dd.MM.yyyy');
    const christmas = format(new Date(getChristmas(start + i)), 'EEEE, dd.MM.yyyy');
    holiday.push({
      valentinesDay: valentine,
      easter: easter,
      christmas: christmas
    });
  }
  
  return holiday;
}

/**
 * TODO: Implement the two lines in the "main" function below.
 * This function is imported and called in main.js
 */
export function main() {
  const prompt = promptSync();
  var start = parseInt(prompt("Enter start: ", "1970"), 10);
  var end = parseInt(prompt("Enter end: ", "1972"), 10);

  const holidays = holidaysInRange(start, end);
  console.log(holidays);
}
