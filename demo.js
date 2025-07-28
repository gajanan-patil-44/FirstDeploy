/**
 * Adds two numbers together.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // Or throw new TypeError('Both arguments must be numbers.');
    console.error('Error: Both arguments must be numbers.');
    return NaN; // Indicate an invalid numerical result
  }
  return num1 + num2;
}

// Example usage:
console.log(add(5, 3)); // 8
// console.log(add(10, -2)); // 8
console.log(add('hello', 3)); // Error: Both arguments must be numbers. NaN