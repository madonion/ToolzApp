import Ember from 'ember';

export default Ember.Controller.extend({
  authenticator: 'authenticator:custom',
  actions: {
  	contNou: function (){
  		this.transitionToRoute('contNou')
  	},
  	 sWToolz: function() {
      /*ugly!!!*/
      window.uglyhackemail = this.get('email');
      window.uglyhackpassw = this.get('password');
      this.get('session').open('toolz')
        .then(Ember.run.bind(this, function() {
          this.controllerFor('application').initialiseCurrentUser();
          this.transitionTo('index');
        }));
    },
    sWFacebook: function() {
      this.get('session').open('facebook')
        .then(Ember.run.bind(this, function() {
          this.controllerFor('application').initialiseCurrentUser();
          this.transitionTo('index');
        }));
    },
    sWGoogle: function() {
      var that = this;
      this.get('session').open('google')
        .then(Ember.run.bind(this, function() {
          this.controllerFor('application').initialiseCurrentUser();
          this.transitionTo('index');
        }));
    },
  }
});
