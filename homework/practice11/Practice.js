const Customer = require('./Customer');
const VIPCustomer = require('./VIPCustomer');
const BusinessCustomer = require('./BusinessCustomer');

const customer1 = new Customer('John Doe' , 30, 'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

customer1.upgradeMembership();
vipCustomer.applyDiscount();
businessCustomer.extendContract();

console.log(customer1.getDetails());
console.log(vipCustomer.getDetails());
console.log(businessCustomer.getDetails());

const customers =[customer1, vipCustomer,businessCustomer];
for(const customer of customers){
    console.log(customer.getDetails())
}


