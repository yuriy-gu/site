var empModel = new EmpModel();
var empView = new EmpView({model: empModel});
var empRouter = new EmpRouter();
Backbone.history.start();
var empCollection = new EmpCollection();
empView.render('peopleWrapTpl');
empCollection.add([empModel]);