{
  type GenericArray<T> = Array<T>;
  type User = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    email: string;
  }

  // Generic Tuple
  type GenericTuple<X, Y> = [X, Y];

  const rollNumber: number[] = [1, 2, 3, 4, 5];
  const rollNumber2: Array<number> = [1, 2, 3, 4, 5];
  const rollNumber3: GenericArray<number> = [1, 2, 3, 4, 5];

  const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors2: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors3: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  const users: GenericArray<User> = [
    { name: "MD IH Alif", age: 21 },
    { name: "Alif", age: 21 },
  ];

  const manush: GenericTuple<string, number> = ["Mr. X", 21];
  const userWithID: GenericTuple<number, User2> = [
    1,
    { name: "Manush", email: "manush@gmail.com" },
  ];

  console.log({
    rollNumber,
    rollNumber2,
    rollNumber3,
    mentors,
    mentors2,
    mentors3,
    users,
    manush,
    userWithID,
  });
}
