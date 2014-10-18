import Ember from 'ember';
import activeIndicatorView from "./active-indicator-view";
import inactiveIndicatorView from "./inactive-indicator-view";

export default Ember.CollectionView.extend({
	tagName: 'ol',
	classNames: ['carousel-indicators'],
	carouselId: undefined,
	content: undefined,
	indicatorClass: undefined,
	createChildView: function(viewClass, attrs) {
		if (attrs.content === 0) {
			viewClass = activeIndicatorView;
		} else {
			viewClass = inactiveIndicatorView;
		}
		return this._super(viewClass, attrs);
	}
});
