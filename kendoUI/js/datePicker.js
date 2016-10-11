$(document).ready(function () {
	 $("#datePicker").kendoDatePicker({
	 	value: new Date(),
	 	format: "dd/MM/yyyy",
	 	disableDates: ["we", "th"]
	 });
});