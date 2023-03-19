var friendsAge = [12, 3, 45, 66];
console.log(friendsAge[2]);  //get array by position  

var pushVariable = friendsAge[1]; //push in another variable
console.log(pushVariable);

friendsAge[1] = 33;        //change inside of array 
console.log(friendsAge);

var position = friendsAge.indexOf(66); //find position in array
console.log(position);

friendsAge.push(22);  //push a element inside of array
friendsAge.push(25);
console.log(friendsAge);
console.log(friendsAge.length);  //use length find how many elements r in there

friendsAge.pop();  //pop removes last element
console.log(friendsAge);

friendsAge.unshift(88); //add element at first
console.log(friendsAge);

//
// Splice add delete replace element
friendsAge.splice(2, 0, 60); //add element with splice
console.log("add");
console.log(friendsAge);

friendsAge.splice(0, 1); // delete ele // 1st num is position & 2nd num is how many
console.log("remove");
console.log(friendsAge);

friendsAge.splice(2, 1, 100); // replace element
console.log("replace");
console.log(friendsAge);

friendsAge.splice(0, 0, 'shohan'); // add element
console.log("add");
console.log(friendsAge);
