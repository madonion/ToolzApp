import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
      /*return this.store.find('application',"app.php");*/
      	//am modificat catalog in catalogs
    	return this.store.find('catalog',params.catalog_id);
	},
	serialize:function(model){
		return { catalog_id: model.id };
	}

});
