/**
Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore

Length should be between 4 and 16 characters (both included).

 */

const validateUsr = username => {
	if(username.length < 4 || username.length > 16){
		return false;
	}

	return /^[a-z0-9_]+$/.test(username);
}

console.log('asddsa: ' + validateUsr('asddsa'));
console.log('a: ' + validateUsr('a'));
console.log('Hass: ' + validateUsr('Hass'));
console.log('Hasd_12assssssasasasasasaasasasasas: ' + validateUsr('Hasd_12assssssasasasasasaasasasasas'));
console.log(': ' + validateUsr(''));
console.log('____: ' + validateUsr('____'));
console.log('012: ' + validateUsr('012'));
console.log('p1pp1: ' + validateUsr('p1pp1'));
console.log('asd43 34: ' + validateUsr('asd43 34'));
console.log('asd43_34: ' + validateUsr('asd43_34'));