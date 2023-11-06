{
  type Something = { something: string };

  // simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };

  const res = showData();
  console.log(res);

  type ToDo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<ToDo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res.json();

    console.log(data);
    return data;
  };

  const res2 = getToDo();
  console.log({ res2 });
}
