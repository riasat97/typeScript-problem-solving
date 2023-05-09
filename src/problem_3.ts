const problem3 = <T extends string>(...params: T[]): T[] => {
    return params.reverse();
  };
  const reversedArray = problem3("Riasat", "Faria", "Amayra","XX");
  console.log(reversedArray);