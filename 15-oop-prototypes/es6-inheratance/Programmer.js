
const Person = require('./Person');

class Programmer extends Person {
  constructor(fullname, age, companyName) {
    super(fullname, age); // this invokes parent class constructor - must be the first statement
    this.companyName = companyName;
  }
  code(language) {
    console.log(`Programmer codes in ${language}.`);
  }
}