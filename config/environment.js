/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'toolz-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {
      // Torii’s configurable function makes these available in the provider.
      providers: {
        github: {
          clientId: "31b328b5462145ab7119",
          redirectUri: 'http://localhost:4200/'
        },
        facebook: {
          clientId: "706499519421370",
          redirectUri: 'http://localhost:4200/'
        },
        google: {
          clientId: "1002482822828-uchurr4rchc38hdh9scqv36c60hq30gb.apps.googleusercontent.com",
          redirectUri: 'http://localhost:4200/',
          scope:"email"
        },
        local: {
          clientId: "1002482822828-uchurr4rchc38hdh9scqv36c60hq30gb.apps.googleusercontent.com",
          redirectUri: 'http://localhost:4200/',
          scope:"email"
        }
      },
      // If sessionServiceName is not set, service will not be injected.
      sessionServiceName: 'session'
    }
  };

  ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
