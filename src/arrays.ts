/** Done
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/** Done
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/** Done
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num_: string): number => {
        const parsedNum = parseInt(num_);
        return isNaN(parsedNum) ? 0 : parsedNum;
    });
    return [];
}

/** Done
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number => {
        if (amount[0] === "$") {
            amount = amount.slice(1);
        }
        const parsedNum = parseInt(amount);
        return isNaN(parsedNum) ? 0 : parsedNum;
    });
};

/** Done
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messages_ = messages.filter(
        (message: string): boolean => message.endsWith("?") === false
    );
    const shout_ = messages_.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return shout_;
};

/** Done
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //console.log("Test-TEST-2 " + colors.length);
    if (colors.length === 0) {
        return true;
    }
    return colors.every((color: string): boolean =>
        ["red", "green", "blue"].includes(color)
    );
}

/** Done
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce((acc, num) => acc + num, 0);
        const sumString = addends.join("+");
        return `${sum}=${sumString}`;
    }
}

/** Done
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    const negIndex = values.findIndex((value: number): boolean => value < 0);
    if (negIndex !== -1) {
        sum = values.slice(0, negIndex).reduce((acc, curr) => acc + curr, 0);
        const values_2 = [...values];
        values_2.splice(negIndex + 1, 0, sum);
        return values_2;
    } else {
        sum = values.reduce((acc, curr) => acc + curr, 0);
        return [...values, sum];
    }
}
