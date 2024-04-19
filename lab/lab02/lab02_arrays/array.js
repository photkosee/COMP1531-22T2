// Phot Koseekrainiramon (z5387411)
// on 10/06/2022

/**
 * Compute the sum of the integer array.
 * If the array is empty, the sum is 0.
 *
 * @param {Array<number>} array of integers
 * @returns {number} the sum of the array
 */
function arraySum(array) {
    let number = 0;
    for (const element of array) {
        number += element;
    }
    return number;
}

/**
 * Compute the product of the given integer array.
 * If the array is empty, the product is 1.
 *
 * @param {Array<number>} array of integers
 * @returns {number} the product of the array
 */
function arrayProduct(array) {
    let number = 1;
    for (const element of array) {
        number *= element;
    }
    return number;
}

/**
 * Find the smallest number in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the smallest number in the array, or
 * null if the array is empty
 */
function arrayMin(array) {
    if (array.length === 0) {
        return null;
    }
    let number = array[0];
    for (const element of array) {
        if (element < number) {
            number = element;
        }
    }
    return number;
}

/**
 * Find the largest number in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the largest number in the array, or
 * null if the array is empty
 */
function arrayMax(array) {
    if (array.length === 0) {
        return null;
    }
    let number = array[0];
    for (const element of array) {
        if (element > number) {
            number = element;
        }
    }
    return number;
}

/**
 * Determine if the array contains a particular element.
 *
 * @param {Array<number>} array of integers
 * @param {number} item integer to check
 * @returns {boolean} whether the integer item is in the given array
 */
function arrayContains(array, item) {
    for (const element of array) {
        if (element === item) {
            return true;
        }
    }
    return false;
}

/**
 * Create an array that is the reserved of the original.
 *
 * WARNING: a reminder that the original(s) array must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array of integers
 * @returns {Array<number>} a new reversed array
 */
function arrayReversed(array) {
    const new_array = [];
    for (let i = array.length - 1; i >= 0; i--) {
        new_array.push(array[i]);
    }
    return new_array;
}

/**
 * Returns the first element in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the first element in the array,
 * or null if the array is empty
 */
function arrayHead(array) {
    if (array.length === 0) {
        return null;
    }
    let number = array[0];
    return number;
}

/**
 * Return all elements in the array after the head.
 *
 * WARNING: a reminder that the original(s) array must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array of integers
 * @returns {Array<number>} an array of elements excluding the head,
 * or null array is empty
 */
function arrayTail(array) {
    if (array.length === 0 || array.length === 1) {
        return null;
    }
    const new_array = [];
    for (let i = 1; i < array.length; i++) {
        new_array.push(array[i]);
    }
    return new_array;
}

/**
 * Given two arrays, multiply the elements at each index from arrays and store
 * the result in a third array. If the given two arrays differ in length,
 * excess elements of the larger array will be added on at the end.
 *
 * For example,
 *     [1, 3, 2]
 *   x [2, 4, 3, 5, 9]
 *   -----------------
 *   = [2, 12, 6, 5, 9]
 *
 * The result will be the same if array1 and array2 are swapped.
 *
 * @param {Array<number>} array1 of integers
 * @param {Array<number>} array2 of integers
 * @returns {Array<number>} array1 x array2 at each index
 */
function arraysMultiply(array1, array2) {
    const new_array = [];
    let j = 0;
    if (array1.length <= array2.length) {
        for (const element of array1) {
            new_array.push(element*array2[j])
            j++;
        }
        for (let i = j; i < array2.length; i++) {
            new_array.push(array2[i])
        }
    } else {
        for (const element of array2) {
            new_array.push(element*array1[j])
            j++;
        }
        for (let i = j; i < array1.length; i++) {
            new_array.push(array1[i])
        }
    }
    return new_array;
}

/**
 * Create a third array containing common elements between two arrays.
 *
 * Each element in the first array can map to at most one element
 * in the second array. Duplicated elements in each array are
 * treated as separate entities.
 *
 * The order is determined by the first array.
 *
 * A few examples,
 *   arraysCommon([1,1], [1,1,1]) gives [1,1]
 *   arraysCommon([1,1,1], [1,1]) gives [1,1]
 *   arraysCommon([1,2,3,2,1], [5,4,3,2,1]) gives [1,2,3]
 *   arraysCommon([1,2,3,2,1], [2,2,3,3,4]) gives [2,3,2]
 *   arraysCommon([1,4,1,1,5,9,2,7], [1,8,2,5,1]) gives [1,1,5,2]
 *
 * WARNING: a reminder that the original array(s) must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array1 of integers
 * @param {Array<number>} array2 of integers
 * @returns {Array<number>} number of common elements between two arrays
 */
