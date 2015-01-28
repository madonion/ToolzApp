import Ember from 'ember';
import ajax from 'ic-ajax';
var Promise = Ember.RSVP.Promise;

// Our Torii adapter.
export default Ember.Object.extend({
  // Sends auth data to our API to be exchanged for an access token.
  open: function(authData) {
    //console.log(authData);
    return ajax({
      url: 'resources/v1.php/authorise',
      type: 'POST',
      data: authData
    }).then(function(data) {
      if ((typeof data) === 'string'){
        var response = JSON.parse(data);
        // Grab the access token from response data.
        var accessToken = response.access_token;
      }else{
      // Grab the access token from response data.
      var accessToken = data.access_token;        
      }
      //debugger;
      // Store the access token in local storage.
      localStorage.accessToken = accessToken;
      // Resolve with the access token.
      return { accessToken: accessToken };
    });
  },

  // Attempts to find an existing session in local storage.
  fetch: function() {
    var accessToken = localStorage.accessToken;
    // If we already have an access token, resolve in the affirmative.
    // Otherwise reject.
    if (accessToken) {
      return Promise.resolve({ accessToken: accessToken });
    } else {
      return Promise.reject();
    }
  },

  // Clears the sesson out of local storage then resolves.
  close: function() {
    delete localStorage.accessToken;
    return Promise.resolve();
  }
});
