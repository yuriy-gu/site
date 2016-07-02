$(document).ready(function(){
	let i = 0;
		$('.1').on('click', function() {
			if (i === 0) {
				$('.footer-left').css({
					display: 'none'
				})
				$('.footer-right').css({
					width: '100%'
				})
		i=0;
		};
	} else {
		$('.footer-left').css({
				display: 'block'
			})
			$('.footer-right').css({
				width: '50%'
			})
		i=1;
	};


});
