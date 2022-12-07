for (let i = 0; i < 3; i++){
let firstName = prompt('Ismingizni kiriting');
let lastName = prompt('Familiyangizni kiriting');
let age = prompt('Yoshingizni kiriting');
function setInfo(){
	students = {
	firstName:firstName,
	lastName:lastName,
	age:age,
	}
}
setInfo();
	console.log(students);
}