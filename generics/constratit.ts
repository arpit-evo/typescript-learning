//  we can limit type of parameter in generic constraint
class Person1 {
  constructor(public name: string) {}
}

class Customer extends Person1 {}

function echo<T extends Person1>(value: T): T {
  return value;
}
// both valid because every parent instance and child of that  parent instance valid
echo(new Person1("snfjusgh"));
echo(new Customer("snfjusgh"));
