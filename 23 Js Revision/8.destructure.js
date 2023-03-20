const person = { name: 'shohan', age: 20, job: 'web development', gFname: 'Ema Watson', phone: 017464000323, friends: [ 'tuhin', 'limon', 'akib' ]  };

const gFname = person.gFname;  //method 1
const age = person.age;
console.log(age, gFname);

//method 2
const { job } = person;
console.log(job);
// method 3
const { name, friends } = person;
console.log(name, friends);

/////  array
const friend = [ 'shohan', 'tuhin', 'limon', 'akib', 'zahid' ];
const [ first, second ] = friend;
console.log(first, second);

const [ first1, second2, ...others ] = friend;  //... skips others before him
console.log(others);


//object
const complexObject = {
    name: 'shohan',
    info: {
        address: 'tongi',
        leader: 'akib'
    }
}
const { leader } = complexObject.info;  //method 1
console.log(leader);

