import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['userData','cart'],
  initialiseCurrentUser: function(){
      var userDataController = this.get('controllers.userData');
      //console.log('run')
      var _this = this;
      userDataController.find().then(
	      	function(data){
	      		if ((typeof data) === 'string'){
       				 var parsed = JSON.parse(data);
       				   		_this.set('user',parsed);  
      			}else{
      	  		_this.set('user',data);
      			}
	      	}
      	);
      /*AICI*/
  	},
  actions: {

  }
	
});
