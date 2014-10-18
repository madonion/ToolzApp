import Ember from 'ember';
import { configurable } from 'torii/configuration';

// The GitHub OAuth URL that will open in the popup.
var DEFAULT_BASE_URL = 'https://github.com/login/oauth/authorize';

// The parameters we’re expecting GitHub to send back if and when the user
// agrees to grant our app access.
var RESPONSE_PARAMS = ['code', 'state'];

// Error message for when the a dodgy state is detected.
var STATE_ERROR = 'State does not match. The GitHub OAuth2 response cannot be trusted.';

// Our Torii GitHub OAuth2 provider.
export default Ember.Object.extend({
  // The name of the provider.
  name: 'github',
  // Path to configuration in the environment’s Torii config.
  configNamespace: 'providers.github',

  // Base URL of the OAuth page with default.
  baseUrl: configurable('baseUrl', DEFAULT_BASE_URL),
  // Client ID of our GitHub application.
  clientId: configurable('clientId'),
  // Redirect URI registered with out GitHub application.
  redirectUri: configurable('redirectUri'),
  // GitHub scope we want granted.
  scope: configurable('scope', null),

  // The core of our provider, the open method opens the popup and handles the response.
  open: function() {
    // Grab the configured params.
    var params = this.getProperties(
      'clientId',
      'redirectUri',
      'scope'
    );
    // Generate a random non-guessable state code.
    var state = uuid.v4();
    // Add the code to our params hash.
    params.state = state;
    // Use the buildUrl helper (below) to build a URL for our popup.
    var url = buildUrl(this.get('baseUrl'), params);

    // Call `open` on the injected `popup` object passing the URL and expected response params.
    return this.get('popup').open(url, RESPONSE_PARAMS)
      .then(function(authData) {
        // If the returned state matches the one we sent over, resolve with authData.
        // Otherwise, throw an error.
        if (authData.state === state) {
        // Adaugam in obiect github
          authData.provider='github';
          return authData;
        } else {
          throw new Error(STATE_ERROR);
        }
      });
  }
});

// Concats baseUrl and querystring-ified params.
function buildUrl(baseUrl, params) {
  return baseUrl + buildQueryString(params);
}

// Takes a hash of params and creates a querystring with underscored_keys.
function buildQueryString(object) {
  var result = {};

  Ember.keys(object).forEach(function(key) {
    result[key.underscore()] = object[key];
  }, this);

  return '?' + Ember.$.param(result);
}
