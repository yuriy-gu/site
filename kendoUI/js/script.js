var dropDownData = [
	{ name: "Beer", val: 1, manufacturer: 'Beer_TM', price: '456', dateManufacture: '12.05.2016' },
	{ name: "Vine", val: 2, manufacturer: 'Vine_TM', price: '123', dateManufacture: '31.02.2016' },
	{ name: "Сhampagne", val: 3, manufacturer: 'Сhampagne_TM', price: '12', dateManufacture: '24.05.2016' }
];
var dataSource = [
	{ productName: "Tea", category: "Beverages", manufacturer: 'Tea_TM', price: '98', dateManufacture: '08.03.2016' },
	{ productName: "Coffee", category: "Beverages", manufacturer: 'Coffee_TM', price: '65', dateManufacture: '11.10.2016' },
	{ productName: "Ham", category: "Food", manufacturer: 'Ham_TM', price: '45', dateManufacture: '25.06.2016' },
	{ productName: "Bread", category: "Food", manufacturer: 'Bread_TM', price: '15', dateManufacture: '20.09.2016' }
];

$(document).ready(function () {
	 var popup = $("#dialog").kendoWindow({
	 	actions: [ "Minimize", "Maximize" ],
	 	title: 'My popup window',
	 	width: 500,
	 	height: 500,
	 	// position:{
	 	// 	top: 100,
	 	// 	left: '20%'
	 	// }
	 	open: function(e){
	 		e.sender.element.html('<p>some Text</p>');
	 	}
	 });
	 popup.data('kendoWindow').center();//центрирует окно


	 $("#tabstrip").kendoTabStrip({
        animation: {
            // fade-out current tab over 1000 milliseconds
            close: {
                duration: 200,
                effects: "fadeOut"
            },
           // fade-in new tab over 500 milliseconds
           open: {
               duration: 200,
               effects: "fadeIn"
           }
       }
    });





});


