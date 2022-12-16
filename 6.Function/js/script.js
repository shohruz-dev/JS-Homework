let Infos = {}
for (let i = 0; i < 2; i++) {
	let firstName = prompt('Ismingizni kiriting');
	let lastName = prompt('Familiyangizni kiriting');
	let age = prompt('Yoshingizni kiriting');
	function setInfo(firsName, lastname, age){
		return {
			firsName,lastName,age
		}
	}
	Infos['student' + i] = setInfo(firstName, lastName, age);
}
	console.log(Infos);
