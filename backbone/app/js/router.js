var EmpRoute = Backbone.Router.extend({
	routes:{
		'some':'showSome',//#some
		'someId/:id':'someId',//#someId/5
		'*default':'defaultRoute'//last in list
	},

	showSome:function(){
		console.log('hello');
	},

	someId:function(id){
		console.log(id);
	},

	defaultRoute:function(){
		console.log('defaultRoute');
	}
});

