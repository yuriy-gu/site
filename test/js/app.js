//http://craft888.inf.ua/1/script/script.js
$(document).ready(function() {
	// SELECT (aside)
	var region = $("#region"),
		category = $("#category").attr("disabled", true),
		date = $("#date").attr("disabled", true),
		price = $("#price").attr("disabled", true);

	$('#region').click(function() {
		if ($(this).val()) {
			$("#category").attr("disabled", false).addClass('active_select');
		}
	})
	$('#category').click(function() {
		if ($(this).val()) {
			$("#date").attr("disabled", false).addClass('active_select');
		}
	})
	$('#date').click(function() {
		if ($(this).val()) {
			$("#price").attr("disabled", false).addClass('active_select');
		}
	})

	//TABS
	$('.tab_container').easytabs({
		defaultTab: "li:first-child",//таб по умолчанию
		tabActiveClass: 'nav_active',//активный таб
		tabClass: 'nav_default'//дефолтный класс
	});
	 $('.tabs_nav').click(function(e) {
	 	//$(e.target).parent().removeClass('nav_default')
	 	//$(e.target).parent().addClass('nav_default')
	 	 $("#par1").toggleClass("class1");

	 	
	})

	//slider
	$(".slider").each(function() { // обрабатываем каждый слайдер
		var obj = $(this);
		$(obj).append("<div class='nav'></div>");
		$(obj).find("li").each(function() {
			$(obj).find(".nav").append("<span rel='" + $(this).index() + "'>"+($(this).index()+1)+"</span>"); // добавляем блок навигации
			$(this).addClass("slider" + $(this).index());
		});
		$(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
	});


	function sliderJS(obj, sl) { // slider function
		var ul = $(sl).find("ul"); // находим блок
		var bl = $(sl).find("li.slider" + obj); // находим любой из элементов блока
		var step = $(bl).width(); // ширина объекта
		$(ul).animate({
			marginLeft: "-" + step * obj
		}, 500); // 500 это скорость перемотки
	}
	$(document).on("click", ".slider .nav span", function() { // slider click navigate
			var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
			$(sl).find("span").removeClass("on"); // убираем активный элемент
			$(this).addClass("on"); // делаем активным текущий
			var obj = $(this).attr("rel"); // узнаем его номер
			sliderJS(obj, sl); // слайдим
			return false;

	})

});
