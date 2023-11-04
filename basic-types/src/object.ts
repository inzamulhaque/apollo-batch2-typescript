const user: {
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried?: boolean;
  city: "Pabna";
  readonly religion: string
} = {
  firstName: "MD",
  middleName: "IH",
  lastName: "Alif",
  isMarried: false,
  city: "Pabna",
  religion: "Islam"
};

user.isMarried = true;
// user.religion = "islam"

console.log(user);
