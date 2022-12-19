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
let arr = [1, 2, 3, 4,5,7,8];
function pushMathod (array, value){
  arr[arr.length] = 9;
  return arr
}
console.log(pushMathod(arr));