{
  // spread operator
  // rest oprator
  // destructuring

  //learn spread operatoe
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);

  console.log(bros1);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  console.log(mentorList);

  // learn rest opeartor
  const greetFriends = (...friends: string[]): void => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "kabul", "babul", "ubul", "labul");

  // learn destructuring

  const user = {
    id: 345,
    name: {
      firstName: "MD",
      middleName: "IH",
      lastName: "Alif",
    },
    contactNo: "0170000000",
    address: "Pabna",
  };

  const {
    contactNo,
    name: { middleName: midName, lastName },
  } = user;

  console.log(contactNo, midName, lastName);

  const myFriends = ["Heidoy", "Shohag", "Karia", "Ahad", "Sajjat", "Kotha"];

  const [, , vai, ...rest] = myFriends;

  console.log(vai, rest);
}
