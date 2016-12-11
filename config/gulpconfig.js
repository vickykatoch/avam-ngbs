var path = require('path');

module.exports = (function(){

      return {
            root : path.join(__dirname,'../'),
            bsPath : path.join(__dirname,'../bsp-override'),
            styleTarget: path.join(__dirname,'../styles'),
            strategy : path.join(__dirname,'../app/components')
      };
})();