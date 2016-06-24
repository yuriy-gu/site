//test1
// var imageHolder = document.getElementById('planet')
// function changeImage(event, elem) {
// 	var img = elem.getAttribute('href');//получает значение атрибута src
// 	imageHolder.setAttribute('src', img);//устанавливает атрибут elem.setAttribute(name, value); имя атрибута и значение
// }
//or we can do this
//var imageHolder = document.getElementById('planet')
// function changeImage(event, elem) {
// 	event.preventDefault();
//  var img = elem.getAttribute('href');
//	var img = elem.href;
//	imageHolder.setAttribute('src', img);
//	imageHolder.src = img;
// }


//test2
// var imageHolder = document.getElementById('planet')
// function changeImage(event) {
// 	event.preventDefault();//остановит переход по ссылке, т.е откроет в этом же окне
// 	var img = event.target.href;//достали атрибут href у eventTarget и присвоили его переменной
// 	imageHolder.src = img;//img id=planet достали атрибут src и присвоили переменнную img
// 	//console.log(event.target);//выводит элемент <a href="img/img1.jpeg">Mercury</a>
// 	//console.log(event.currentTarget);//выведет элемент <ul onclick="changeImage(event)">
// }

//test3
// var imageHolder = document.getElementById('planet')
// function changeImage(event) {
//  	event.preventDefault();
//  	if (event.target.tagName === "A") {//проверяем нажат ли таг a(большая буква по умолчанию)
//  		imageHolder.src = event.target.href;
//  	}
// }

//test4
/*var imageHolder = document.getElementById('planet');
var ul = document.getElementById('galery');
ul.addEventListener('click', changeImage);
function changeImage(event) {
	event.preventDefault();
	if (event.target.tagName === "A") {//проверяем нажат ли таг a(большая буква по умолчанию)
	imageHolder.src = event.target.href;
	}
}*/
//====================================================
//при нажатии на пробел меняется картинка
/*var imageHolder = document.getElementById('planet');
var ul = document.getElementById('ul');
ul.addEventListener('click', changeImage);
function changeImage(event) {
	event.preventDefault();
	if (event.target.tagName === 'A') {
		imageHolder.src = event.target.href;
	}
}
var counter = 0;
var li_items = ul.children;//берем все li
window.addEventListener('keypress', function(event){
	if (event.code !== 'Space') {return;}//если пробел не нажат то ничего не происходит
	var index = counter%li_items.length;//чтобы по порядку перебирали элементы
	imageHolder.src = li_items[index].firstChild.href;
	counter++;
});*/
//window.addEventListener('keypress', function(event) {//при нажатии на кнопку происходит событие
/*Методы addEventListener и removeEventListener являются современным способом назначить или удалить обработчик, и при этом позволяют использовать сколько угодно любых обработчиков. 
Назначение обработчика осуществляется вызовом addEventListener с тремя аргументами: event - Имя события, например click
handler - Ссылка на функцию, которую надо поставить обработчиком. phase - Необязательный аргумент, «фаза», на которой обработчик должен сработать. Этот аргумент редко нужен.*/
//console.log('something happends');
//=====================================================
/*для input
textInput.addEventListener('keydown', function(event) {
	console.log(event.target.value);
});*/
//=====================================================
//проверка на гласные и согласные
/*textInput.addEventListener('change', function(event) {
	var letters = countLetters(event.target.value);
	result.innerHTML = '<p>Гласных: '+letters.vowels+'</p>'+'<p>Согласных: '+letters.consonants+'</p>';
});
function countLetters(str) {
	var vowelsRegExp = /[aeiouy]/ig;
	var consonantsRegExp = /[qwrtpsdfghjklzxcvbnm]/ig;
	var result = {
		vowels: 0,
		consonants: 0
	};
	while (res = vowelsRegExp.exec(str)) {
		result.vowels++;
	}
	while(res = consonantsRegExp.exec(str)) {
		result.consonants++;
	}
	return result;
};*/
//=======================================================
/*var link = document.querySelector('a');// выберет первый тег а на странице
console.log(link);//<a href="img/img1.jpeg">Mercury</a>

var link = document.querySelector('#result');
console.log(link);//<div id="result"></div>

var link = document.querySelectorAll('a');//выберет все теги а на странице
console.log(link);

var link = document.querySelector('.class');//можно выбрать по классу
var link = document.querySelector('div#result');//div с id=result*/
//=======================================================
/*var a1 = document.getElementsByTagName('a');
var a2 = document.querySelectorAll('a');
var newA = document.createElement('a');
result.appendChild(newA);
console.log(a1);//[a, a, a, a, a]
console.log(a2);//[a, a, a, a]*/
//=======================================================
/*result.addEventListener('mouseover', function() {//при наведении на div id=result текст меняет цвет(добавляет class=red), при втором наведении удалет class=red
	result.classList.toggle('red');//если класса class нет, добавляет его, если есть – удаляет.
})
//console.log(result.classList);//["red", "blue", "green", value: "red blue green"]
result.classList.add('red', 'blue','green');//добавили класс с именем red в div с id=result
result.classList.remove('red');//удалили класс red
console.log(result.classList);
console.log(result.classList.contains('blue'));//true проверили есть ли у нас с именем blue*/
//========================================================
// elem.insertAdjacentHTML(where, html);
// Строка HTML, которую нужно вставить
// where :Куда по отношению к elem вставлять строку. Всего четыре варианта:

// 1. `beforeBegin` -- перед `elem`.
// 2. `afterBegin` -- внутрь `elem`, в самое начало.
// 3. `beforeEnd` -- внутрь `elem`, в конец.
// 4. `afterEnd` -- после `elem`.
// Например, вставим пропущенные элементы списка перед <li>5</li>:
//  <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>5</li>
// </ul>
// <script>
//   var ul = document.body.children[0];
//   var li5 = ul.children[2];
//   li5.insertAdjacentHTML("beforeBegin", "<li>3</li><li>4</li>");
// </script
//========================================================
//p.insertAdjacentHTML('beforeBegin', '<span> new element</span>');//перед тегом р вставит текст
// p.insertAdjacentHTML('afterBegin', '<span> new element </span>');//внутрь тега р в самое начало
// p.insertAdjacentHTML('beforeEnd', '<span> new element </span>');//внутрь в конец
// p.insertAdjacentHTML('afterEnd', '<span> new element </span>');// после р
res.style.color = 'green';//задали сss свойство
res.style.fontSize = '28px';//задали сss свойство
