"use strict";
{
    // type assertion
    let anything;
    anything = "Next Level Web Development";
    const resul1 = anything.length;
    anything = 123;
    const result2 = anything.toLocaleString();
    console.log({ resul1, result2 });
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result3 = kgToGm(1000);
    const result4 = kgToGm("1000");
    //   const result5 = kgToGm(null) as undefined;
    console.log({ result3, result4 });
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
