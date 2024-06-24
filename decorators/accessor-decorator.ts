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
