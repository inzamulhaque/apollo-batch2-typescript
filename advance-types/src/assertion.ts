{
  // type assertion

  let anything: any;

  anything = "Next Level Web Development";
  const resul1 = (anything as string).length;

  anything = 123;
  const result2 = (anything as number).toLocaleString();

  console.log({ resul1, result2 });

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result3 = kgToGm(1000) as number;
  const result4 = kgToGm("1000") as string;
  //   const result5 = kgToGm(null) as undefined;

  console.log({ result3, result4 });

  type CustomError = {
    message: string;
  };

  try {
    
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
