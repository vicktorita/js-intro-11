const Customer = require('./Customer');
class BusinessCostumer extends Customer{

    constructor(name, age, membershipType, membershipCost, duration){
        super(name, age, membershipType, membershipCost);
        this.duration = duration;
    }

    extendContract(){
        this.duration += 1;
        this.membershipCost -= (this.membershipCost * 0.15);

    }
}
module.exports = BusinessCostumer;