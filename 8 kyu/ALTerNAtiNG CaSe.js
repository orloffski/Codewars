/**
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter 
becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.
 */

String.prototype.toAlternatingCase = function () {
    let inUpperCase = this.toUpperCase();
    let result = '';

    for(let i = 0; i < this.length; i++){
        if(this[i].charAt(0).match(/[a-zA-Z]/)){
            if(this[i] == inUpperCase[i]){
                result += this[i].toLowerCase();
            }else{
                result += this[i].toUpperCase();
            }
        }else{
            result += this[i];
        }
    }

    return result;
}

console.log("hello world".toAlternatingCase());
console.log("HELLO WORLD".toAlternatingCase());
console.log("hello WORLD".toAlternatingCase());
console.log("HeLLo WoRLD".toAlternatingCase());
console.log("12345".toAlternatingCase());
console.log("1a2b3c4d5e".toAlternatingCase());
console.log("String.prototype.toAlternatingCase".toAlternatingCase());
console.log("Hello World".toAlternatingCase().toAlternatingCase());