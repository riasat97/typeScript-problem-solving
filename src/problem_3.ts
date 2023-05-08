const problem3 = <T extends string>(...params: T[]): T[] => {
    return params.reverse();
  };
  const stringArray = ["Riasat", "Faria", "Amayra"];
  const reversedArray = problem3<string>(...stringArray);
  console.log(reversedArray);