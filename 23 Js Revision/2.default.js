function add(num1, num2){
    if(num2 == undefined){ //method 1 //when num2 missing
        num2 = 0;
    }
    // num2 = num2 || 0;  //method 2
    const sum = num1 + num2;
    return sum;
}
const total = add(10); //num 2 deleted
console.log(total);