import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: "resources",
   	buildURL: function() {
        var normalURL = this._super.apply(this, arguments);
        return normalURL + '.php';
    }
});
