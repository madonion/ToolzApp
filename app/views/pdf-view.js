import Ember from 'ember';

export default Ember.View.extend({
  src: 'pdffile.pdf',
  width: 800,
  height: 600,
  didInsertElement: function() {
    new PDFObject({ 
      url: this.get('src'),
      width: this.get('width'),
      height: this.get('height')}
    ).embed(this.get('elementId'));
  }

});


