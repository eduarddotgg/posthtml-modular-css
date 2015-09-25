var concat = require('concat');//
module.exports = function(options) {
    options = options || {
        outputCSS: 'style.css'
    };

    return function(tree){

        var cssFile = [];

        tree.match({ tag: 'css' }, function(node) {
            cssFile.push(node.attrs.src);
            return '';
        });

        concat(cssFile, options.outputCSS, function (error) {
            console.log('css file create d');
        });

    };
};
