$(document).ready(function () {
	 $("#dropDownList").kendoDropDownList({
	 	dataSource: ["One", "Two"],
	 	animation: {
	 		open: {
	 			effects: 'fadeIn zoom:in',
	 			duration: 300
	 		},
	 		close: {
     			effects: "fadeOut zoom:out",
     			duration: 300
   			}
	 	}
	 });
});