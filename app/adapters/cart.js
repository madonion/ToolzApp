import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	namespace: "api/v1.php",
   	buildURL: function() {
        var normalURL = this._super.apply(this, arguments);
        return normalURL.substring(0,normalURL.length - 4);
    }
});
