//how to declsre functions

function double(num){  //normal way function
    return num * 2;
}
const result  = double(44);
console.log(result);

//
const doubleIt = function myNum(num2){  // function inside variable old
    return num2 * 2;
}
const result2 = doubleIt(60);
console.log(result2);

//function 
const doubleIt2 = num3 => num3 * 3;  //new way of function arrow
const result3 = doubleIt2(20);
console.log(result3);
//
const add = (x, y) => x + y;  //double  parametter arrow
const total = add(59, 66);
console.log(total);

//
const single = () => 50;  // show single parameter
const singleNum = single();
console.log(singleNum);

//
const doMath = (x, y) => {
    const sum2 = x + y;
    const minus = x - y;
    const multi = sum2 * minus;
    return multi;
}
const output = doMath(400, 50);
console.log(output);
