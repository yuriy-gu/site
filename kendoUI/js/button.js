$(document).ready(function () {
	$('#button').kendoButton({
		icon: "cancel",
		//imageUrl: '/img/asd.jpg',
		//spriteCssClass: "myEditIcon",
		click: function(e) {
        alert(e.event.target.tagName);
    }
	});
})