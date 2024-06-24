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
