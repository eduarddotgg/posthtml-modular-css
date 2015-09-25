var concat = require('concat');

module.exports = function(options) {
    options = options || {
        srcFolder: __dirname + 'webroot',
        outputCSS: 'style.css'
    };

    return function(tree){

        var cssFile = [];

        tree.match({ tag: 'css' }, function(node) {
            cssFile.push(options.srcFolder + node.attrs.src);
            return '';
        });

        concat(cssFile, options.outputCSS, function (error) {
            console.log('New ' + options.outputCSS + ' file created');
        });

    };
};
