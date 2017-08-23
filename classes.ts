//classes

class Animal {
    public animalName: string; //available everywhere
    private type: string; //available only inside class - not to children
    protected age: number; //available only in children

    constructor(animalName: string, public species: string){
        this.animalName = animalName;
    }
}

const lion = new Animal('Rudy', 'lion');
console.log(lion);
console.log(lion.species, lion.animalName);