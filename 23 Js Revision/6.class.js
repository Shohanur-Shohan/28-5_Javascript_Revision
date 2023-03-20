// class Student{
//     constructor(){
//         this.id = 5;
//         this.name = 'shohan'
//     }
// }
// const student = new Student();
// const student2 = new Student();
// const student3 = new Student();
// console.log(student, student2, student3);


class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'SSAC';
    }
}
const student = new Student(1, 'shohan');
const student2 = new Student(2, 'tuhin');
const student3 = new Student(3, 'tanim');
console.log(student, student2, student3);

console.log(student.id, student2.name, student3.school);  //]
