// Write a class to calculate to uper price

class price{
    constructor(names,no_of_person,km){
        this.names=names;
        this.no_of_person=no_of_person;
        this.km=km;

    }
    getUperPrice(onekm=5){
        if(this.no_of_person<=1){
           return this.no_of_person*(onekm*this.km);

        }else{
            return this.no_of_person*(onekm*this.km);
        }
    }
}
let customer=new price(['vignesh','vinoth'],2,5)
console.log(customer.getUperPrice());
console.log(customer.names)

let customer1=new price(['vijay','bala','lavanya','hari'],4,15);

console.log(customer1.names);
console.log(customer1.no_of_person);
console.log(customer1.km);
console.log(customer1.getUperPrice());