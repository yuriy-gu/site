//$('#element').addClass('qwerty');
//$('#element').removeClass('asd');
//$('#element').attr('title','element Title');//add attribute title="element Title"
//console.log($('#element').attr('title'));
//$('#element').removeAttr('title');
//$('#element').attr('disabled', true);
//console.log($('#element').attr('disabled'));
//console.log($('#element').prop('disabled'));
//console.log($('#element').val());
//$('#element').val('new');
//$('#element').css('width', '200');//px is default setting
// $('#element').css('width', function() {
// 	return '200';
// });
// $('#element').css({
// 	'margin-top': '200px',
// 	'width': '200px',
// 	'color': 'red'
// });
//console.log($('#element').hasClass('asd'));//hasClass проверяет наличие класса
//console.log($('#box').height());
//$('#box').height(20 + '%');
//console.log($('#box').innerHeight());// выводит в консоль высоту id с учетом padding (без margin)
//console.log($('#box').outerHeight());// height + margin + border
//$('#box').outerHeight(500);
//console.log($('#box').outerHeight(true));
//$('#box').width(500);
//$('#box').innerWidth(500);
//console.log($('#box').outerWidth(true));
//console.log($('#circle').offset());// показывает позицию объкта на странице
// $('#circle').offset({
// 	'top': '8',
// 	'left': '10.5'
// });
// $('#circle').offset($('#box').offset());// сказали id=circle взять кординаты id=box
// var xy =  $('#box').offset();
// $('#circle').offset(xy);
// $('#circle').hide(1000);
// $('#circle').show(2000);

// $('#element').on('click', function(e){
// 	alert('asd')
// });

// console.log($('#element').data("name"));
// $('#element').data("qwe",'qwerty');//добавли атрибут data


//index2.html
$('#thailand').hide(); //скрыли картинку
$('#switcher').on('click', function() {
	var a = $('#switcher').data('direction');// присвоили метод slideToUp через data-direction
	funcObj[a]();//вызываем метод slideToUp
})
	// $('#forest').slideUp(500);
	// $('#thailand').slideDown(500);
var funcObj = {
	slideToUp: function(){
		$('#forest').slideUp(500);
		$('#thailand').slideDown(500);
		$('#switcher').val('Down').data('direction', 'slideToDown');
	},
	slideToDown: function(){
		$('#thailand').slideUp(500);
		$('#forest').slideDown(500);
		$('#switcher').val('Up').data('direction', 'slideToUp');
	}
};