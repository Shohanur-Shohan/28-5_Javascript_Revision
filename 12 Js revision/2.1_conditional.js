var job = true;
var salary = 100000;
if(job == true && salary > 500000){
    console.log('got  job with good salary');
}
else if(job == true){
    console.log('just got a job');
}
else{
    console.log('bad job');
}

/// for one condition true use || this
if(job = true || salary > 500000){
    console.log('got  job with good salary');
}
else{
    console.log('bad job');
}