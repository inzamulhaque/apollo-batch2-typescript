{
  // Pick --> niye asha
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  //   Omit --> bad deoya
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required --> sob gulo property required hobe
  type PersonAllRequired = Required<Person>;

  //   Partial --> Required er ulta
  type PersonAllOptional = Partial<Person>;

  //   Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };
  // person1.name = "Mr. YZ";

  // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, string>;
  type MyObj2 = Record<string, number>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  const obj2: MyObj2 = {
    a: 1,
    b: 2,
    c: 3,
  };

  const EmptyObj: Record<string, unknown> = {};

  type MyArr = Record<number, string>;

  const myArr: MyArr = ["a", "b", "c"];

  console.log({ obj1, obj2, EmptyObj, myArr });
}
