/**
You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. 
Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

There should be no space between the minus "-" sign and the digit after it.
 */

const isValidCoordinates = coordinates => {
    let arr = coordinates.split(', ');

    if(/^[-]?[0-9]*[.]?[0-9]*$/.test(arr[0].trim()) &&
        /^[-]?[0-9]*[.]?[0-9]*$/.test(arr[1].trim()) &&
        parseFloat(arr[0].trim()) >= -90 && 
        parseFloat(arr[0].trim()) <= 90 &&
        parseFloat(arr[1].trim()) >= -180 &&
        parseFloat(arr[1].trim()) <= 180){
        return true;
    }else{
        return false;
    }
}

console.log(isValidCoordinates("-23, 25"));
console.log(isValidCoordinates("24.53525235, 23.45235"));
console.log(isValidCoordinates("04, -23.234235"));
console.log(isValidCoordinates("43.91343345, 143"));
console.log(isValidCoordinates("4, -3")); 

console.log("--------------------------");

console.log(isValidCoordinates("23.234, - 23.4234"));
console.log(isValidCoordinates("2342.43536, 34.324236"));
console.log(isValidCoordinates("N23.43345, E32.6457"));
console.log(isValidCoordinates("99.234, 12.324"));
console.log(isValidCoordinates("6.325624, 43.34345.345"));
console.log(isValidCoordinates("0, 1,2"));
console.log(isValidCoordinates("0.342q0832, 1.2324"));