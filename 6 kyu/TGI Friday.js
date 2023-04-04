/**
We all love fridays, and even better if it is the last day of the month!

In this kata you should write a function that will receive 2 parameters. 
Both are years, and indicates a range.

Your work is to return the number of times a month ends with a Friday.

If there is only one year provided, return the number of times a month ends on Friday on that year. 
Range bounds are inclusive in every case!

For example, between 1901 and 2000, a month ends on Friday 171 times.
 */

const lastDayIsFriday = (initialYear, endYear = initialYear) => {
	let count = 0;

	for(let i = initialYear; i <= endYear; i++){
		for(let j = 0; j <= 11; j++){
			if(new Date(i, j, getLastDayInMonth(i, j)).getDay() == 5){
				count++;
			}
		}
	}

	return count;
}

const getLastDayInMonth = (year, month) => new Date(year, month + 1, 0).getDate();


console.log(lastDayIsFriday(1901, 2000));
console.log(lastDayIsFriday(1901, 2017));
console.log(lastDayIsFriday(1991));
console.log(lastDayIsFriday(2017));