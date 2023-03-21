const numbers = [ 3, 4, 5, 6, 7, 8 ];
// // const output = [];
// // for(let i = 0; i < numbers.length; i++){
// //     const element = numbers[i];
// //     const double = element * element;
// //     output.push(double);
// // }
// console.log(output);

// map
function square(element){
    return element * element;   
}
// numbers.map(square);
// const square = element => element * element;  //small arrow function


numbers.map(function(element, index, array){   
    console.log(element, index, array);
});
const result = numbers.map(function(num){  //big way
    return num * num;
});
console.log(result);
const result2 = numbers.map(number => number * number);
console.log(result2);

// filter
const friendsAge = [5, 6, 7, 8, 3, 4, 34];
const oldFriend = friendsAge.filter(x => x > 10);
console.log(oldFriend);


