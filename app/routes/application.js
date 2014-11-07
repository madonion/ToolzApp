import Ember from 'ember';


export default Ember.Route.extend({

  // Before we enter any sub-routes, attempt to fetch the session.
  // If fetching fails, transition directly to the sign-in route.
  beforeModel: function() {
    return this.get('session').fetch()
      .catch(Ember.run.bind(this, function() {
      }));
  },
  model:function () { 
    this.controllerFor('application').initialiseCurrentUser();
    //this.controllerFor('application').get('currentUser');
    return this.store.find('application',"app");
  },
  afterModel: function(){
    this.controllerFor('cart').cartItemsCount();
    this.controllerFor('cart').cartTotalCount();
  },

  actions: {
    // Call open on the session. If successful, transition to the index route.
    sWGitHub: function() {
      this.get('session').open('github')
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
    sWYahoo: function() {
      this.get('session').open('yahoo')
        .then(Ember.run.bind(this, function() {
          this.controllerFor('application').initialiseCurrentUser();
          this.transitionTo('index');
        }));
    },
    sWLinkedIn: function() {
      this.get('session').open('linkedIn')
        .then(Ember.run.bind(this, function() {
          this.controllerFor('application').initialiseCurrentUser();
          this.transitionTo('index');
        }));
    },
    sWToolz: function() {
      /*ugly!!!*/
      window.uglyhackemail = this.controller.get('email');
      window.uglyhackpassw = this.controller.get('password');
      this.get('session').open('toolz')
        .then(Ember.run.bind(this, function() {
          this.controllerFor('application').initialiseCurrentUser();
          this.transitionTo('index');
        }));
    },
    goTo: function(where){
      this.transitionTo(where)
    },
    addCartItem: function (item,qty,price){
      var cart = this.controllerFor('cart');
      var attrs = {};
      var model = this.modelFor('product');
      attrs.item = item;
      attrs.qty = qty;
      attrs.name = model.get('article.name');
      attrs.desc = model.get('article.desc');
      attrs.code = model.get('article.code');
      attrs.img = model.get('article.img1');
      attrs.price = price;
      //debugger;
      cart.addCartItem(attrs);
    },

  

    // Call close on the session. If successful, transition to the sign-in route.
    deauthenticate: function() {
      this.get('session').close()
        .then(Ember.run.bind(this, function() {
          this.controllerFor('application').set('user',null);
          this.transitionTo('login');
        }));
    }
  }
});
