/**
This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

If the input is 0 or negative value, then you should return "00:00"

Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. 
For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.
Example

If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.

Good luck! :D

 */

const timeConvert = (num) => { 
    if(num <= 0){
        return '00:00';
    }

    let hours = parseInt(num / 60);
    let minutes = num - hours * 60;
    
    let result = '';

    result += hours == 0 ? '00' : hours < 10 ? '0' + hours : hours;
    result += ':';
    result += minutes == 0 ? '00' : minutes < 10 ? '0' + minutes : minutes;

    return result;
}

console.log(timeConvert(0));
console.log(timeConvert(-6));
console.log(timeConvert(8));
console.log(timeConvert(32));
console.log(timeConvert(75));
console.log(timeConvert(63));
console.log(timeConvert(134));
console.log(timeConvert(180));
console.log(timeConvert(970));
console.log(timeConvert(565757));