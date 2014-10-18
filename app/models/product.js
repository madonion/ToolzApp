import DS from 'ember-data';

 var Produs = DS.Model.extend({
  article: DS.attr(), 
  title:	DS.attr("string"),
  seoDesc: 	DS.attr("string"),
  imgBrand: DS.attr("string"),
  code:		DS.attr("string"),
  rating:	DS.attr("number"),
  desc:		DS.attr("string"),
  img1:		DS.attr("string"),
  img2:		DS.attr("string"),
  img3:		DS.attr("string"),
  img4:		DS.attr("string"),
});

export default Produs;