function arraysCommon(array1, array2) {
    const new_array = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                new_array.push(array1[i]);
                array2.splice(j, 1);
                j += array2.length + 1
            }
        }
    }
    return new_array;
}

// ========================================================================= //

/**
 * Some test code
 */

console.assert(arraySum([1, 2, 3, 4]) === 10, 'arraySum([1,2,3,4]) === 10');
console.assert(arrayProduct([1, 2, 3, 4]) === 24, 'arrayProduct([1,2,3,4]) === 24');

/**
 * NOTE: you can't directly compare two arrays with `===`, so you may need
 * to come up with your own way of testing arrays this week. For example, you
 * could use console.log() and observe the output manually.
 */
console.log();
console.log('Testing : arrayCommon([1,2,3,2,1], [2,2,3,3,4])');
console.log('Received:', arraysCommon([1, 2, 3, 2, 1], [2, 2, 3, 3, 4]));
console.log('Expected: [ 2, 3, 2 ]');
console.log();

console.assert(arrayMin([2, 1, 3, 4]) === 1, 'arrayMin([2,1,3,4]) === 1');
console.assert(arrayMin([]) === null, 'arrayMin([]) === null');
console.assert(arrayMax([1, 2, 4, 3]) === 4, 'arrayMax([1,2,4,3]) === 4');
console.assert(arrayContains([1, 2, 4, 3], 3) === true, 'arrayMax([1,2,4,3], 3) === true');
console.assert(arrayContains([1, 2, 4, 3], 0) === false, 'arrayMax([1,2,4,3], 0) === false');
console.log('Testing : arrayReversed([1,2,4,3]) === [3,4,2,1])');
console.log('Received:', arrayReversed([1, 2, 4, 3]));
console.log('Expected: [ 3, 4, 2, 1 ]');
console.log();
console.assert(arrayHead([2, 1, 3, 4]) === 2, 'arrayHead([2,1,3,4]) === 2');
console.assert(arrayHead([]) === null, 'arrayHead([]) === null');
console.log('Testing : arrayTail([1,2,4,3]) === [2,4,3])');
console.log('Received:', arrayTail([1, 2, 4, 3]));
console.log('Expected: [ 2, 4, 3 ]');
console.log();
console.assert(arrayTail([]) === null, 'arrayTail([]) === null');
console.assert(arrayTail([7]) === null, 'arrayTail([7]) === null');
console.log('Testing : arraysMultiply([1,2,4,3], []) === [1,2,4,3])');
console.log('Received:', arraysMultiply([1, 2, 4, 3], []));
console.log('Expected: [ 1, 2, 4, 3 ]');
console.log();
console.log('Testing : arraysMultiply([], [1,2,4,3]) === [1,2,4,3])');
console.log('Received:', arraysMultiply([], [1, 2, 4, 3]));
console.log('Expected: [ 1, 2, 4, 3 ]');
console.log();
console.log('Testing : arraysMultiply([1,3,2], [2,4,3,5,9]) === [2,12,6,5,9])');
console.log('Received:', arraysMultiply([1, 3, 2], [2, 4, 3, 5, 9]));
console.log('Expected: [ 2, 12, 6, 5, 9 ]');
console.log();
console.log('Testing : arrayCommon([1,1], [1,1,1])');
console.log('Received:', arraysCommon([1,1], [1,1,1]));
console.log('Expected: [ 1, 1 ]');
console.log();
console.log('Testing : arrayCommon([1,1,1], [1,1])');
console.log('Received:', arraysCommon([1,1,1], [1,1]));
console.log('Expected: [ 1, 1 ]');
console.log();
console.log('Testing : arrayCommon([1,2,3,2,1], [5,4,3,2,1])');
console.log('Received:', arraysCommon([1,2,3,2,1], [5,4,3,2,1]));
console.log('Expected: [ 1, 2, 3 ]');
console.log();
console.log('Testing : arrayCommon([1,4,1,1,5,9,2,7], [1,8,2,5,1])');
console.log('Received:', arraysCommon([1,4,1,1,5,9,2,7], [1,8,2,5,1]));
console.log('Expected: [ 1, 1, 5, 2 ]');
console.log();
