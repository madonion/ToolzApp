import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['userData'],
   
  currentUser: function(){
      var userDataController = this.get('controllers.userData');
            
      this.set('user', userDataController.find());
      		
  	}.property(),
  	email:'',
  	password:'',

  actions: {

  }
	
});
