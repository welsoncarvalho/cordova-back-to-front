var exec = require('cordova/exec');

/*exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'back-to-front', 'coolMethod', [arg0]);
};*/

var PLUGIN_NAME = 'BackToFrontPlugin';

var BackToFrontPlugin = {
    toFront: function() {
        exec(null, null, PLUGIN_NAME, 'toFront', []);
    }
};

module.exports = BackToFrontPlugin;