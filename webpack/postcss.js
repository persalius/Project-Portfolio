const autoprefixer = require('autoprefixer');

module.exports = function() {
    return {
        postcss: function () {
            return [autoprefixer];
          }       
    }
}