import Ember from 'ember';

export default Ember.CollectionView.extend({
	classNames:['row'],
	itemViewClass: Ember.View.extend({
		templateName: 'productSingleView'
	})
});

