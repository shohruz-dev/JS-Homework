//homework

// 1 - function pow(x, n)
//pow(2, 3) 8
function degree(a,b){
  return a ** b;
}
console.log(degree(2,3));

//2 - function floor(n)
//floor(2.7324234) 2
let number = 2.7324;
console.log(~number  * -1 - 1); 

//3 - function ceil(n)
//ceil(2.7)  3
function RoundNum(number){
  var c = number % 1;
  return number-c+(c/1+1.5>>1)*1
}
console.log(RoundNum(2.7324234));

//4 - function round(n)
//round(2.7)  3
//round(2.7)  2
function RoundNum(number){
  var c = number % 1;
  return number-c+(c/1+1.5>>1)*1
}

console.log(RoundNum(2.7));

//5 - function sqrt(x, n)
//sqrt(16, 2)  4
//sqrt(8, 3)  2
function degree(a,b){
  return a ** (1/b);
}
console.log(degree(16,2));

//sqrt(8, 3)  2
function degree(a,b){
  return a ** (1/b);
}
console.log(degree(8,3));


