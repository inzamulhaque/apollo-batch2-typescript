{
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  interface UserWithRole3 extends User1 {
    role: "Admin";
  }

  const user1: User1 = {
    name: "MD IH Alif",
    age: 21,
  };

  const user2: User2 = {
    name: "MD IH Alif",
    age: 21,
  };

  const userWithRole1: UserWithRole1 = {
    name: "MD IH Alif",
    age: 21,
    role: "Admin",
  };

  const userWithRole2: UserWithRole2 = {
    name: "MD IH Alif",
    age: 21,
    role: "Admin",
  };

  const userWithRole3: UserWithRole3 = {
    name: "MD IH Alif",
    age: 21,
    role: "Admin",
  };

  console.log({ user1, user2, userWithRole1, userWithRole2, userWithRole3 });

  // js --> object , array-> object function -> object
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const roll1: Roll1 = [1, 2, 3, 4, 5];
  const roll2: Roll2 = [1, 2, 3, 4, 5];

  console.log({ roll1, roll2 });

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;

  console.log(add1(11, 22));
  console.log(add2(11, 44));
}
