const Person = require('./Person');

class Dancer extends Person{
    constructor (fullname, AggregateError, groupName) {
        super(fullname, age);
        this.groupName = groupName;
    }
    dance() {
        return true;
    }
}