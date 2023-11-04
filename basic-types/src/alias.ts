{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "MD IH Alif",
    age: 21,
    gender: "Male",
    contactNo: "01700000000",
    address: "Pabna",
  };

  const student2: Student = {
    name: "Alif",
    age: 21,
    gender: "Male",
    address: "Pabna",
  };

  const student3: Student = {
    name: "IH",
    age: 21,
    gender: "Male",
    contactNo: "01700000000",
    address: "Pabna",
  };

  console.log(student1, student2, student3);

  type IsAdmin = boolean;
  const isadmin: IsAdmin = true;

  console.log(isadmin);

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  console.log(add(11, 22));
}
