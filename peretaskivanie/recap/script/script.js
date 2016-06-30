$(document).ready(function() {
	let $sideBar = $('#sidebar').css({
			backgroundColor:"#333333",
			overflow: 'hidden',
			width: '40'
			}),
		$tooggler = $('#tooggler'), //т.к. это переменная jquery
		$content = $('#content').css({
			backgroundColor:"#666666"
			});

	$('#tooggler').on('click', function(event) {
		if ($tooggler.is(':checked')) {//проверили checked ли он
			let sideBarWidth = $content.offset();
			$sideBar.animate({
				width: sideBarWidth.left}, 500);
		} else {
			$sideBar.animate({
				width: '40px'}, 500);
		}
	});

	$(window).on('resize', function() {
  		let sideBarWidth = $content.offset();
  		if ($tooggler.is(':checked')) {
  			$sideBar.width(sideBarWidth.left);
  		}
	});
});

