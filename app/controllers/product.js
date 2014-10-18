/*global Handlebars:false */
import Ember from 'ember';

export default Ember.Controller.extend({
	tabsMeta: Ember.A([
        Ember.Object.create({ title: 'Dimensiuni', template: 'product/dimensiuni-tabpane', controller: 'productController'}),
        Ember.Object.create({ title: 'Detalii tehnice', template: 'product/detalii-tabpane'}),
        Ember.Object.create({ title: 'Informatii aditionale', template: 'product/informatii-tabpane'}),
        Ember.Object.create({ title: 'Protectia muncii', template: 'product/protectia-muncii-tabpane'}),
        Ember.Object.create({ title: 'Accesorii', template: 'product/accesorii-tabpane'}),
        Ember.Object.create({ title: 'Piese schimb', template: 'product/piese-schimb-tabpane'}),
        Ember.Object.create({ title: 'producte alternative', template: 'product/produse-alternative-tabpane'}),
        
	]),
	selectie:'',
	imgArr: function(){
	//Ember.Logger.error(this.get("model.img1"));
	var pathl="/lib/phpThumb/phpThumb.php?src=/poze/";
	var pathm="/lib/phpThumb/phpThumb.php?src=/poze/";
	var patht="/lib/phpThumb/phpThumb.php?src=/poze/";
	return {
		"l1":pathl + this.get("model.article.img1")+'&w=1000&h=1000&far=C',
		"l2":pathl + this.get("model.article.img2")+'&w=1000&h=1000&far=C',
		"l3":pathl + this.get("model.article.img3")+'&w=1000&h=1000&far=C',
		"l4":pathl + this.get("model.article.img4")+'&w=1000&h=1000&far=C',
		"m1":pathm + this.get("model.article.img1")+'&w=520&h=520&far=C',
		"m2":pathm + this.get("model.article.img2")+'&w=520&h=520&far=C',
		"m3":pathm + this.get("model.article.img3")+'&w=520&h=520&far=C',
		"m4":patht + this.get("model.article.img4")+'&w=520&h=520&far=C',
		"t1":patht + this.get("model.article.img1")+'&w=66&h=66&far=C',
		"t2":patht + this.get("model.article.img2")+'&w=66&h=66&far=C',
		"t3":patht + this.get("model.article.img3")+'&w=66&h=66&far=C',
		"t4":patht + this.get("model.article.img4")+'&w=66&h=66&far=C'	
		};}.property('model.data.img1')	
});

Ember.Handlebars.helper('escapeHtml', function(value) {
  return new Handlebars.SafeString(value);
});