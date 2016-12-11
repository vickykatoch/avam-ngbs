var path = require('path');

module.exports = (function(){

      return {
            root : path.join(__dirname,'../'),
            strategy : path.join(__dirname,'../app/components/strategy')
      };
})();