"use strict";
{
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours} Hours`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass} class`);
        }
    }
    const student1 = new Student("MD IH Alif", 19, "Pabna");
    student1.getSleep(8);
    const teacher1 = new Teacher("Alif", 99, "pabna", "ICT-Teacher");
    teacher1.takeClass(3);
    console.log({ student1, teacher1 });
}
