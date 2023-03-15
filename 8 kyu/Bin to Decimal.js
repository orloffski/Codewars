/**
Complete the function which converts a binary number (given as a string) to a decimal number.
 */

const binToDec = bin => 
    bin.split('').reduce((summ, currItem, index) => {
        return summ += currItem * (2 ** (bin.length - index - 1));
    }, 0);

console.log(binToDec('1001001'));