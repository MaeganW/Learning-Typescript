//Learning Types

//assign types
let hello: string = "hello";
hello = "howdy"
console.log(typeof hello);

//arr
let arr: any[] = ["hello", "goodbye"]
let newArr = arr.concat([1,2,3]);

//tuple
let address: [string, number] = ["Sylena", 200];

//enum
enum Color {
    Red,
    Purple = 99,
    Blue
}
let thiscolor: Color = Color.Red;
console.log(thiscolor);
//returns 0
let seccolor: Color = Color.Purple;
console.log(seccolor);
//returns 99
let thirdcolor: Color = Color.Purple;
console.log(thirdcolor);
//returns 100

//any
let car: any = "bmw";
console.log(car);
car = {brand: 'bmw', series: 3};
console.log(car);
//try to avoid using 'any' because it gives up the advantages of using types

//functions
const greet = (): string => {
    return hello;
}
console.log(greet());

//void = means there is nothing to be returned
const myVoid = (): void => {
    console.log('This returns nothing');
}
myVoid();

//argument types
const multiply = (val1: number, val2: number): number => {
    return val1 * val2;
}
console.log(multiply(10, 4));

//function types - we can specify what type of functions a variable will be able to hold
let newMultiply: (val1: number, val2: number) => number;
// newMultiply = greet;    THIS WILL ERROR
newMultiply = multiply;
console.log(newMultiply(77, 88));

//objects
let userData: {name: string, age: number} = {
    name: "Maegan", //infers string
    age: 26 //infers number
}
// userData = {      //THIS WILL ERROR
//     a: 'me',
//     b: 21
// }
userData = {
    age: 26,
    name: "Maegan"
}

//complex objects
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [22, 22.3, 500],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

//type alias = create a 'class-like' object for a saved type
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [22, 22.3, 500],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

//union types - can chain more than one type
let myAge: number | string = 22;
myAge = '23';

//check types
let a = 55
if (typeof a == 'number') {
    console.log('a is number');
} else if (typeof a == 'string') {
    console.log('a is a string');
}

//never type
//it's not returning nothing, like void
//it's NEVER returning anything
function neverReturns(): never {
    throw new Error('an error');
}

//Nullable types
//"strictNullChecks": true
//add the above to the tsconfig file to make null types strict like the rest
//undefined is special and can be reassigned as null
//others could not unless you add a union type - like string | null
let b = null;
b = 'sdfsd';
//after adding the above script, THIS ABOVE CODE WOULD THROW AN ERROR

