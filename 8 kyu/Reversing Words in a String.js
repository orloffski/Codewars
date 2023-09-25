/**
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

Happy codin
 */

const reverse = string => string.split(" ").reverse().join(" ");

console.log(reverse("Hello World"));
console.log(reverse("Hi There."));
console.log(reverse("I am an expert at this"));
console.log(reverse("This is so easy"));
console.log(reverse("no one cares"));
console.log(reverse(""));
console.log(reverse("CodeWars"));