import Ember from 'ember';


// Our Torii localAuth OAuth2 provider.
export default Ember.Object.extend({


  // The core of our provider, the open method opens the popup and handles the response.
  open: function() {

    var promised = new Ember.RSVP.Promise(function(resolve, reject){
      var authData = {};
      authData.email = window.uglyhackemail;
      delete window.uglyhackemail;
      authData.password = window.uglyhackpassw;
      delete window.uglyhackpassw;
      authData.provider='local';
      resolve(authData)
    });


    // Call `open` on the injected `popup` object passing the URL and expected response params.
    return promised.then(function(authData) {
          return authData;
      });
  }
});

