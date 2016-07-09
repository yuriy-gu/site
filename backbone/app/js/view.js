var TodosView = Backbone.View.extend({
	//el: '#app',
	el: '#test',
	allPersonTpl: _.template( $('#item-template').html() ),
	onePersonTpl: _.template( $('#item-onePerson').html() ),
	personInfoTpl: _.template( $('#full-template').html() ),
	tagName: 'li',
	className: 'container',
	id: 'todos',

	//its for: var todosView = new TodosView({model: myTodo});
	/*render:function(){
		this.$el.html('<h1>hello</h1>');
	},*/
	

	//todoTpl: _.template($('#item-template').html()),
	
	render:function(){
		var content = this.allPersonTpl(this.model.toJSON());
		this.$el.append(content)
	},
	makeList: function(person) {
	  	var content = this.onePersonTpl(person);
	  	this.$el.find('.emp_wrap').append(content)
	},
	events: {
	 	'click .edit': 'edit',
	 	'click #add': 'add',
	 	'click .save': 'save'
	},

	edit:function(e) {
		var dataModel = $(e.target).data('model');
		var model = todosCollection.get(dataModel);
	}

	add: function(e) {
		var id = todosCollection.models.length + 1;
		todosCollection.add({id: 2});
	}

	//events:{
	//	'click #button': 'toggleCompleted'
	//},
	//toggleCompleted: function(e){
	//	alert('message');
	//}

});

//its for el, tagName, className, id
//var todosView = new TodosView();
//console.log(todosView);

//its for render
var todosView = new TodosView({model: myTodo});
todosView.render();