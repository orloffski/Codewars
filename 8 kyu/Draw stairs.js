/**
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"

or printed:

I
 I
  I

Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I


 */

const drawStairs = (n) => {
    let result = '';

    for(let i = 1; i <= n; i++){
        for(j = 1; j < i; j++){
            result += ' ';
        }

        result += 'I';

        if(i != n){
            result += '\n';
        }
    }

    return result;
}

console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(7));