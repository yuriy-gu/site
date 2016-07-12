var EmpCollection = Backbone.Collection.extend({
	model: EmpModel,
	initialize: function() {
		this.on('add', function(person) {
			person.attributes.id = person.cid;
			empView.makeList(person);
		});
	}
});