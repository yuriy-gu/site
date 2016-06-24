/*t game = {
	teamA: 0,
	teamB: 0,
	teamAScore() {
		this.teamA++;
		return this;
	},
	teamBScore() {
		this.teamB++;
		return this;
	},
	getResult() {
		console.log(`teamA ${this.teamA} - ${this.teamB} teamB`);//teamA 2 - 1 teamB
		return this;
	}
};

game.teamAScore().teamBScore().teamAScore().getResult();*/


/*let clientData = {
	id: 094545,
	fullName: 'Not Set',
	//setUserName is a mathod on the clientData object
	setUserName: function (firstName, lastName) {
		//this refers to this fullname property in this object
		this.fullName = `${firstName} ${lastName}`;//the same as 	this.fullName = firstName + " " + lastName;
	
	}
}

function getUserInput(firstName, lastName, callback) {
	//validate firstName/lastName here

	//now save the names
	callback (firstName, lastName);
}

getUserInput('Ivan', 'Ivanovich', clientData.setUserName);
console.log(clientData.fullName);//Not Set
console.log(window.fullName);//Ivan Ivanovich*/

/*function poemMaker(name, gender) {
	console.log(name + " is finer than fine wine.");
	console.log('Altruistic and noble for the modern time.');
	console.log('Always admirably adorned whiz the latest style');
	console.log('A ' + gender + ' of unfortunate tragedies who still manages a smile');
}

function getUserInput(firstName, lastName, gender, callback) {
	callback (firstName +" " + lastName, gender);
};
getUserInput('John', 'Doe', 'male', poemMaker);*/


/*function greetUser (name, gender) {
	if(gender === 'Man') {
		console.log("hello mr. "  + name);
	}else {
		console.log("hello ms. " + name);
	}
}

function getUserInput(name, lastname, gender, callback) {
	if (typeof callback === 'function') {
	callback (name + " " + lastname, gender);
	}
};

getUserInput('Bill', "Gates", "Man", greetUser);*/

/*function primitiveMultiply(a,b) {
	if(Math.random() < 0.5) return a*b;
	else throw new Error();
}
function reliableMultiply(a,b){
	try {
		console.log(primitiveMultiply(a,b));
	}catch(err){
		console.log('error');
		return reliableMultiply(a,b);
	}
};

reliableMultiply(2-348-235,2);*/

//делаем get запрос на получение данных
/*//оздаем новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
//Конфигурируем его Get-запрос на URL
xhr.open('GET','http://jsonplaceholder.typicode.com/posts', false);
//отсылаем запрос
xhr.send();
//Если код ответа сервера не 200, то это ошибка
if(xhr.status !=200) {
	//обработать ошибку
	alert(xhr.status + ':' + xhr.statusText);
}else {
	alert(xhr.responseText);
}*/

/*var xhr = new XMLHttpRequest();
xhr.open('GET','http://jsonplaceholder.typicode.com/posts', true);
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState != 4) return;
	if(xhr.status !=200) {
		alert(xhr.status + ':' + xhr.statusText);
	}else {
		alert(xhr.responseText);
	}
}
console.log('after');*/

/*let p = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve('resolved');
	}, 3000);
});

p.then(function(result){
	console.log(`resolved:${result}`);
});*/

/*let p = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve('error');
	}, 3000);
});

p.then(function(result){
	console.log(`resolved:${result}`);
	},
	function(err){
		console.log(`reject:${err}`);
	});*/

//написать функцию которая подсчитывает невидимые стороны кубика-рубика
/*function qwe(n) {
	if(n<3) {
		console.log(0);
	} else {
	console.log(Math.pow(n-2,3));
	}
}
qwe(3);*/


/*let obj = {
	number: 1,
	str: 'some string',
	inner: {
		val: 45
	},
	arr: [1,2,3,4,5]
}
let stringified = JSON.stringify(obj);
console.log(obj);//в виде объекта: Object {number: 1, str: "some string", inner: Object, arr: Array[5]}
console.log(stringified);//в виде строки: {"number":1,"str":"some string","inner":{"val":45},"arr":[1,2,3,4,5]}*/


/*let formElem = document.getElementById('form');
let form = [
	{question: 'What is ur name?', type:'input'},
	{question: 'Are u working?', type:'select', answer:['yes','no']},
	{question: 'Will u be on occupation on Saturday?', type:'select', answer:['yes','no','may be']},
];

form.forEach(input => {
	switch (input.type) {
		case 'input':
			let e = document.createElement('div');
			e.innerHTML = `<span>${input.question}</span><input type="${input.type}">`;
			formElem.appendChild(e);
			break;
		case 'select': 
			let el = document.createElement('div');
			el.innerHTML = `<span>${input.question}</span>`;
			let select = document.createElement('select');
			input.answer.forEach(option => {
			 	let opt = document.createElement('option');
			 	opt.innerHTML = option;
			 	select.appendChild(opt);
			});
			el.appendChild(select);
			formElem.appendChild(el);
			break;
	}
});*/


/*function httpGet(url) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.open('GET', url, true);
		req.setRequestHeader('X-Auth-Token', '6041acdb6f09440eaa8648a49f241b2a');
		req.send();
		req.onreadystatechange = function() {
			if(req.readyState !=4) {return;}
			if (req.status === 200) {
				resolve(req.responseText);
			} else {
				reject(`${req.status} ${req.statusText}`);
			}
		}
	});
}
httpGet('http://api.football-data.org/v1/soccerseasons/424')
	//.then(val => console.log(JSON.parse(val)));//переводит строку в объект
	.then(val => JSON.parse(val))
	.then(data => {
		console.log(data)
		return httpGet(data._links.fixtures.href);
	})
	.then(JSON.parse)
	.then(newData =>console.log(newData))
	.catch(err => console.log(err));*/

function httpGet(url) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.open('GET', url, true);
		req.setRequestHeader('X-Auth-Token', '6041acdb6f09440eaa8648a49f241b2a');
		req.send();
		req.onreadystatechange = function() {
			if(req.readyState !=4) {return;}
			if (req.status === 200) {
				resolve(req.responseText);
			} else {
				reject(`${req.status} ${req.statusText}`);
			}
		}
	});
}
httpGet('http://api.football-data.org/v1/soccerseasons/424')
	.then(data => {
		data = JSON.parse(data);
		console.log(data);
		return httpGet(data._links.teams.href);
	})
	.then(data2 => {
		data2 = JSON.parse(data2);
		console.log(data2);
		data2.teams.forEach(team => {
			table.lastElementChild.insertAdjacentHTML('beforeend', `<tr><td>${team.name}</td><td><img width=200 height=200 src="${team.crestUrl}"/></td></tr>`);
		});
	})
		
	.catch(err => console.log(err));
