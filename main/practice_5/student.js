import Person from '/person.js';
class Student extends Person {
  constructor(name, age, introduce, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return (Person.introduce() + `I am a Student. I am at Class ${this.klass}.`);
  }
}
module.exports = Student;