var Todo = Backbone.Model.extend({
	initialize: function() {
		//console.log('This model has been initialized.');
		/*this.on('change', function(){
			console.log('-Values for this model have changed.')
		});*/
		this.on('change:completed', function(){
			console.log('-Values for this model have changed.')
		}),

		this.on('invalid', function(model, error){// its for: myTodo.qwerty(undefined);
			console.log(error);
		});
},

	/*qwerty:function(){
		this.set('completed', true);
	},*/

	qwerty:function(val){// its for: myTodo.qwerty(undefined);
		this.set('title', val, {validate:true});
	},


	validate:function(attr){// its for: myTodo.qwerty(undefined);
		if(attr.title === undefined){
			return 'Remember to set a title for your todo'
		}
	},

	defaults:{
		title:'Ivan',
		completed: false,
		id: 1
	}

});
var myTodo = new Todo();
// var myTodo2 = new Todo({title:true});
// var myTodo3 = new Todo({name:'Ivan'});

/*console.log(myTodo);
console.log(myTodo2);
console.log(myTodo3);
console.log(myTodo.get('title'));
console.log(myTodo2.get('title'));*/

/*myTodo.get('title');
myTodo.set('title','qwerty');//change title: true to qwerty
console.log(myTodo);*/

//console.log(myTodo.toJSON());//Object {title: "", completed: false}

//myTodo.set('title','qwerty');// its for: this.on('change', function(){...

//myTodo.set('title','qwerty');// its for: this.on('change:title', function(){

//myTodo.qwerty();// its for qwerty:function

//myTodo.qwerty(undefined);// validate works only if attr.title === undefined