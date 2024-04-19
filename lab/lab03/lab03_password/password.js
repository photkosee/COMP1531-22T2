// Phot Koseekrainiramon (z5387411)
// on 11/06/2022

/**
 * NOTE: Tests for the checkPassword should be written first,
 * before implementing the function below.
 * @module password
 */

/**
 * Checks the strength of the given password and returns a string
 * to represent the result.
 *
 * The returned string is based on the requirements below:
 * - "Strong Password"
 *     - at least 12 characters
 *     - at least  1 number
 *     - at least  1 uppercase letter
 *     - at least  1 lowercase letter
 * - "Moderate Password"
 *     - at least  8 characters
 *     - at least  1 number
 * - "Horrible Password"
 *     - passwords that are exactly any of the top 5 (not 20) passwords
 *     from the 2021 Nordpass Ranking:
*      - https://en.wikipedia.org/wiki/List_of_the_most_common_passwords
 * - "Poor Password"
 *     - any password that is not horrible, moderate or strong.
 *
 * @param {string} password to check
 * @returns {string} string to indicate the strength of the password.
 */
export function checkPassword(password) {
  var has_lower_upper = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).+$");
  var has_number = new RegExp("(?=.*\\d).+$");
  const common_password = ['123456', '123456789', '12345', 'qwerty', 'password'];
  for (const element of common_password) {
    if (password.localeCompare(element) === 0) {
      return 'Horrible Password';
    }
  }
  if (password.length >= 12 && has_lower_upper.test(password) && has_number.test(password)) {
    return 'Strong Password';
  } else if (password.length >= 8 && has_number.test(password)) {
    return 'Moderate Password';
  } 
  return 'Poor Password';
}

/**
 * Testing will no longer be done in here.
 * See password.test.js
 */
