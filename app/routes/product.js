import Ember from 'ember';
import LazyLoaderMixin from '../mixins/product';

export default Ember.Route.extend(LazyLoaderMixin,{
	model: function(params){

    return this.store.find('product', params.product_id);
	},
	serialize:function(model){
		return { product_id: model.id };
	}


});
