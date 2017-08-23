"use strict";
//assign types
var hello = "hello";
hello = "howdy";
console.log(typeof hello);
//arr
var arr = ["hello", "goodbye"];
var newArr = arr.concat([1, 2, 3]);
//tuple
var address = ["Sylena", 200];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Purple"] = 99] = "Purple";
    Color[Color["Blue"] = 100] = "Blue";
})(Color || (Color = {}));
var thiscolor = Color.Red;
console.log(thiscolor);
//returns 0
var seccolor = Color.Purple;
console.log(seccolor);
//returns 99
var thirdcolor = Color.Purple;
console.log(thirdcolor);
//returns 100
//any
var car = "bmw";
console.log(car);
car = { brand: 'bmw', series: 3 };
console.log(car);
//try to avoid using 'any' because it gives up the advantages of using types
//functions
var greet = function () {
    return hello;
};
console.log(greet());
//void = means there is nothing to be returned
var myVoid = function () {
    console.log('This returns nothing');
};
myVoid();
//argument types
var multiply = function (val1, val2) {
    return val1 * val2;
};
console.log(multiply(10, 4));
//function types - we can specify what type of functions a variable will be able to hold
var newMultiply;
// newMultiply = greet;    THIS WILL ERROR
newMultiply = multiply;
console.log(newMultiply(77, 88));
//objects
var userData = {
    name: "Maegan",
    age: 26 //infers number
};
// userData = {      //THIS WILL ERROR
//     a: 'me',
//     b: 21
// }
userData = {
    age: 26,
    name: "Maegan"
};
//complex objects
var complex = {
    data: [22, 22.3, 500],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [22, 22.3, 500],
    output: function (all) {
        return this.data;
    }
};
//union types - can chain more than one type
var myAge = 22;
myAge = '23';
//check types
var a = 55;
if (typeof a == 'number') {
    console.log('a is number');
}
else if (typeof a == 'string') {
    console.log('a is a string');
}
//never type
//it's not returning nothing, like void
//it's NEVER returning anything
function neverReturns() {
    throw new Error('an error');
}
//Nullable types
//"strictNullChecks": true
//add the above to the tsconfig file to make null types strict like the rest
//undefined is special and can be reassigned as null
//others could not unless you add a union type - like string | null
var b = null;
b = 'sdfsd';
//after adding the above script, THIS ABOVE CODE WOULD THROW AN ERROR
