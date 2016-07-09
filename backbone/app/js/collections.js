var TodosCollection = Backbone.Collection.extend({
	model: Todo,//take it from model.js
	initialize: function() {
		this.add(new Todo());
		this.on('add', function(person) {
			todosView.makeList(person);
		});
	}
});

// var a = new Todo({title:'Go to Jamaica.', id:2});
var todosCollection = new TodosCollection();
// console.log(todosCollection);

// var B = new Todo({title:'sOME TITLE', id:3});
// todosCollection.add(B);
// todosCollection.remove(2);
// console.log(todosCollection.get(3));
// console.log(todosCollection.length);