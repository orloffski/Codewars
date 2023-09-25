/**
Given a string and an object/array you need to return a formatted string. 
Replace all occurrences in the string where the name of a key 
in the object is surrounded by curly brackets.

Inherited object properties should not be applied

An example says more than a thousand words..

Example using object

var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"

Example using array

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

format(s, a); // "Hello Jack - make me a sandwich"

 */

const format = (str, obj) => {
	let replacer = str.match(/({[a-z0-9]+})/gi);

	for (const [key, value] of Object.entries(replacer)) {
		let dataKey = value.replace('{','').replace('}','');
		if(obj[dataKey] || obj[dataKey] == 0){
			str = str.replace(value, obj[dataKey].toString().replace('{','{-').replace('}','-}'));
		}
	}

	return str.replace('{-','{').replace('-}','}');
};

console.log(format('Hello {foo} - make me a {bar}', { foo : 'Jack', bar : 'sandwich' }));
console.log(format('Hello {0} - make me a {1}', [ 'Jack', 'sandwich' ]));
console.log(format('Hello {foo} - {foobar} make me a {bar}', { foo : 'Jack', bar : 'sandwich' }));
console.log(format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', { bar : 'sandwich {foo}', foo : 'Jack' }));
console.log(format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0]));