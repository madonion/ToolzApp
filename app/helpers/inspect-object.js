import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(obj) {
  return new Handlebars.SafeString(JSON.stringify(obj));
});
