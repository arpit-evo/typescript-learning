"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(stdId, firstName, lastName) {
        super(firstName, lastName);
        this.stdId = stdId;
    }
}
const student = new Student("id1", "mosh", "ahuja");
student.walk();
console.log(student);
// override method
class Teacher extends Person {
    get fullName() {
        return "Professor" + " " + super.fullName;
    }
}
const teacher = new Teacher("will", "smith");
console.log(teacher.fullName);
// polymorphism
printNames([
    new Student("1", "will", "smith"),
    new Teacher("joey", "Tribbiani"),
]);
function printNames(people) {
    for (const person of people) {
        console.log(person.fullName);
    }
}
