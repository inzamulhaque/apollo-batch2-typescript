{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 21;

  const adult: string = age >= 18 ? "Adult" : "Not Adult";
  const isAdult: boolean = age >= 18 ? true : false;
  console.log(adult);
  console.log(isAdult);

  //nullish coalescing operator

  // null | undefined --> decision making
  const isAuthenticate = null;

  const result1 = isAuthenticate ?? "Guest";
  const result2 = isAuthenticate ? isAuthenticate : "Guest";

  console.log(result1);
  console.log(result2);

  const isAuthenticate2 = "";

  const result3 = isAuthenticate2 ?? "Guest";
  const result4 = isAuthenticate2 ? isAuthenticate2 : "Guest";

  console.log(result3);
  console.log(result4);

  const isAuthenticate3 = undefined;

  const result5 = isAuthenticate3 ?? "Guest";
  const result6 = isAuthenticate3 ? isAuthenticate3 : "Guest";

  console.log(result5);
  console.log(result6);

  type User = {
    name: string;
    address: {
      city: string;
      presentaddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "MD IH Alif",
    address: {
      city: "Pabna",
      presentaddress: "Sadhupara",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? user.address.presentaddress;
  console.log({ permanentAddress });
}
