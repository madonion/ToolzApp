import DS from 'ember-data';

export default DS.Model.extend({
	//userId: DS.attr('number'),
	cartItems: DS.hasMany('cartItem'),
});
