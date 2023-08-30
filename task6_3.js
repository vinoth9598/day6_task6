// Write a person class and hold the all details.
class person{
    constructor(name,Age,Dob,Place,Education,Gender,Email){
        this.name=name;
        this.Age=Age;
        this.Dob=Dob;
        this.Place=Place;
        this.Education=Education;
        this.Gender=Gender;
        this.Email=Email;

    }
}
let person1=new person('Sathish',25,'10-12-1998','chennai','B.E-Computer Science','Male','sathish98@gmail.com');
console.log(person1);