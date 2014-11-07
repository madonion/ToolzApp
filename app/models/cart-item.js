import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  img: DS.attr('string'),
  /*unic: DS.attr('string'),*/
  codUnic: DS.attr('string'),
  desc: DS.attr('string'),
  qty: DS.attr('number'),
  price: DS.attr('string'),
  cart: DS.belongsTo('cart'),
});
