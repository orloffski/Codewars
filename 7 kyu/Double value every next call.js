/**
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)

 */

class Class {
    static number = 0;

    static getNumber = () => {
        Class.number == 0 ? Class.number = 1 : Class.number *= 2;
        return Class.number;
    }
}

console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());