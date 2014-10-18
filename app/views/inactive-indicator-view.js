import Ember from 'ember';

export default Ember.View.extend({
	attributeBindings: ['dataTarget:data-target', 'dataSlideTo:data-slide-to']
}, {
	tagName: 'li',
	dataTarget: (function() {
		return "#" + this.get('parentView').get('carouselId').toString();
	}).property('parentView.carouselId'),
	dataSlideTo: (function() {
		return this.get('content');
	}).property('content'),
	template: Ember.Handlebars.compile("")
});
