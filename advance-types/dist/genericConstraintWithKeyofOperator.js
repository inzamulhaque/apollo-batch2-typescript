"use strict";
{
    const person1 = "car";
    const person2 = "bike";
    const getPropertyValue = (obj, key) => {
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
