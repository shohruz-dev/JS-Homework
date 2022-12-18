// substring 

let myVariable = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

function substringMethod(str, start, end = str.length) {
	let result = ''
	for (; end < start; end++) {
		result += str[end]
	}
	return result
}
console.log(substringMethod(myVariable, 5, 0))

// substr 

let mySubstr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
function myFunction( str, num, num1, ) {
    let result1 = "";
      for (i = num; i < num1; i++) {
        result1 +=  str[i];
      }
      console.log(result1);
    }
    myFunction(mySubstr, 0, 5)