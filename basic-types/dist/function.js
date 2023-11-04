"use strict";
{
    function add(num1, num2, num3 = 10) {
        return num1 + num2 + num3;
    }
    console.log(add(11, 33, 15));
    const add2 = (num1, num2, num3 = 10) => num1 + num2 + num3;
    console.log(add2(19, 22));
    const user = {
        name: "MD IH Alif",
        balance: 0,
        addBalance(newBalance) {
            return this.balance + newBalance;
        },
    };
    console.log(user.addBalance(11));
    const arr = [1, 3, 5, 7, 9];
    const newArray = arr.map((elem) => elem * elem);
    console.log(newArray);
}
