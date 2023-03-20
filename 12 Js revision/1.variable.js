// declaration
var firstName = "Shohanur";
var lastName  = "Rahman";
var fullName  = firstName +' '+ lastName;
console.log(fullName);

// typeOf
var name = "shohan";
console.log(typeof name);
var age = 30;
console.log(typeof age);

//true-false
var exam = true;
var Class = false;
console.log(exam);
console.log(typeof Class);

//change var 
var past = 'shohan';
past = 'tuhin';       //dont need to add var for same name
console.log(past);

//Upper & lower case
var capitalize = 'shohan';
console.log(capitalize.toUpperCase());
var lower = 'Shohan';
console.log(lower.toLowerCase());

//find word position in string
var paragraph = 'The quick brown fox jumps over the lazy dog';
console.log(paragraph.indexOf('fox'));

//split string text
console.log(paragraph.split('  ')); //any word


// Int float string
// 1 Int to string 
var num1 = 30;
var changeNum1 = String(num1);  //ex 1
var changeNum1 = num1.toString(); //ex 2
console.log(changeNum1);

//int to float
var number = 40.5;
var changrNumber = parseFloat(number);
console.log(changrNumber);

//float to int
var number2 = 40.5;
var changeNumber = parseInt(number2);
console.log(changeNumber);

//float to string
var myAge = 50.6;
var changeToString = String(myAge);  //exp 1
var changeToString = myAge.toString();  //exp 2
console.log(changeToString);

//string to int

// var num3 = "my anme is shohan";
// var changeNum3 = parseInt(num3);
// console.log(changeNum3)
// //string to float
// var me = "hello myselg";
// var changeNum4 = parseFloat(me);
// console.log(changeNum4);

var number5 = 50.5;

var number6 = 60;
var sum = parseInt(number5);
console.log(sum + number6);