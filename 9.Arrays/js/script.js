//Homework
//pop
let array = [1, 2, 3, 4,5,7,8];
function pop(array1) {
  array1.splice(array1.length - 1, 1);
  return array1
}
console.log(pop(array));

//push 1
let arr = [1, 2, 3, 4,5,7,8];
function pushMathod (array){
  arr[arr.length] = 9;
  return arr
}
console.log(pushMathod(arr));

