//Homework
//pop
let arrPop = [1, 2, 3, 4,5,7];
function popMathod (array){
    for (i=array.length-1; i>array.length-2; i--){
      array = array[i]
    } return array
  } 
console.log(popMathod(arrPop));

//push 1
let arrPush = [1, 2, 3, 4,5,7,8,9];
function pushMathod (array, value){
  arrPush = [arrPush,10]
  return arrPush
}

console.log(pushMathod(arrPush));


//push 2
let arr = [1,2,3];
arr[arr.length] = 10;
console.log(arr);