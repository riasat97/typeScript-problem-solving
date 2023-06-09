# Interview Questions Answers
### **1. What is TypeScript, and how is it different from JavaScript?**
---
**Answer: Strongly typed superset of JavaScript, TypeScript compiles to plain JavaScript. It is an object-oriented, open-source programming language which extends JavaScript by including interfaces, classes, static type annotations, and other features. For large projects, TypeScript offers advantages including early error detection, code autocompletion, greater code maintainability, and scalability. Additionally, it includes its own type system that may detect type-related errors at compile time and supports the most recent ECMAScript features. Under the terms of the Apache 2 license, Microsoft creates and updates TypeScript. The browser is not used to run it directly. To compile and generate a JavaScript file, a compiler is required. The ".ts" extension designates a TypeScript source file. Any legitimate ".js" file can be used by renaming it to ".ts" file.** 

**JavaScript, in contrast, is an interpreted scripting language that runs in a server-side or browser environment. Variables can hold values of any type because it is dynamically typed, and a variable's type may change while a program runs. While this gives JavaScript a lot of flexibility, it can also result in runtime errors that are challenging to identify and debug.**

***

### **2. Can you explain the difference between "interface" and "type" in TypeScript?**
---
**Answer: Both "interface" and "type" in TypeScript allow programmers to specify the structure or shape of an object, but they differ in some ways.**

**An interface serves as a means of defining a contract or agreement between various system components. It describes an object's shape, together with its properties, methods, and their types. Interfaces can be extended, and classes or objects can implement them.**

**A type alias, or simply "type," on the other hand, is a means to define a new type by giving a name to an already-existing type or a collection of kinds. It can be used to produce complex types, such as mapping types, unions, and intersections. Since a type alias can be used to define not only objects but also functions, primitive types, and other structures, it is more flexible than an interface.**

***

### **3. Can you give an example of how to use generics in TypeScript?**
---
**Answer: Here's an example of how to use generics in TypeScript:**

```TypeScript
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

const stringArray = ["Riasat", "Faria", "Amayra"];
const reversedArray = reverse<string>(stringArray); // returns [ "Amayra","Faria","Riasat"]
const numberArray = [1, 2, 3, 4, 5];
const reversedNumberArray = reverse<number>(numberArray); // returns [5, 4, 3, 2, 1]

```

**In this example, we define the reverse function, which takes an array of any type T and returns an array of the same type T. The method is made generic by using the T placeholder as a generic type parameter, allowing it to operate on arrays of any type.**

**In order to determine the type of the array elements, we next call the reverse method with two distinct arrays (stringArray and numberArray) and pass in the relevant general type argument (string or number). The array of the same type T is returned by the reverse function.**

***

### **4. What is the difference between an "unknown" and "any" type in TypeScript?**
---
**Answer: Unknown and any are two types in TypeScript that can represent values of any type. But there are some significant variations between them:**

* Any is a type that enables you to completely avoid TypeScript's type verification mechanism. It allows you to utilize the provided values anyway you see fit by effectively disabling all type checking for them. This may be advantageous in some circumstances, but it may also result in difficult-to-debug runtime errors.

* Unknown is the type that has the most restrictions. It is intended to be used in situations where you wish to impose some level of type safety but don't know the type of a value at compile-time. Values of type unknown cannot, unlike any other values, be assigned to other types without type checking or type assertion. This implies that you must explicitly verify the value's type before using it, which can aid in the early detection of type-related errors during the development process.

**Here's an illustration of the distinction between any and unknown:**

```TypeScript
function printAnyValue(value: any) {
    console.log(value.toUpperCase()); // No error at compile-time
  }
  
  function printUnknownValue(value: unknown) {
    console.log(value.toUpperCase()); // Error at compile-time
    // error TS18046: 'value' is of type 'unknown'
    
    if (typeof value === 'string') {
      console.log(value.toUpperCase()); // No error at compile-time
    }
  }
  printAnyValue('Riasat from Any');
  printUnknownValue('Riasat from unknown')
```

**The printAnyValue function in this example attempts to invoke the toUpperCase method on a parameter of type any without first doing any type checking. If the value entered is not a number, it may result in runtime errors even if there will be no errors at the time of compilation.**

**On the other hand, the printUnknownValue function accepts an unknown type parameter and attempts to execute the toUpperCase method on it without performing any type verification. Because TypeScript cannot guarantee that the value supplied in will have a toUpperCase method, this will result in a compile-time error. The function is safer than the printAnyValue function because it does a type check to make sure the value is a string before executing the toUpperCase method.**

***

### **5. Can you give an example of how to use enums in TypeScript?**
---
**Answer: Here's another example of using enums in TypeScript for T-shirt sizes:**

```TypeScript
enum TShirtSize {
  S = "Small",
  M = "Medium",
  L = "Large",
  XL = "Extra Large"
}

function printSize(size: TShirtSize): void {
  console.log(`The T-shirt size is ${size}`);
}

printSize(TShirtSize.S); // Output: The T-shirt size is Small
printSize(TShirtSize.XL); // Output: The T-shirt size is Extra Large

```

