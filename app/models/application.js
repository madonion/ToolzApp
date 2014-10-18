import DS from 'ember-data';

var Application = DS.Model.extend({
    links: DS.attr(),
    specials: DS.attr(),
    bestsellers: DS.attr()
});


export default Application;