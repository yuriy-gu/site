var EmpView = Backbone.View.extend({
	el: '#app',
	peopleWrapTpl: _.template( $('#people_wrap').html() ),
	onePersonTpl: _.template( $('#item-onePerson').html() ),
	//onePeopleTableTpl: _.template( $('#item-onePerson_table').html() ),
	personInfoTpl: _.template( $('#full-template').html() ),
	render: function(tpl){
		var content = this[tpl]();
			this.$el.html(content);
	},
	makeList: function(person) {
		if (person) {
			var content = this.onePersonTpl(person);
			//debugger;
			person.attributes.cid = person.cid;
			this.$el.find('#emp_list').append(content)
		} else {
			_.each(empCollection.models, function(el){
				var content = this.onePersonTpl(el.toJSON());
				this.$el.find('#emp_list').append(content);
			}, this);
		}
	},
	makeTable: function() {
		_.each(empCollection.models, function(el){
			//var content = this.onePeopleTableTpl(el.toJSON());
			this.$el.find('#empTable').append(content);
		}, this);
	},
	events: {
		'click #edit': 'edit',
		'click #add': 'add',
		'click #save': 'save'
	},
	edit: function(e) {
		var model_id = $(e.target).data('model'),
			model_data = empCollection.get(model_id).toJSON(),
			model_content = this.personInfoTpl(model_data);
		$('#fullInfo').html(model_content);
	},
	add: function(e) {
		
		empCollection.add({});
	},
	save: function(e) {
		var model_id = $(e.target).data('model');
		var fields = $('.require');
		var data = {};
		_.each(fields, function(el) {
			var $el = $(el);
			var name = $el.attr('id');
			data[name] = $el.val();
		});
		data.id = model_id;
		empCollection.add(data, {merge: true})
	}
});