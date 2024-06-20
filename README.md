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
