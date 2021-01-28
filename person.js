
class Person{

    constructor(fname,lname,age){
        this.firstName =  fname;
        this.lastName = lname;
        this.age = age;
    }

    toString(){
        const fullName = `The Full Name is: ${this.firstName} ${this.lastName}`;
        return fullName;
    }
}

module.exports =  Person;
