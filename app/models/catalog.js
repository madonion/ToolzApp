import DS from 'ember-data';

export default DS.Model.extend({
	cname: 	DS.attr(),
	links: 	DS.attr(),
	bc: 	DS.attr(),
	isType2:DS.attr()
});
