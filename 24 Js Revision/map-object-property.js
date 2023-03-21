const students = [
    {id: 10, name: 'shohan'},
    {id: 50, name: 'tuhin'},
    {id: 40, name: 'limon'},
    {id: 20, name: 'tanim'}
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);  //map
console.log(ids);

// filter
const student = students.filter(s => s.id>20);
console.log(student);

// find
const oldFriend2 = students.find(x => x.id>10);
console.log(oldFriend2);