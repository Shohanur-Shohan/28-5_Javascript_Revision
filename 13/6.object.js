var student1  = { id: 55, name: 'shohan', phone: 83959578 };
var student2  = { id: 44, name: 'Tuhin', phone: 88499599 };

console.log(student1);

var phoneNum = student2.phone;     //method 1
var phoneNum2 = student2['phone'];  //method 2
console.log(phoneNum);
console.log(phoneNum2);

// change object value
student1.id = 33;     //method 1
console.log(student1.id);

student2['id'] = 98;  //method 2
console.log(student2.id);


// add object
student1.age = 20; 
student2.address = 'Tongi';
console.log(student1);
console.log(student2);