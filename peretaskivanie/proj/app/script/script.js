$(document).ready(function() {
	var startX = 0,
		startY = 0,
		x = 0,
		y = 0;


	var element = $('#drag');
		element.css('position', 'relative');//we add a css style - position: relative;

	$('#drag').on('mousedown', function(event) {// при клике (зажали и держим кнопку мыши)
		startX = event.pageX - x;
		startY = event.pageY - y;
		$(document).on('mousemove', mousemove);//отлавливаем движение мыши
		$(document).on('mouseup', mouseup);//
	});

	function mousemove(event) {
		y = event.pageY - startY;
		x = event.pageX - startX;
		element.css({
			top: y + 'px',
			left: x + 'px'
		});
	}

	function mouseup() {
		$(document).off('mousemove', mousemove);
		$(document).off('mouseup', mouseup);
	}
});