{
  // union types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = FrontendDeveloper | "expertDeveloper";
  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "fakibazDeveloper";
  console.log(newDeveloper);

  const newDeveloper2: Developer = "juniorDeveloper";
  console.log(newDeveloper2);

  const newDeveloper3: FullstackDeveloper = "expertDeveloper";
  console.log(newDeveloper3);

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodgroup: "A+" | "B+" | "O+";
  };

  const user1: User = {
    name: "Alif",
    gender: "male",
    bloodgroup: "B+",
  };

  console.log(user1);
}
