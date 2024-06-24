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
