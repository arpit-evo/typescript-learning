# Typescript-Learning

- it is built on javascript.

**Benefits:**

- Static typing
- code completion
- refactoring
- shorthand notation

**DrawBacks:**

- compilation like ts -> js which is called transpilation

## Starting course

- install typescript globally

```
 npm install -g typescript
```

- compilation ts file command

```
tsc file.ts or for all tsc
```

- We can assign type using `:`.
  example:

```
let a: number = 10;
```

- list of initial types provided by ts:

  1. number
  2. string
  3. boolean
  4. null
  5. undefined
  6. object
  7. any
  8. unknown
  9. never
  10. enum
  11. tuple

## Fundamental

- example of list of types:

```
//Annotation

let sales: number = 123_456_789;
let numbers: number[] = [1, 2, 3];

//Tuples
let user: [number, string] = [1, 'Mosh'];

//Enums
enum Size { Small = 1, Medium, Large }; // by default other values like 2 and 3

// or specify each value like this
enum Size {
  Small = 's',
  Medium = 'm'
  Large = 'l'
}

//Objects
let employee: {
 readonly id: number;
 name: string;
 retire: (date: Date) => void
} = {
 id: 1,
 name: 'Mosh',
 retire: (date: Date) => {},
};

//Functions
function calculateTax(income: number): number {
 return income * .2;
}
```

- and enable this three config in tsconfig.json

  ```
  "noUnusedLocals": true, /_ Enable error reporting when local variables aren't read.
  "noUnusedParameters": true, /_ Raise an error when a function parameter isn't read.
  "noImplicitReturns": true, /_ Enable error reporting for codepaths that do not explicitly return in a function.
  ```

**Type Aliases:**

- we can define type using `type` keyword and heres the code example:

```
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};
```

**Union Type:**

- define using in annotation with `|` symbol.

```
const kgToLbs = (weight:number | string): number=> {
  //narrowing type
  if (typeof weight === "number") {
    return weight * 2
  }else {
    return +weight * 3
  }
}
```

**Intersection Type:**

- define using in annotation with `&` symbol here's example

```
type Draggable = {
  drag: ()=> void
}

type Resizable = {
  resize: ()=> void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
```

**Literal Type:**

- combination of type aliases and union and here's example

```
type Quantity = 50 | 100 ;

type Measurement = "cm" | "inch"
```

**Nullable types:**

example:

```
let name: string | null = null;
```

**Optional chaining (?.):**

- we can use this operator when some array or obj give null value or undefine and here the example:

```
customer?.birthdate?.getFullYear();
customers?.[0];
log?.('message');
```

**Type Assertions:**

- we can do type assersion using two keywords `as` or `<name of type>`. here is example:

```
let phone = document.getElementById("phone") as HTMLInputElement; // this is one way
let phone2 = <HTMLInputElement>document.getElementById("phone"); // this is second way
```

**Type unknown:**

example:

```
function render(document:unknown) {
  //narrowing
   if (typeof document === "string") {
    document.toLowerCase()
   }
   document.fly() // give error because it's type is unknown
}
```

**Type Never:**

example:

```
function processEvents(): never {
 // This function never returns because
 // it has an infinite loop.
 while (true) {}
}
processEvents()
console.log("hello"); // this is unreachable for this detection we have to enable this in tsconfig
// "allowUnreachableCode": false /* Disable error reporting for unreachable code. */,
```
