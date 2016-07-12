var EmpModel = Backbone.Model.extend({
	defaults: {
		name: '',
		age: '',
		experience: '',
		adress: ''
 	},
	initialize: function(){
		console.log('This model has been initialized.');
		this.on('invalid', function(model, error){
			console.log(error);
		});
	},
 	validate: function(attribs){
 		if(attribs.id === undefined){
 			return "Remember to set a id for your model.";
 		}
 	}
});