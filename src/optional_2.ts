type StringOrNumber<T> = T extends string ? string : number;

interface Person {
  name: string;
  age: StringOrNumber<any>;
}

const entity: Person = {
  name: "Riasat",
  age: '25'
};

console.log(typeof entity.age);