var path = require('path');

module.exports = (function(){

      return {
            root : path.join(__dirname,'../'),
            bsPath : path.join(__dirname,'../bsp-override'),
            styleTarget: path.join(__dirname,'../styles'),
            bsStyleTarget: path.join(__dirname,'../bstyles'),
            layout : path.join(__dirname,'../bstyles'),
            components : path.join(__dirname,'../app/components')
      };
})();