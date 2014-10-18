import Ember from 'ember';

function successfulPromise(delay, result){
  return new Ember.RSVP.Promise(function(resolve, reject){
    Ember.run.later(null, resolve, result, delay);
  });
}

function failurePromise(delay, reason){
  return new Ember.RSVP.Promise(function(resolve, reject){
    Ember.run.later(null, reject, reason, delay);
  });
}

// The PromiseProxyMixin-capable object
var Promiseable = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

export default Ember.Controller.extend({
  // exchange token for user
  find: function() {
    var promise, failure, failureReason,delay,
        userData;
     //TODO: mai avem de slefuit aici...
    var userData = localStorage.userData; 
    var accessToken = localStorage.accessToken;
    Ember.Logger.info('accessToken',accessToken)
	if (accessToken) {
		$.ajax({
          url: '/api/v1.php/me',
          type: 'POST',
          data: { accessToken: accessToken },
          async: false
	    })
	    .done(function(result){
	    	//Ember.Logger.info('resolve',result);	
	    	localStorage.userData = result;
	    	userData = result;
	    });
	    
	}

    if (failure){
      promise = failurePromise(delay, failureReason);
    } else {
      promise = successfulPromise(delay, userData);
    }

    return Promiseable.create({promise:promise});
  }

});
