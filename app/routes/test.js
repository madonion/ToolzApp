import Ember from 'ember';


export default Ember.Route.extend({
	 model: function() {
    return ['red', 'yellow', 'blue'];
  },
  setupController: function(controller,model){
	  controller.set('model',model);
	  controller.set('carouselImages',['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']);
	  controller.set('carouselImagesSingle',['img/1.jpg']);
  }
});
