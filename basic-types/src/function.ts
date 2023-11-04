{
function add(num1: number, num2: number, num3: number = 10): number {
  return num1 + num2 + num3;
}

console.log(add(11, 33, 15));

const add2 = (num1: number, num2: number, num3: number = 10): number =>
  num1 + num2 + num3;

console.log(add2(19, 22));

const user = {
  name: "MD IH Alif",
  balance: 0,
  addBalance(newBalance: number): number {
    return this.balance + newBalance;
  },
};

console.log(user.addBalance(11));

const arr: number[] = [1, 3, 5, 7, 9];

const newArray: number[] = arr.map((elem: number): number => elem * elem);

console.log(newArray);

}