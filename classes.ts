//====CLASSES====

class Animal {
    public animalName: string; //available everywhere
    private type: string; //available only inside class - not to children
    protected age: number = 2; //available only in children

    constructor(animalName: string, public species: string){
        this.animalName = animalName;
    }

    printAge(){
        console.log(this.age);
        this.setType('a young cub')
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const lion = new Animal('Rudy', 'lion');
console.log(lion);
console.log(lion.species, lion.animalName);
lion.printAge();
// lion.setType('awesome animal');  //won't work with private method



//====STATIC PROPERTIES AND METHODS====
class Helpers {
    static PI: number = 3.14;
    static calculateCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
// static allows you to access a property
// or a method from within a class without
// instantiating that class
console.log(2 * Helpers.PI);
console.log(Helpers.calculateCircumference(22));



//====ABSTRACT CLASSES====
// cannot be instantiated, must always be inherited (extended)
abstract class Project {
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

// let newProject = new Project();
// THE ABOVE THROWS AN ERROR AS PROJECT CANNOT BE INSTANTIATED
// THIS IS BECAUSE IT IS ABSTRACT - MUST ONLY BE EXTENDED
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Maegan Takes Over the World');
console.log(newProject);



//====GETTERS AND SETTERS====
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    //watch for this error:
    //A 'set' accessor cannot have a return type annotation.
    //this means that I tried to say
    //set species(value: string): string { func logic here...}
    //this is incorrect syntax for a setter

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }    
}

let plant = new Plant();
console.log(plant.species);  // this will grab the default
// the above console log is calling the get species method,
// but it is calling it like a property instead of a method,
// which normally would be called as console.log(plant.species());
plant.species = "XY";
console.log(plant.species); //thiis is also default
plant.species = "Maegan's Plant";
console.log(plant.species); //this will return "Maegan's Plant"


//LOOK BACK AT LESSON 64 FOR SINGLEONS AND PRIVATE CONSTRUCTORS
//LESSON 65 FOR THE READONLY PROPERTY