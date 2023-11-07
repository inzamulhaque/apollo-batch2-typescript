{
  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} Hours`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} class`);
    }
  }

  const student1 = new Student("MD IH Alif", 19, "Pabna");
  student1.getSleep(8);

  const teacher1 = new Teacher("Alif", 99, "pabna", "ICT-Teacher");
  teacher1.takeClass(3)

  console.log({ student1, teacher1 });
}
