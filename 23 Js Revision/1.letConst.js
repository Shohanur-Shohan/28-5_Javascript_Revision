const name = 'shohan';
console.log(name);

const friends = [ 12, 34, 56, 74, 'shohan' ];
console.log(friends);

friends.pop();  //remove last element
console.log('pop ' + friends);

friends.push(45);  //add one element
console.log('push ' + friends);

friends.splice(1, 1); //removed one element
console.log(friends);

//add element anywhere
friends.splice(3, 0, 60, 77); //position, remove, add ele, add ele
console.log(friends);


// LET Start
let patient = 'shohan';
patient = 'tuhin';
console.log(patient);

let sum = 0;
for(let i = 0; i < 10; i++){  //let cant be access outside
    sum = sum + i;
}
// console.log(i);