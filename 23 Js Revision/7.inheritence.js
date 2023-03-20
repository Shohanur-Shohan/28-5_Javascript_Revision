class Parent{
    constructor(){
        this.fName = 'shohan';
    }
}
class Child extends Parent{
    constructor(cName, cAge){
        super();
        this.name = cName;
        this.age = cAge;
    }
    fullName(){
        return this.name + " " + this.fName;
    }
}
const baby = new Child('tanim', 20)
const baby2 = new Child('tuhin', 20)
console.log(baby, baby2.fullName());