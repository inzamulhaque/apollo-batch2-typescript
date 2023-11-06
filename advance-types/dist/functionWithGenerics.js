"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const res1 = createArray("BD");
    const res2 = createArrayWithGenerics("Bangladesh");
    const userArray = createArrayWithGenerics({
        id: 111,
        name: "Alif",
        email: "alif@gmail.com",
    });
    console.log({ res1, res2, userArray });
    const createArrayWithGenericsAndTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res3 = createArrayWithGenericsAndTuple("Admin", true);
    console.log(res3);
    const addCourseToStudent = (student) => {
        const course = "Apollo Level 2 Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const addCourseToStudent2 = (student) => {
        const course = "Apollo Level 2 Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 111,
        name: "Alif",
        email: "alif@email.com",
    });
    const student2 = addCourseToStudent2({
        id: 333,
        name: "Mr. X",
    });
    console.log({ student1, student2 });
}
