import Ember from 'ember';

export default Ember.Route.extend({
  // If the session is already authenticated, transition to the index route.
  beforeModel: function() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  }
});
