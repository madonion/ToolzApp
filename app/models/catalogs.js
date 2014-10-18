import DS from 'ember-data';

export default DS.Model.extend({
	items: 	DS.attr(),
  	title: 	DS.attr(),
  	link: 	DS.attr(),
  	img:	DS.attr(),

});