/**
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

 */

const abbrevName = name => [name.split(" ")[0].split("")[0], name.split(" ")[1].split("")[0]].join(".").toUpperCase();

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("patrick feeney"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
