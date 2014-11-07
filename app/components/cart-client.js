import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		$("#cartnclient").mouseenter(function() {
    		$("#xtra-cart").show()
  		})
  		.mouseleave(function() {
    		$("#xtra-cart").hide();
  		})
	},
	actions: {
		signInWithGoogle: function(){
			this.sendAction('sWGoogle');
		},
		signInWithFacebook: function(){
			this.sendAction('sWFacebook');
		},
		signInWithToolz: function(){
			this.sendAction('sWToolz');
		},
		contulMeu: function(){
			this.sendAction('goTo','contulMeu');
		},
		cosulMeu: function(){
			this.sendAction('goTo','cart');
		},
		login: function(){
			this.sendAction('goTo','login');
		},
	}
});
