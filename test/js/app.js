//http://selectric.js.org/
$(document).ready(function(){
	$("#year_link").click(function(){
		$(".year_div").css("display", "block");    
	});
	$(".year_dropdown").click(function(){
		var a = $(this).text();
		$("#year_link").text(a);
		$(".year_div").css("display", "none");         
	});
})
