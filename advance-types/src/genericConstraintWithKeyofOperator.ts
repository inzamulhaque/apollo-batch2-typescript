{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle;

  const person1: Owner = "car";
  const person2: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Alif",
    age: 21,
    address: "Pabna",
  };

  const car = {
    model: "Toyota 100",
    year: 200,
  };

  const result1 = getPropertyValue(user, "age");
  const result2 = getPropertyValue(car, "model");

  console.log({ result1, result2 });
}
