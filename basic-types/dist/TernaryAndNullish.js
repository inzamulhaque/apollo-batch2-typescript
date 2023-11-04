"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 21;
    const adult = age >= 18 ? "Adult" : "Not Adult";
    const isAdult = age >= 18 ? true : false;
    console.log(adult);
    console.log(isAdult);
    //nullish coalescing operator
    // null | undefined --> decision making
    const isAuthenticate = null;
    const result1 = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "Guest";
    const result2 = isAuthenticate ? isAuthenticate : "Guest";
    console.log(result1);
    console.log(result2);
    const isAuthenticate2 = "";
    const result3 = isAuthenticate2 !== null && isAuthenticate2 !== void 0 ? isAuthenticate2 : "Guest";
    const result4 = isAuthenticate2 ? isAuthenticate2 : "Guest";
    console.log(result3);
    console.log(result4);
    const isAuthenticate3 = undefined;
    const result5 = isAuthenticate3 !== null && isAuthenticate3 !== void 0 ? isAuthenticate3 : "Guest";
    const result6 = isAuthenticate3 ? isAuthenticate3 : "Guest";
    console.log(result5);
    console.log(result6);
    const user = {
        name: "MD IH Alif",
        address: {
            city: "Pabna",
            presentaddress: "Sadhupara",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : user.address.presentaddress;
    console.log({ permanentAddress });
}
