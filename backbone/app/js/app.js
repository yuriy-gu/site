var empModel = new EmpModel();
var empView = new EmpView({model: empModel});
var empCollection = new EmpCollection();
empView.render('peopleWrapTpl');
empCollection.add([empModel]);