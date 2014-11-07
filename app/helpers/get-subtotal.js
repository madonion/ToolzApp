import Ember from 'ember';

function getSubtotal(value) {
	var qty = parseInt(value.get('qty'));
	var price = parseInt(value.get('price'));
  return qty*price+' Lei';
}

export {
  getSubtotal
};

export default Ember.Handlebars.makeBoundHelper(getSubtotal);
