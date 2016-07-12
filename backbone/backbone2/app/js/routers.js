var EmpRouter = Backbone.Router.extend({
	routes: {
		'employeesList' : 'employeesList',
		'employeesTable' : 'employeesTable'
	},
	employeesList: function() {
		empView.render('peopleWrapTpl');
		empView.makeList();
	},
	employeesTable: function(){
		empView.render('peopleWrapTableTpl');
		empView.makeTable();
	}
});

