import Ember from 'ember';
import inactiveCarouselItemView from "./inactive-carousel-item-view";
import activeCarouselItemView from "./active-carousel-item-view";

export default Ember.CollectionView.extend({
	content: undefined,
	classNames: ['carousel-inner'],
	createChildView: function(viewClass, attrs) {
		if (this.get('content').indexOf(attrs.content) === 0) {
			viewClass = activeCarouselItemView;
		} else {
			viewClass = inactiveCarouselItemView;
		}
		return this._super(viewClass, attrs);
	}
});
