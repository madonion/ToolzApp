/*global $:false */
import Ember from 'ember';

 var LazyLoaderMixin = Ember.Mixin.create({
  beforeModel: function(){
    var scriptName = '/js/'+this.get('routeName')+'.js';
    if (!LazyLoaderMixin.loaded[scriptName]) {
      return $.getScript(scriptName).then(function(){ // getScript is in jQuery
        LazyLoaderMixin.loaded[scriptName] = true;
      });
    }
  }

});

export default LazyLoaderMixin;

LazyLoaderMixin.loaded = [];

Ember.View.reopen({
	didInsertElement : function(){
    if($('#main-pic .simpleLens-thumbnails-container').length){
					$('#main-pic .simpleLens-thumbnails-container img').simpleGallery({
						loading_image: 'images/loading.gif'});
					$('#main-pic .simpleLens-big-image').simpleLens({
						loading_image: 'images/loading.gif'});
        }
	}
});