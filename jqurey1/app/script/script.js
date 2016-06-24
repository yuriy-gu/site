
//$('#stopPropagation').text('third');// add text
//$('#result').empty();// delete text
//console.log($('#changeBg').find('#scroll').remove());//find all id,class,tags like an massiv and then we deleted id=scroll
//$('#delegateClick').remove();// removing (in our case id=delegateClick)
//$('#test').html('<div class="asd">this is a new div');// we created a div whiz class=asd and some text

$(document).ready(function(){// when document fully loaded our js will start to work
	//DELEGATED EVENTS
	$('#delegateClick').on('click', '.first', function(e) { // when clicked on class=first we has an alert (.first - it can be any class, id, tag name) 
		alert('asdsad')
	});
	$('#delegateClick').off('click');// its stops event - click
	
	//1.при нажатии на кнопку turn on сработает кнопка click и добавит текст в параграф, а 
	//2. при нажатии на кноку off надо выключить кноку click и очистить параграф
	$('#on').on('click', function(e) { //при клике на id=on срабатывает функция:
		$('#testClick').on('click', function(e) { //при нажати на id=testClick 
			$('#result').text('third');//в id=result мы добавляем текст
		});//закрыли функцию testClick
		$('#off').on('click', function(e) {// по нажатию на id=off
			$('#result').empty();//мы очищаем параграф с id=result
			$('#testClick').off();// и останавливаем event=click по id=testClick
		});
	});



	$('#one').one('click', function(e) {// нажатие сработает только 1 раз
		alert('asd')
	});



	//при клике на scroll (потянули его вниз) в начале появилась ul и затем скрылась
	$('#changeBg').on('scroll', function(e) {
		$('.none').show(function() {
			$('.none').hide(500);//callback т.е. сработала после того как ul появилась и через 300милисек
		});
	});

	//если размер окна мень 700px то меняем bg блока
	$(window).on('resize', function(e) {
	var wid = $(document).width()
		if (wid <= 700) {
			$('#changeBg').css({
 				'background': '#000'
			});
		}
		else {
			$('#changeBg').css({
 				'background': 'green'
		});
		}
	});
	

	$('#clicked').on('click', function(e, param) {
		$('#clicked').css({
 				'background': 'green'
		}).val(param);
	});
	$('#trigger').on('click', function(e) { // при нажатии на кнопку trigger 
		$('#clicked').trigger('click', ['clicked']);// кнопка click становиться зеленой и value меняется на clicked
	});

	$('#prevent').on('click', function(e) {
		e.preventDefault();// блокирует кнопку (типа disabled)
	})
	/*$('body').on('click', function(e) {
		alert("message")
		e.stopPropagation();
	});
	$('#stopPropagation').on('click', function(e) {
		e.stopPropagation();
	});*/

	var data = {
		Shirt: [{text: 'Red', value: 'Red'}, {text: 'Orange', value: 'Orange'}],
    	Jeans: [{text: 'Blue', value: 'Blue'}, {text: 'Gray', value: 'Gray'}]
	};
	var product = '';
	var color = '';
	var emptySelect = '<option value="N/A">N/A</option>';
	
	for (i in data) {// элементы data доступны через i
		product += '<option value='+ i +'>'+ i +'</option>';// перебираем в цикле массив
	}
	$('#product').html(emptySelect + product);//запилили через html в id=product emptySelect + product
	$('#color').html(emptySelect);// в id=color передали emptySelect

	$('#product').on('change', function(e) {//когда сделали chenge для 
		if(e.target.value !='n/a') 	{
			setColor(e.target.value);
			$('#color').attr('disabled', false);
			$('#img_wrap').empty();
		} else {
			$('#color').attr('disabled', true).val('n/a');
			$('#img_wrap').empty();
		}
	});
	
	$('#color').on('change', function(e) {
		var img = $('#img_wrap').empty().append('<img src="img/'+img+'.jpg"/>');
	});
	
	 function setColor(prod) { // у id=product берем value
	  		color = emptySelect;
	 		data[prod].forEach(function(el) {
	 		 	color += '<option value='+ el.value +'>'+ el.text +'</option>';
	 		 });
	 		$('#color').html(color);
	  	};
	 
//========================================================
// $('#blur').on('blur', function(e) { //когда фокус исчезает, например посетитель кликает на другом месте экрана.
// 	alert('message');
// });

// $('#blur').on('focus', function(e) { //вызывается тогда, когда пользователь фокусируется на элементе
// 	alert('message');
// });

$('#blur').on('select', function(e) { //при выделении текса (ctrl+a) происходит событие
	alert('message');
});

// $('#changeBg').on('mousedown', function(e) { //Кнопка мыши нажата над элементом.
// 	alert('message');
// });

// $('#changeBg').on('mouseup', function(e) { //Кнопка мыши отпущена над элементом.
// 	alert('message');
// });

// $('#changeBg').on('mousemove', function(e) { //Каждое движение мыши над элементом генерирует это событие.
// 	console.log(e.pageX + ' ' + e.pageY);// выводит координаты по X и Y черезе e  (название функции)
// });

// $('#changeBg').on('mouseleave', function(e) { //когда мышь покидает пределы объекта
// 	alert('hello')// выводит координаты по X и Y черезе e  (название функции)
// });

//$('#changeBg').append('<div></div>');// add a div in this id at the end 
///$('#changeBg').prepend('<div></div>');// add a div in this id at the begin
//$('#changeBg').after('<div></div>');// add a div after this id 
//$('#changeBg').before('<div></div>');// add a div before this id 

$('#stopPropagation').clone().appendTo('#changeBg');//клонировали блок #stopPropagation в блок #changeBg
$('#stopPropagation').clone().appendTo('#scroll');

});// document.ready







