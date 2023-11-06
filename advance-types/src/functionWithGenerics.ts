{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("BD");
  const res2 = createArrayWithGenerics<string>("Bangladesh");

  interface User {
    id: number;
    name: string;
    email?: string;
  }

  const userArray = createArrayWithGenerics<User>({
    id: 111,
    name: "Alif",
    email: "alif@gmail.com",
  });

  console.log({ res1, res2, userArray });

  const createArrayWithGenericsAndTuple = <T, X>(
    param1: T,
    param2: X
  ): [T, X] => {
    return [param1, param2];
  };

  const res3 = createArrayWithGenericsAndTuple<string, boolean>("Admin", true);

  console.log(res3);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Apollo Level 2 Web Development";
    return {
      ...student,
      course,
    };
  };

  const addCourseToStudent2 = <T>(student: T): T & { course: string } => {
    const course = "Apollo Level 2 Web Development";
    return {
      ...student,
      course,
    };
  };

  interface Student {
    id: number;
    name: string;
    email?: string;
  }

  const student1 = addCourseToStudent<Student>({
    id: 111,
    name: "Alif",
    email: "alif@email.com",
  });

  const student2 = addCourseToStudent2<Student>({
    id: 333,
    name: "Mr. X",
  });

  console.log({ student1, student2 });
}
