let sales: number = 123_456_789;
let numbers: number[] = [1, 2, 3];

//Tuples
let user: [number, string] = [1, 'Mosh'];

//Enum
// or specify each value like this
enum Size {
  Small = 's',
  Medium = 'm',
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