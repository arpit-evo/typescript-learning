let sales: number = 123_456_789;
let numbers: number[] = [1, 2, 3];

//Tuples
let user: [number, string] = [1, "Mosh"];

//Enum
// or specify each value like this
enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}

//Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {},
};

//Functions
function calculateTax(income: number): number {
  return income * 0.2;
}

// type aliases

type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

// union types

const kgToLbs = (weight: number | string): number => {
  //narrowing type
  if (typeof weight === "number") {
    return weight * 2;
  } else {
    return +weight * 3;
  }
};

// type intersection

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

// type literal

type Quantity = 50 | 100;

type Measurement = "cm" | "inch";

// type null
let ab: string | null = null;

// type assertions

let phone = document.getElementById("phone") as HTMLInputElement; // this is one way
let phone2 = <HTMLInputElement>document.getElementById("phone"); // this is second way

// type unknown

function render(document: unknown) {
  //narrowing
  if (typeof document === "string") {
    document.toLowerCase();
  }
  //  document.fly() // give error because it's type is unknown
}

// type never

function processEvents(): never {
  // This function never returns because
  // it has an infinite loop.
  while (true) {}
}
processEvents()
console.log("hello");
