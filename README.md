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

```bash
 npm install -g typescript
```

- compilation ts file command

```bash
tsc file.ts
# or for all files
tsc
```

- We can assign type using `:`.
  example:

```typescript
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

```typescript
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

  ```json
  "noUnusedLocals": true, /_ Enable error reporting when local variables aren't read.
  "noUnusedParameters": true, /_ Raise an error when a function parameter isn't read.
  "noImplicitReturns": true, /_ Enable error reporting for codepaths that do not explicitly return in a function.
  ```

**Type Aliases:**

- we can define type using `type` keyword and heres the code example:

```typescript
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};
```

**Union Type:**

- define using in annotation with `|` symbol.

```typescript
const kgToLbs = (weight: number | string): number => {
  //narrowing type
  if (typeof weight === "number") {
    return weight * 2;
  } else {
    return +weight * 3;
  }
};
```

**Intersection Type:**

- define using in annotation with `&` symbol here's example

```typescript
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
```

**Literal Type:**

- combination of type aliases and union and here's example

```typescript
type Quantity = 50 | 100;

type Measurement = "cm" | "inch";
```

**Nullable types:**

example:

```typescript
let name: string | null = null;
```

**Optional chaining (?.):**

- we can use this operator when some array or obj give null value or undefine and here the example:

```typescript
customer?.birthdate?.getFullYear();
customers?.[0];
log?.("message");
```

**Type Assertions:**

- we can do type assertions using two keywords `as` or `<name of type>`. here is example:

```typescript
let phone = document.getElementById("phone") as HTMLInputElement; // this is one way
let phone2 = <HTMLInputElement>document.getElementById("phone"); // this is second way
```

**Type unknown:**

example:

```typescript
function render(document: unknown) {
  //narrowing
  if (typeof document === "string") {
    document.toLowerCase();
  }
  document.fly(); // give error because it's type is unknown
}
```

**Type Never:**

example:

```typescript
function processEvents(): never {
  // This function never returns because
  // it has an infinite loop.
  while (true) {}
}
processEvents();
console.log("hello"); // this is unreachable for this detection we have to enable this in tsconfig
// "allowUnreachableCode": false /* Disable error reporting for unreachable code. */,
```

## OOP(Object oriented Programming) Concepts

### 1. Class

- we can define class using `class` keyword.
- every class has one default function called `constructor` which initialize default value for variable and methods.
  code example:

```typescript
class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  // constructor function for initialize variables for first time and it always return instance of class
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  // method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this.balance += amount;
  }
}
```

### 2. Objects

- create object using `new` keyword and class name. here's code example:

```typescript
const account = new Account(1, "arpit", 0);
account.deposit(100);
console.log(account); // log account obj  details
console.log(typeof account); // log type of account
console.log(account instanceof Account); // checking whether account is instance of that class
```

### 3. Access Control Keywords

- public: By default every property and method has this scope
- private: when declare props and methods with this then only accessible within the class
- protected: same as private but with this declared props or methods will inherit into child class.

example:

```typescript
class Account {
  readonly id: number; // with this key word this property is readable not modified
  owner: string;
  private _balance: number;
  nickname?: string;

  // constructor function using parameter properties and access modifiers
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  // method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this._balance += amount;
  }
}

const account = new Account(1, "arpit", 0);
account._balance; // this will cause error because it's private
```

### 4. Getter and Setter

- in the class we can get any private prop value using this method and keyword for this `get`.
- setter is used for validating value or we have to set value of props.

example:

```typescript
class Account {
  // here comes necessary props, constructor and methods

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) {
      throw new Error("");
    }
    this._balance = value;
  }
}

// create object
const account = new Account(1, "arpit", 10);
console.log(account.balance); // accessing getter for balance
```

### index signature

example:

```typescript
class SeatAssignment {
  // seat management like A1,A2,...
  // Mosh,ash,...
  // Index signature property
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = "mosh";
seats.A2 = "ash";
console.log(seats);
```

### 5. Static member

- declare static properties or method using `static` keyword.
- we can only access static method or property using class name.

example:

```typescript
class Ride {
  private static _activerides: number = 0;

  start() {
    Ride._activerides++;
  }
  stop() {
    Ride._activerides--;
  }

  static get activerides() {
    return Ride._activerides;
  }
}

const r1 = new Ride();
r1.start();
const r2 = new Ride();
r2.start();

console.log(Ride.activerides);
```

### 6. Inheritance

- Inheritance means if parent has property then child also access that property
- it is more like having same property and method in one class and that same methods and all can access by child classes.
- every child class must call `super()` method in constructor to initialize parent class constructor.

syntax:

```typescript
class className extends ParentClassName {}
```

example:

```typescript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk(): void {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public stdId: string, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

const student = new Student("id1", "mosh", "wick");
student.walk();
console.log(student);
```

#### override

- we can rewrite parent method into child class which is called as method overriding.
- we can do this using `override`.

example:

```typescript
class Teacher extends Person {
  override get fullName(): string {
    return "Professor" + " " + super.fullName;
  }
}

const teacher = new Teacher("will", "smith");
console.log(teacher.fullName);
```

- for preventing overriding method without override keyword enable this setting in tsconfig.json file.

```json
 "noImplicitOverride": true, /* Ensure overriding members in derived classes are marked with an override modifier. */
```

### 7. Polymorphism

- polymorphism means same class act as multiple behavior.
- for example person class can behave as teacher and student.

```typescript
// polymorphism

printNames([
  new Student("1", "will", "smith"),
  new Teacher("joey", "Tribbiani"),
]);

// here person object for first iteration act as Student
// and for second iteration act as Teacher
function printNames(people: Person[]) {
  for (const person of people) {
    console.log(person.fullName);
  }
}
```

