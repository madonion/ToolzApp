import Ember from 'ember';

export default Ember.Controller.extend({
  find: function (){
    var accessToken = localStorage.accessToken;
    // Set some default properties here.
    var promise = $.ajax({
          url: '/resources/v1.php/me',
          type: 'POST',
          data: { accessToken: accessToken }
      }).then(function(json) {
      // continue
      Ember.Logger.info(json)
      localStorage.userData = JSON.stringify(json);
      return json;
    }, function(error) {
      // handle errors
    });

      return promise;
  }
});