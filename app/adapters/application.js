
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: "api/v1.php",
   	buildURL: function() {
        var normalURL = this._super.apply(this, arguments);
        //return normalURL + '.php';
        return 'api/v1.php/app';
    }
});