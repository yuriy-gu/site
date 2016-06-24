'use strict';
let imgFolder = 'img/';
let imgCarousel = [
	{
		title: 'Spirit_XT185',
		image: 'Spirit_XT185.jpeg'//имена картинок в нашей папке img
	},
	 {
		title: 'USA_Style_(SS-401)',
		image: 'USA_Style_(SS-401).jpeg'
	},
	  {
		title: 'USA_Style_(SS-1365)',
		image: 'USA_Style_(SS-1365).jpeg'
	},
	  {
		title: 'FitLogic_BF6100',
		image: 'FitLogic_BF6100.jpeg'
	},
	 {
		title: 'item5',
		image: 'golf.png'
	},
	 {
		title: 'item6',
		image: 'hockey.png'
	},
	 {
		title: 'item7',
		image: 'sliderImg5.png'
	},
	 {
		title: 'item8',
		image: 'sliderImg6.png'
	}];
let startIndex = 0;

let sliderLeftHandler = document.getElementById('prev');
let sliderRightHandler = document.getElementById('next');
let imgHolders = Array.from(document.getElementById('slider_img').getElementsByTagName('a'));//присваиваем переменной по id все теги а

function assignImages() {
	let source = imgCarousel.slice(startIndex, startIndex+4);//хранятся 4 изображения
	imgHolders.forEach((element,  index) => {
		element.firstElementChild.src = imgFolder + source[index].image;//берем src наших картинок
		element.lastElementChild.innerHTML = source[index].title;//берем title
	});
}

function slide(direction) {
	if (direction === 'left' && startIndex > 0) {startIndex--}//если клацаем влево и доходим до начала ничего не происходит
	if (direction === 'right' && startIndex < imgCarousel.length-4) {startIndex++}//если клацаем вправо и доходим до конца ничего не происходит
		assignImages();
}

sliderLeftHandler.addEventListener('click', () => {slide('left')});
sliderRightHandler.addEventListener('click', () => {slide('right')});

assignImages();

//table
let list = [
	{id:1, title: 'test1'},
	{id:2, title: 'test2'},
	{id:3, title: 'test3'},
	{id:4, title: 'test4'},
	{id:5, title: 'test5'},
	{id:6, title: 'test6'},
	{id:7, title: 'test7'},
	{id:8, title: 'test8'},
	{id:9, title: 'test9'},
	{id:10, title: 'test10'},
	{id:11, title: 'test11'},
	{id:12, title: 'test12'},
	{id:13, title: 'test13'},
	{id:14, title: 'test14'},
	{id:15, title: 'test15'},
	{id:16, title: 'test16'},
	{id:17, title: 'test17'},
	{id:18, title: 'test18'},
	{id:19, title: 'test19'},
	{id:20, title: 'test20'},
	{id:21, title: 'test21'},
	{id:22, title: 'test22'},
	{id:23, title: 'test23'},
	{id:24, title: 'test24'},
	{id:25, title: 'test25'},
	{id:26, title: 'test26'},
	{id:27, title: 'test27'},
	{id:28, title: 'test28'},
	{id:29, title: 'test29'},
	{id:30, title: 'test30'},
	{id:31, title: 'test31'},
	{id:32, title: 'test32'},
	{id:33, title: 'test33'},
	{id:34, title: 'test34'},
	{id:35, title: 'test35'},
	{id:36, title: 'test36'},
	{id:37, title: 'test37'},
	{id:38, title: 'test38'},
	{id:39, title: 'test39'},
	{id:40, title: 'test40'},
	{id:41, title: 'test41'}];
let offset = 0;

let tablePaginator = document.getElementById('product_table_pagination')//пагинатор таблицы
let goodsTable = document.getElementById('product_table')//сама таблица

let pages = Math.ceil(list.length / 10);//

//пагинатор
function createPaginator() {
	for (let i=1; i<=pages; i++) {
		tablePaginator.insertAdjacentHTML('beforeend', `<span class="catalog_pagination" data-page="${i}">${i}</span>`);//создаем span с атрибутом data-page в котором номер страницы и в спане номер страницы
	}
	tablePaginator.addEventListener('click', switchThePage);
}

function switchThePage() {
	if(event.target.tagName !== 'SPAN') {return;}//обязательно большими буквами
	let page = event.target.getAttribute('data-page');
	offset = page * 10 - 10;
	renderTheTable();
}

//таблица
function renderTheTable() {
	product_table.innerHTML = '';
	let items = list.slice(offset, offset+10);//в таблице будет 10 строк
	items.forEach(item => {
		let tr = document.createElement('tr');
		tr.classList.add('bg_color');
		let td = document.createElement('td');
		td.innerHTML = item.title;

		//создаем минус
		let minusTd = document.createElement('td');
		minusTd.classList.add('delete_img');
		let minusButton = document.createElement('a');
		minusButton.classList.add('catalog_table_button_delete');
		minusButton.addEventListener('click', () => {removeItemFromSlider(item.id)});
		minusTd.appendChild(minusButton);

		//создаем плюс
		let plusTd = document.createElement('td');
		plusTd.classList.add('add_img');
		let plusButton = document.createElement('a');
		plusButton.classList.add('catalog_table_button_add');
		plusButton.addEventListener('click', () => {addItemToSlider(item.id)});
		plusTd.appendChild(plusButton);

		tr.appendChild(td);
		tr.appendChild(minusTd);
		tr.appendChild(plusTd);
		product_table.appendChild(tr);
	});
}

function removeItemFromSlider (id) {
	console.log(id);
}

function addItemToSlider (id) {
	console.log(id);
}

renderTheTable();

createPaginator();