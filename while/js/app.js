
//Juft sonlarni chiqaradi;
let number = 0;
while(number <= 5){
    if(number % 2 === 0) console.log(number);
    number++;
}

//Toq sonlarni chiqaradi;
let number = 0;
while(number <= 5){
    if(number % 2 !== 0) console.log(number);
    number++;
}

//Son 4ga teng bo'lganda loop to'xtab qolsin
let number = 0;
do{
    if(number === 4)
    break;
    console.log(number);
    number ++;
}
while(number <= 10)

//For yordamida hafta kunlarini chiqarsin

let num = +prompt('week')
switch (num ){
    case 1:
    alert('Dushanba');
    case 2:
    alert('Seshanba');
    case 3:
    alert('Chorshanba');
    case 4:
    alert('Payshanba');
    case 5:
    alert('Juma');
    case 6:
    alert('Payshanba');
    case 7:
    alert('Shanba');
    break;
    default:
    alert('boshqa')
}