**The enum TShirtSize in this example has four possible values: S, M, L, and XL, each with a corresponding string value. Then, a function called printSize is defined, which accepts an argument of type TShirtSize and logs a message to the console with the relevant string value. Finally, we use printSize to test the function by passing it two distinct enum values.**

***

### **6. What is the "as" keyword used for in TypeScript?**
---
**Answer: For type assertion in TypeScript, use the "as" keyword. It is a means of informing the TypeScript compiler that you are more knowledgeable than it is regarding the type of a value.**

**There are two ways to assert a type: using the "as" keyword or an angle bracket syntax. In TypeScript, the "as" keyword is favoured over other type assertion methods since it is easier to comprehend and less error-prone.**

**Here is an illustration of how to use the keyword "as" in a type assertion:**

```TypeScript
const logLength=(input: string | number):void=> {
    if (typeof input === 'string') {
      console.log(`The input-${input} length is :${(input as string).length}`);
    }
    else {
      console.log('The input is not a string.');
    }
  }
  
  logLength('Riasat'); // logs 6
  logLength(10); // The input is not a string.

```

**In this case, the function logLength accepts an input argument that can either be a string or a number and has the type string | number. Using the typeof operator in the function body, we determine whether the input type is a string. If it is, we notify TypeScript that we are certain the input is a string with the as keyword so that we may access the length property on it. We print a message stating that it's not a string if it isn't.**

***

### **7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?**
---
**Answer: To help verify the accuracy and security of the code, type guards in TypeScript provide a means to check the type of a value at runtime. To carry out these type checks, type guards such as the in and typeof operators can be utilized.**

**To determine whether a property is present in an object, use the in operator. It limits the type of the object to the type that includes the checked attribute when used in a conditional expression. For instance:**

```TypeScript

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else if ("sideLength" in shape) {
    return shape.sideLength ** 2;
  } else {
    // The shape is neither a Circle nor a Square
    throw new Error("Invalid shape");
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
console.log(getArea(circle)); // Output: 78.53981633974483

const square: Square = { kind: "square", sideLength: 4 };
console.log(getArea(square)); // Output: 16

```
**In this illustration, two interfaces—Circle and Square—represent various geometric shapes. Following that, we define a Shape type that combines these interfaces. Our getArea function, which accepts a Shape parameter and returns the shape's area.**

**To determine whether a property radius or sideLength is present in the shape object, we utilize the in operator inside the if statements. If the shape has the radius property, we can assume that it is a circle and use the formula to determine the area of a circle. We can assume that a shape is a square if the sideLength characteristic is present, and we can apply the formula to get a square's area.**

**To determine the type of a primitive value, use the typeof operator. It limits the type of the value to the type that matches the checked type when used in a conditional expression. For instance:**

```TypeScript
const logLength=(input: string | number):void=> {
    if (typeof input === 'string') {
      console.log(`The input-${input} length is :${(input as string).length}`);
    }
    else {
      console.log('The input is not a string.');
    }
  }
  
  logLength('Riasat'); // logs 6
  logLength(10); // The input is not a string.

```
**The logLength function is used here, and it accepts an argument that can either be a string or a numeric value. The typeof operator determines whether a string is the value's type. If so, the function records the string's length.**

***

### **8. Can you explain what a "tuple" is in TypeScript?**
---
**Answer: Here's is an example of a tuple in TypeScript:**

```TypeScript
let employee: [number, string, boolean];

employee = [1, 'Riasat Raihan', true];

```

**In this example, we're constructing a tuple named employee, which should include three elements: a number denoting the employee ID, a string denoting the employee's name, and a boolean indicating whether or not the employee is active at the moment.The employee variable is then given a tuple value with the ID of 1, the name Riasat Raihan, and the boolean value true. This illustration demonstrates how tuples can be used to specify a particular set of value structures for a variable.**

***

### **9. Can you give an example of how to use "readonly" properties in TypeScript?**
---
**Answer: A property of an object can be made read-only in TypeScript by using the readonly keyword. This indicates that once a property is set, it cannot be changed. Here's an illustration:**

```TypeScript
interface Person {
  readonly name: string;
  age: number;
}

let person: Person = { name: "Riasat", age: 32 };

// This line will cause a compile-time error because the 'name' property is readonly
person.name = "Raihan";

```

**In this illustration, the name and age properties on the Person interface are read-only. Because the name property of the person object is read-only, TypeScript will throw an error when we attempt to alter it. This can help to prevent the unintentional alteration of crucial code properties.**

***

### **10. Can you give an example of how to use "conditional types" in TypeScript?**
---
**Answer: Here's an illustration:**

```TypeScript
type Check<T> = T extends string ? string : number;
let x: Check<string>; // x is of type string
let y: Check<number>; // y is of type number

```

**In this illustration, a conditional type Check that accepts a generic type T is defined. The conditional type determines whether T can be assigned to a string. If so, the type of Check is set to string; if not, the type of Check is set to number.**

**Then, two variables of types Check (string and number, respectively) are defined as x and y. X is of type string since string can be assigned to string. On the other hand, y is of type number because number cannot be assigned to a string.**