import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
    return this.store.find('cart', '121243453543534')
	},
	setupController: function(controller, model){
		this._super(controller, model);
		//controller.set('model',model)
	},

});
