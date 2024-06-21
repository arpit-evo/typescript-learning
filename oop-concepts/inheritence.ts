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

const student = new Student("id1","mosh","ahuja") 
student.walk();
console.log(student);

// override method

class Teacher extends Person {
 override get fullName():string{
  return "Professor" + " " + super.fullName
 }
}

const teacher = new Teacher("will","smith")
console.log(teacher.fullName);


// polymorphism

printNames([
  new Student("1", "will", "smith"),
  new Teacher("joey", "Tribbiani"),
]);

function printNames(people: Person[]){
  for (const person of people) {
    console.log(person.fullName);
  }
}