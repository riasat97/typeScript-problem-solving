class Person{
    private _name:string;
    private _age:number;
    constructor(name:string, age:number){
        this._name= name;
        this._age= age;
    }
    public getDetails():string{
        return `Person: ${this._name}\n Age: ${this._age}`;
    }
}
class Student extends Person{
    private _grade:string;
    constructor(name:string,age:number,grade:string){
        super(name,age);
        this._grade=grade;
    }
    public getGrade():string{
        return this._grade;
    }
}
const person1= new Person('Riasat',32);
console.log(person1.getDetails());
const person2= new Student('Adib',31,'A+');
console.log(person2.getGrade());