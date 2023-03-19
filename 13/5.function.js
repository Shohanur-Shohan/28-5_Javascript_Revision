function yourName(){
    console.log('shohan');
}
yourName();

var age = 30;
yourName();  //you call a function anywhere

// double number
function double(num){
    var doubleNum = num * 2;
    return doubleNum;
}
var result = double(50);
var result2 = double(500);
console.log(result, result2);

// sum
function add(num1, num2){
    var result = num1 + num2;
    return result;
}
var total = add(50, 60);
console.log(total);