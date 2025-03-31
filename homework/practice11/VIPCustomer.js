const Customer = require('./Customer');

class VIPCustomer extends Customer{
    constructor(name, age, membershipType, membershipCost){
        super(name, age, membershipType, membershipCost);
    }

    applyDiscount(){
        this.membershipCost  -= (this.membershipCost * 0.10);
    }

}
module.exports = VIPCustomer;