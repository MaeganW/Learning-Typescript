
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
