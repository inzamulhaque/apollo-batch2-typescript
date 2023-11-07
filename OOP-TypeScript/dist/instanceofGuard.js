"use strict";
{
    class Animal {
        // perameter properties
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log("I am Meawing");
        }
    }
    //   const getAnimal = (animal: Animal) => {
    //     if (animal instanceof Dog) {
    //       animal.makeBark();
    //     } else if (animal instanceof Cat) {
    //       animal.makeMeaw();
    //     } else {
    //       animal.makeSound();
    //     }
    //   };
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog Shaheb", "Dog");
    const cat = new Cat("Cat Bhai", "Cat");
    getAnimal(dog);
    getAnimal(cat);
    getAnimal(new Animal("***", "***"));
    console.log(isDog(dog));
    console.log(isDog(cat));
    console.log(isCat(cat));
    console.log(isCat(dog));
    console.log({ dog, cat });
}
