/*global $:false */
import Ember from 'ember';

export default Ember.Component.extend({
	carouselId: undefined,
	carouselImages: [],
	interval: 5000,
	showCarouselNavs: true,
	showIndicators: true,
	didInsertElement: function() {
		var str;
		str = "#" + this.get('carouselId');
		return $(str).carousel({
			interval: parseInt(this.get('interval'))
		});
	},
	target: (function() {
		return "#" + this.get('carouselId').toString();
	}).property('carouselId'),
	indicators: (function() {
		var arr, i;
		arr = [];
		i = 0;
		if (!Ember.isEmpty(this.get('carouselImages'))) {
			while (i < this.get('carouselImages').get('length')) {
				arr.pushObject(i++);
			}
		}
		return arr;
	}).property('carouselImages'),
	showSingle: (function() {
		if (!Ember.isEmpty(this.get('carouselImages')) && this.get('carouselImages').get('length') === 1) {
			return true;
		} else if (!Ember.isEmpty(this.get('carouselImages')) && this.get('carouselImages').get('length') > 1) {
			return false;
		}
	}).property('carouselImages'),
	noImages: (function() {
		if (Ember.isEmpty(this.get('carouselImages'))) {
			return true;
		}
	}).property('carouselImages')
});

