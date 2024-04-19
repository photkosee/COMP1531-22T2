// Phot Koseekrainiramon (z5387411)
// on 11/06/2022

/**
 * Given an array of fast food restaurants, return a new sorted
 * array in descending order by:
 *
 *     1. customerService
 *     2. foodVariety
 *     3. valueForMoney
 *     4. timeToMake
 *     5. taste
 *     6. name (in lexicographical order, case-insensitive)
 *
 * For example, if two restaurant have the same customerService
 * and foodVariety, the one with a higher valueForMoney will be
 * in front (nearer to the start of the returned array).
 *
 * If the all other fields are equal and the name is compared,
 * "hungry Jacks" will be before "KFC" because "h" is before "K".
 *
 * WARNING: You should NOT modify the order of the original array.
 *
 * @param {
 *     Array<{
 *         name: string,
 *         customerService: number,
 *         foodVariety: number,
 *         valueForMoney: number,
 *         timeToMake: number,
 *         taste: number
 *     }>
 * } fastFoodArray with information about fast food restaurants,
 * which should not be modified.
 * @returns array with the same items, sorted by the key-order given.
 */
function sortedFastFood(fastFoodArray) {
    const new_array = [];
    for (const element of fastFoodArray) {
        new_array.push(element);
    }
    new_array.sort(byCustomerService);
    return new_array;
}

function byCustomerService(a, b) {
    if ((a.customerService - b.customerService) === 0) {
        return byFoodVariety(a, b);
    }
    return b.customerService - a.customerService;
}

function byFoodVariety(a, b) {
    if ((a.foodVariety - b.foodVariety) === 0) {
        return byValueForMoney (a, b);
    }
    return b.foodVariety - a.foodVariety;
}

function byValueForMoney(a, b) {
    if ((a.valueForMoney - b.valueForMoney) === 0) {
        return byTimeToMake (a, b);
    }
    return b.valueForMoney - a.valueForMoney; 
}

function byTimeToMake(a, b) {
    if ((a.timeToMake - b.timeToMake) === 0) {
        return byTaste (a, b);
    }
    return b.timeToMake - a.timeToMake;
}

function byTaste(a, b) {
    if ((a.taste - b.taste) === 0) {
        return byName (a, b);
    }
    return b.taste - a.taste;
}

function byName(a, b) {
    if ((a.name).toLowerCase() > (b.name).toLowerCase()) {
        return 1;
    } else if ((b.name).toLowerCase() > (a.name).toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
}

/**
 * Given an array of fast food restaurants, return a new sorted
 * array ranked by the overall satisfaction.
 *
 * The satisfaction of a restaurant is the average score between
 * customerService, foodVariety, valueForMoney, timeToMake and taste.
 *
 * You do not need to round the satisfaction value.
 *
 * If two restaurants have the same satisfaction, the names
 * are compared in lexigraphical order (case-insensitive).
 * For example, "hungry Jacks" will appear before "KFC" because
 * "h" is before "K".
 *
 * WARNING: you should NOT modify the order of the original array.
 *
 * @param {
 *     Array<{
 *         name: string,
 *         customerService: number,
 *         foodVariety: number,
 *         valueForMoney: number,
 *         timeToMake: number,
 *         taste: number
 *    }>
 * } fastFoodArray with information about fast food restaurants,
 * which should not be modified.
 * @returns {
 *     Array<{
 *         restaurantName: string,
 *         satisfaction: number,
 *     }>
 * } a new sorted array based on satisfaction. The restaurantName
 * will be the same as the original name given.
 */
function sortedSatisfaction(fastFoodArray) {
    const new_array = [];
    for (const element of fastFoodArray) {
        new_array.push(element);
    }
    new_array.sort(bySatisfaction);
    return new_array;
}

function bySatisfaction(a, b) {
    let a_satisfaction = (a.customerService + a.foodVariety + a.valueForMoney + a.timeToMake + a.taste) / 5;
    let b_satisfaction = (b.customerService + b.foodVariety + b.valueForMoney + b.timeToMake + b.taste) / 5;   
    if (a_satisfaction - b_satisfaction > 0) {
        return -1;
    } else if (a_satisfaction - b_satisfaction < 0) {
        return 1;
    } else {
        return byName(a, b);
    }
}

// ========================================================================= //

/**
 * Execute the file with:
 *     $ node satisfaction.js
 *
 * Feel free to modify the below to test your functions.
 */
const fastFoods = [
  {
    name: 'Second fastFood, third satisfaction (4.6)',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 4,
    taste: 4,
  },
  {
    // Same as above, but name starts with "f"
    // which is before "S" (case-insensitive)
    name: 'First fastFood, second satisfaction (4.6)',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 4,
    taste: 4
  },
  {
    // Worse foodVariety, but better overall
    name: 'Third fastFood, first satisfaction (4.8)',
    customerService: 5,
    foodVariety: 4,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5
  },
];

// Note: We are using console.log because arrays cannot be commpared with ===.
// There are better ways to test which we will explore in future weeks :).
console.log('========================');
console.log('1. Testing Fast Food');
console.log('===========');
console.log(sortedFastFood(fastFoods));
console.log();

console.log('========================');
console.log('2. Testing Satisfaction');
console.log('===========');
console.log(sortedSatisfaction(fastFoods));
console.log();
