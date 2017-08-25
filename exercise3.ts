class Car2 {
    name: string;
    public acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }
 
    honk(): void {
        console.log("Toooooooooot!");
    };
 
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
const newCar = new Car2("BMW");
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(10);
console.log(newCar.acceleration);
newCar.accelerate(50);
console.log(newCar.acceleration);
newCar.accelerate(5);
console.log(newCar.acceleration);

console.log(('............................'));
 
// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width: number = 5;
    length: number = 5;

    calcSize(width?: number, length?: number): number {
        return this.width * this.length;
    }
};
const rectangle = new BaseObject();
console.log(rectangle.calcSize());
rectangle.width = 22;
rectangle.length = 15;
console.log(rectangle.calcSize());
// console.log(rectangle.calcSize(3, 3));

console.log(('............................'));
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    _firstName: string = "Lily";

    get firstName(){
        return this._firstName;
    }

    set firstName(x: string) {
        if (x.length > 3){
            this._firstName = x;
        } else {
            this._firstName = "Lily"
        }
    }
    enumerable: true;
    configurable: true;
};
const Maegan = new Person();
console.log(Maegan.firstName);
Maegan.firstName = "Ma";
console.log(Maegan.firstName);
Maegan.firstName = "Maegan";
console.log(Maegan.firstName);