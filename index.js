var concat = require('concat');//
module.exports = function(tree) {
	// options = options || {
		// outputCSS: 'style.css'
	// };

	return function(tree){

		var cssFile = []

	    tree.walk(function(node) {
	        if (node.tag == 'css') {
				cssFile.push(node.attrs.src);
				console.log(node.tag);
	        }
	        return '';
	    });

		concat(cssFile, 'style.css', function (error) {
  	// 		console.log('css file created');
		});

	}
}
