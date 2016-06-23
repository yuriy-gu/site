// function *Test() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     yield 6;
// }

// let iter = Test();

// var message = iter.next()

// console.log(message);


//////////////////////////


// function *myGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }

// for (var i of myGenerator()) {
//     console.log(i);
// }

function *qwerty() {
	var i = 0;
	while (true) {
		yield i++;
	}
}
var q = qwerty();
console.log(q.next())
console.log(q.next())
console.log(q.next())
console.log(q.next())
console.log(q.next())
console.log(q.next())