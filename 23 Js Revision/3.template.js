const firstName = 'shohan';
const lastName = 'rahman'
const fullName = firstName + ' ' + lastName + ' is a good boy'; //old way
const fullName2 = `${firstName} ${lastName} is a good boy`; //new way

console.log(fullName);
console.log(fullName2);
// sum
const sum = `sum = ${20+30+50}`;
console.log(sum);

//multiline
const multiLine = "shohanur rahman\n" // \n old way of multiLine
    + "is a good boy";
const multiLine2 = `shohanur is a 
    bad boy.`;
console.log(multiLine);
console.log(multiLine2);