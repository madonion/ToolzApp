import Ember from 'ember';

export default Ember.View.extend({
	classNames: ['item'],
	template: Ember.Handlebars.compile("<img {{bind-attr src='view.content'}}>")
});
