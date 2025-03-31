class Customer{
    constructor(name, age, membershipType, membershipCost){
    this.name = name;
    this.age = age;
    this.membershipType = membershipType;
    this.membershipCost = membershipCost;
    }

     getDetails(){
        return  `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}.`;
        
     }

     upgradeMembership(){
        this.membershipType = 'Premium';
        this.membershipCost += (this.membershipCost * 0.20);

     }
     
}

module.exports = Customer;
