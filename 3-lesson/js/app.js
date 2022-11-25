let obj = {
    yourname:prompt('Ismingizni kiriting'),
    surname:prompt('Familiyangizni kiriting'),
    age:prompt('Yoshingizni kiriting'),
}
console.log(obj);

let student = 16;

if(student < 16){
    console.log("Maktab oquvchisi")
}else{
    console.log("Maktabni tugatgan")
}
if(student === 16){
    console.log("Student Password olgan")
}



// sevetafor

let trafficLight = prompt('Rang kiriting');
if( trafficLight === 'red'){
    console.log('yellow')
}else if ( trafficLight === 'yellow'){
    console.log('green')
}
else if ( trafficLight === 'green'){
    console.log('red')
}
else{
    alert('Unday rang mavjud emas')
}