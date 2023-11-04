"use strict";
{
    const searchName = (value) => {
        if (value) {
            return "Searching";
        }
        else {
            return "There is nothing to search";
        }
    };
    console.log(searchName("Alif"));
    console.log(searchName(""));
    console.log(searchName(null));
}
