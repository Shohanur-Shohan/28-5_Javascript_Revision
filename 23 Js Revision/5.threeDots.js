const familyAges = [ 34, 54, 22, 12, 38 ];
const friendsAges = [ 56, 67, 34, 23, 44 ];
const allAges = familyAges.concat(friendsAges).concat([10]); //old way
console.log(allAges);

const allAges2 = [ ...familyAges, 5, 7, ...friendsAges ];
console.log(allAges2);


//highest number 
const shohanAGe = 20;
const tuhinAge = 39;
const limonAge = 45;
const higestAge = Math.max(shohanAGe, limonAge, tuhinAge); //old way
console.log(higestAge);

const age = [shohanAGe, tuhinAge, limonAge];  //new way
// const higestAge2 = Math.max(age);  //dont work
// console.log(higestAge2);
const higestAge3 = Math.max(...age);   
console.log(higestAge3);

