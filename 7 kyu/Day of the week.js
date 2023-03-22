/**
Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"

Have fun!
 */

function dayOfTheWeek(date) {
	console.log(new Date(date.split('/')[2], date.split('/')[1] - 1, date.split('/')[0] + 1));
	console.log(date.getDay());
	console.log(date.split('/')[2]);
	console.log(date.split('/')[1]);
	console.log(date.split('/')[0]);
	switch((new Date(date.split('/')[2], date.split('/')[1], date.split('/')[0])).getDay()){
		case 0: 
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
	}
}

console.log(dayOfTheWeek('02/06/1940'));