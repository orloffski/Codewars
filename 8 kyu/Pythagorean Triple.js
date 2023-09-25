/**
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2
Examples

[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, 
you will never find a way to satisfy the equation a2 + b2 = c2
Return Values

    For JavaScript: return true or false

 */

const isPythagoreanTriple = ([first, second, third]) => {
    let max = Math.max(first, second, third);

    let others = [first, second, third].reduce((summ, currItem) => {
        return currItem == max ? summ : summ + currItem ** 2;
    },0)

    return others == max ** 2;
}

console.log(isPythagoreanTriple([5, 3, 4]));
console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([100, 3, 999]));
console.log(isPythagoreanTriple([3, 5, 9]));