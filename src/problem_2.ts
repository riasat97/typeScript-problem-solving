interface IPerson {
    name: string;
    age: number
}
const problem2 = (persons: IPerson[]): IPerson[] => {
    const adult = persons.filter(person => person.age >= 18)
    return adult;
}
const people:IPerson[] = [
    { name: "John", age: 25 },
    { name: "Mary", age: 18 },
    { name: "Tom", age: 15 }
];
console.log(problem2(people));
