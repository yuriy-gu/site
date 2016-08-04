$(document).ready(function () {
	$("#grid").kendoGrid({
    //selectable: "multiple cell",
    //allowCopy: true,
    groupable: true,//сортирует по thead
    selectable: true,//выделять строки
    editable: true,//позволяет радактировать содержимое таблицы
    columns: [
        { field: "productName", 
        	template: function(e) {
        		if(!e.dirty) {
        			e.dirty = true;
        			return e.productName
        		} else {
        			var data = dropDownData.filter(function(el) {
        				if(el.val == e.productName) {
        					return el;
        				}
        			})
        		return data.length?data[0].name:"";
        		}
        	},
        	editor: function(container, options) {
        		var input = $('<input/>');
        		input.attr('name', options.field);
        		input.appendTo(container);
        		input.kendoDropDownList({
        			dataTextField: 'name',
        			dataValueField: 'val',
        			dataSource: dropDownData//берем из script.js
        		});
        	}
    	},
        { field: "category",
        	attributes: {
        		'class':'table-cell',
        		style:'text-align: right; font-size: 14px'
        	} }
    ],
    dataSource: [
        { productName: "Tea", category: "Beverages" },
        { productName: "Coffee", category: "Beverages" },
        { productName: "Ham", category: "Food" },
        { productName: "Bread", category: "Food" }
    ]
});
});