//Object.setPrototypeOf
// let protObj = function() {//функция конструктор
// 	this.value = 5;
// };

// protObj.prototype.getValue = function() { //повесили prototype и на него функцию getValue
// 	return this.value;
// }

// let o1 = new protObj();//создался объект с функцией protoObj
// let o2 = {};
// console.log(o1.getValue());//5

// Object.setPrototypeOf(o2, protObj.prototype);
// console.log(o2.getValue());//undefined
//===================================================
// protObj.prototype.square = function() {
// 	return this.value? this.value*this.value : 'value не задано';
// }
// console.log(o1.square());
// console.log(o2.square());
//====================================================
// protObj.prototype.qwerty = function(a) {
// 	return this.value? this.value*a : 'value не задано';
// }
// console.log(o1.qwerty(10));//50
// console.log(o2.qwerty());//value не задано
//============== ARRAYS =================================
// let p = Array.from(document.getElementsByTagName('p'), (elem, i) => {
// 	elem.innerHTML = i;
// 	return elem;
// });
// console.log(p);// в html будут индексы p а в консоле [p,p,p,p,p]
//=========================================================
//let arr1 = [42,55];//[42, 55]
//let arr2 = new Array(-1); // будет undefined
//let arr3 = Array.of(-1, undefined, null, {});//создает массив из переданных ему элементов
//console.log(arr3);//[-1, undefined, null, Object]

//Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.
//console.log([1,2,3].fill(0,2));//заменили 3 на 0
//console.log([1,2,3].fill('array',0));//заменили 1.2.3 на ["array", "array", "array"]

//Метод find() возвращает значение в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается undefined.
//console.log([1,2,3,4,5].find(item => item > 2));//тот аргумент который больше 2х мы выводим
//console.log([1,2,3,4,5].find(function(num) { return num > 2}));//3 the same as top

//Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
//console.log([1,2,3,4,5].findIndex(item => item > 2));

//console.log(Number.isNaN(123));//false
//console.log(Number.isNaN(Infinity));//false
//console.log(Number.isNaN('str'));//false
//console.log(Number.isNaN(NaN));//true
//console.log(Number.isNaN('one'/'two'));//true

/*let arr = [5, 23, 1, 0, -56, -4, 33, 9, 2, 222];
console.log(arr.sort());//[-4, -56, 0, 1, 2, 222, 23, 33, 5, 9] сравнивает как строки

let sorted = arr.sort(function(a, b) {
	return a - b;
});
console.log(sorted);//[-56, -4, 0, 1, 2, 5, 9, 23, 33, 222]

let sort = arr.sort((a,b) => { return b-a});
console.log(sort);//[222, 33, 23, 9, 5, 2, 1, 0, -4, -56]*/

//СОРТИРОВКА МАССИВА
/*let numbers = [1,2,3,4,5,-6,-24,55];
function sort(arr, desc) {
	arr = arr.slice();//Метод slice() возвращает поверхностную копию части массива в новый объект массива.
 	let res = [];
 	while (arr.length > 0) {//пока длина маассива больше 0 
 		let val = desc? Math.max.apply(null, arr) : Math.min.apply(null, arr);// сравниваем max min
 		let index = arr.indexOf(val);//берем индекс с val
 		res.push(arr[index]);
 		arr.splice(index, 1);//вырезать с массива index 1 элемент
 	}
 	return res;
 }
 console.log(sort(numbers, false));
 console.log(sort(numbers, true));*/

