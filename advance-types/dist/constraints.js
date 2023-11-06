"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Apollo Level 2 Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 222,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        id: 333,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });
    const student3 = addCourseToStudent({
        id: 44,
        name: "Mr. Z",
        email: "z@gmail.com",
        emni: "emni",
    });
    console.log({ student1, student2, student3 });
}
