"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    console.log(add(11, 44));
    console.log(add(11, "44"));
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    const normalUser = {
        name: "Mr. Normal Bhai",
    };
    const adminUser = {
        name: "Mr. Admin Bhai",
        role: "admin",
    };
    getUser(normalUser);
    getUser(adminUser);
}