### 8. Abstract class

- abstract classes define using `abstract` keyword.
- abstract class means it is incomplete class because we need to extend with some other class to use abstract class methods.
- every abstract class has abstract methods and every child class of that class need to override that methods.

example:

```typescript
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering circle");
  }
}
```

### 9. Interface

- interface is used for defining shape of object.
- define interface using keyword `interface` and implements with class using `implements`.

example:

```typescript
interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
```

## Generics

- generics is like we can give custom type for same class but for diff objects of that class using this notation `<>`.

### Generic Classes

example:

```typescript
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, number>("sum", 2);
```

### Generic Function

example:

```typescript
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

const list = ArrayUtils.wrapInArray("1");

// extending generic classes

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// fix the generic type parameter
class ProductStore extends Store<Product> {}
```

#### Keyof operator

example:

```typescript
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is product
  // keyof T => "name" | "price"
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "jon", price: 1 });
store.find("name", "something");
store.find("price", 1);
store.find("some that not in object key", 1); // this will give error
```

### Generic Interface

example:

```typescript
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}
//when generic type user then data represent as User data
// and generic type product then data represent as Product data
const response = fetch<Product>("url");
// response.data?.title
```

### Generic Constraint

example:

```typescript
//  we can limit type of parameter in generic constraint
class Person1 {
  constructor(public name: string) {}
}

class Customer extends Person1 {}

function echo<T extends Person1>(value: T): T {
  return value;
}
// both valid because every parent instance and child of that  parent instance valid
echo(new Person1("some"));
echo(new Customer("something"));
```

### Type Mapping

- we can have generic type mapping using `keyof` operator and `index-signature`.

example:

```typescript
interface Product1 {
  name: string;
  price: number;
}

// type mapping is doing by keyof operator and index signature

type ReadOnly<T> = {
  // Keyof operator
  // index signature
  readonly [Property in keyof T]: T[Property];
};

let product: ReadOnly<Product1> = {
  name: "a",
  price: 1,
};

// product.name= "a" // error : Cannot assign to 'name' because it is a read-only property
```

## Decorators

- decorators is used by classes and it's attributes to change the behavior of it.
- in simple words it is function.
- we can use decorators using `@name-of-decorator`.
- and for use of decorator we have to enable one config in tsconfig file.

```json
"experimentalDecorators": true /* Enable experimental support for legacy experimental decorators. */
```

### 1. Class Decorators

example:

```typescript
// parameter of function varies for diff decorators based on it use
function Component(constructor: Function) {
  console.log("decorator is executed");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertIntoDOM = () => {
    console.log("inserting the component in the DOM.");
  };
}

@Component
class ProfileComponent {}
```

### 2. Parameterized Decorator

example:

```typescript
type ComponentOption = {
  selector: string;
};

function Component1(options: ComponentOption) {
  return (constructor: Function) => {
    console.log("decorator is executed");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertIntoDOM = () => {
      console.log("inserting the component in the DOM.");
    };
  };
}

@Component1({ selector: "#my-profile" })
class ProfileComponent1 {}
```

### 3. Multiple Decorators

example:

```typescript
function Pipe(constructor: Function) {
  console.log("Pipe decorators executed");
  constructor.prototype.pipe = true;
}

// here's order matter for calling decorators
// in this order first component1 is execute then Pipe will execute.
@Pipe
@Component1({ selector: "#my-profile" })
class ProfileComponent1 {}
```

### 4. Method Decorator

example:

```typescript
// initial takes this three parameter
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function; // take ref of original value
  descriptor.value = function (...args: any) {
    // overwrite existing say function
    console.log("before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Person3 {
  @Log
  say(message: String) {
    console.log("Person says " + message);
  }
}

const p1 = new Person3();
p1.say("blue");
```

### 5. Accessor decorators

example:

```typescript
// same as method decorator but accessing type is diff
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person4 {
  constructor(public firstname: string, public lastname: string) {}

  @Capitalize
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
let p6 = new Person4("mosh", "jon");
console.log(p6.fullname);
```

### 6. Property decorator

erxample:

```typescript
function MinLength(length: number) {
  return function (target: any, propertyName: string) {
    let value: string;
    let descriptor: PropertyDescriptor = {
      // returning value
      get() {
        return value;
      },
      // validating string
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} length should be length of ${length}`
          );
        }
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor); // set property name and value
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

const u1 = new User("123");
console.log(u1.password);
```

### 7. Parameter decorator

example:

```typescript
type WatchParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameter: WatchParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameter.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}
console.log(watchedParameter);
// this shows method name and watching parameter index here it is speed params
//[ { methodName: 'move', parameterIndex: 0 } ]
```

## Ts with Js

- we can use js with ts using this two config in tsconfig file.

```typescript
 "allowJs": true /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */,
 "checkJs": true /* Enable error reporting in type-checked JavaScript files. */,
```

### Including js code into ts

example:

```typescript
// .ts file
import tax from "./tax";

let am = tax(20);
console.log(am);

//.js file
/**
 * @param {number} amount  // this type of comment called as jsdoc declaration
 * @returns {number}
 */
export default function tax(amount) {
  return amount * 3;
}
```

#### Using declaration file type checking

- Declaration file name should be like this `filename.d.ts`.

example:

```typescript
// declare every feature that function does or other function also.
export declare function tax(amount: number): number;
```

- for all third party packages might not have type declaration file so here the repo name [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) that hold most type declaration file for packages.
- we can download package using `@types/packagename`.

example:

```bash
npm i -D @types/lodash
```
