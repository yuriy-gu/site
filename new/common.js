'use strict'
// function getSum(start, end) {
// 	var numbers = [].slice.call(arguments);
// 	var newNumbers = numbers. slice(start+2, end+3);// игнорируем 
// 	console.log(newNumbers);
// 	var res = newNumbers.reduce(function(prev, curr) {
// 		return prev + curr;
// 	})
// 	console.log('this sum is ' + res);
// };
// getSum(0,5,1,1,1,1,1,1,1,1);//от 0 эл-та до 5 включая его
//==============================================================
// function getSum(start, end) {
// 	var numbers = [].slice.call(arguments);
// 	var start = numbers.shift();// вырезаем первый элемент, теперь он равен 0
// 	var end = numbers.shift();// вырезаем второй элемент (5)
// 	console.log(start, end);// будет 0,5
// 	var newArr = numbers.slice(start, end+1);// slice возвращает элементы массива от 0 до 6,   все индексы кроме последнего поэтому end+1 (мы вкл послед. индекс)
// 	var res = newArr.reduce(function(prev, curr) {
// 		return prev + curr;
// 	});
// 	console.log('this sum is ' + res);
// };
// getSum(0,5,1,1,1,1,1,1,1,1);//0 and 5 = от 0 эл-та до 6
//===============================================================
// function getSum(start, end, ...rest) {
// 	let numbers = rest.slice(start, end+1);
// 	let res = numbers.reduce((prev, curr) => prev + curr);
// 	console.log('this sum is ${res}');
// };
// getSum(0,4,1,1,1,1,1,1,1);
//===============================================================
// let person = {name: 'Bob', age: 20};
// let person2 = {name: 'Jon', age: 30};
// let {name, age, gender} = person2;
// console.log(name, age, gender);// Jon 30 undefined
//==========================================================
// let bob = {name: 'bob', age: 20};
// let {name: firstName, age: years} = bob;
// console.log(firstName, years);// bob 20
//=============================================================
// let objInObj = {
// 	man: {
// 		name: 'John',
// 		occupation: 'doctor'
// 	}
// };

// let {man: {name, occupation: profession}} = objInObj;//occupation renames into profession
// let {man} = objInObj;
// console.log(name, profession);//John doctor
// console.log(man);//Object {name: "John", occupation: "doctor"}
//===========================================================
// let fruits = ['banana', 'apple', 'orange'];
// let [,,orange]= fruits;//пропустили первые два элемента
// console.log(orange);//

// let fruits = ['banana', 'apple', 'orange', 'lemon'];
// let [,second, , qwe] = fruits;
// console.log(second, qwe);//apple lemon
//===============================================
// let one = 1;
// let two = 2;
// [one, two] = [two, one];// 1,2 = 2,1
// console.log(one, two);//2 1
//==============================================
// let key = 'age';
// let myObj = { 
// 	[key]: 20 //берет переменную и ищет ее выше
// };
// console.log(myObj);//Object {age: 20}
//===============================================
// let key = 'age';
// let myFunc = () => {return 'age';}//qwe() {return 'age';}
// let myObj = { 
// 	[myFunc()]: 20 //берет переменную и ищет ее выше
// };
// console.log(myObj);
//================================================
// let car = {
// 	_wheels: 4,
// 	get wheels() {//get wheels
// 		return this._wheels;
// 	},
// 	set wheels(number) {//set wheels 10
// 		this._wheels = number;
// 	},
// 	reset() {
// 		this._wheels = 0;
// 	}
// }
// console.log(car.wheels);//4 
// car.wheels = 10;
// console.log(car.wheels);//10
// car.reset();
// console.log(car.wheels);//0
//================================================
// let newObj = Object.assign({}, {score: '1 -1', game: 'tennis'});
// console.log(newObj);//Object {score: "1 -1", game: "tennis"}
// Object.assign(newObj, {score: '3 - 7'});
// console.log(newObj);//Object {score: "3 - 7", game: "tennis"}
//========================================================
// let arr = Object.assign([1,2,3], [4,5]);//replaced 1,2 at 4,5
// console.log(arr);//[4,5,3]

// let objTarget = {
// 	val: {
// 		name: 'John'
// 	}
// }
// let arr = Object.assign(objTarget, { val: { age: 5 }});
// console.log(arr);
//=========================================================
let o1 = Object.is('foo', 'foo');
console.log(o1);// true
let o2 = Object.is({number:1}, {number:1});
console.log(o2);//false