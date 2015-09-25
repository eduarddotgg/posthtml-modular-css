# POSTHTML MODULAR CSS
<img align="right" width="57" height="108" title="Dev Kit Main Logo" src="http://adm-designhouse.com/dev-kit-main-logo.png">  

PostHTML Modular CSS is a PostHTML plugin.  
The main idea is to help you make yor css modular.  
With PostHTML it allows to include your css right in html.


## Usage
```js
var gulp = require('gulp');
var posthtml = require('gulp-posthtml');

gulp.task('posthtml', function () {
    var plugins = [
		require('posthtml-modular-css')({
            srcFolder: __dirname + '/webroot/',
            outputCSS: './dest/style.css'
        })
    ];
    var options = {};

    return gulp.src('./webroot/index.html')
        .pipe(posthtml(plugins, options))
        .pipe(gulp.dest('./dest'));
});
```

## Example
```html
/*box.html*/
<css src="css/box.css"></css>
<div class="box">
	<h1>title</h1>
	<p>Some text</p>
</div>

/*box.css*/
.box{
	background: #ccc;
	margin: 0 auto;
	width: 50%;
}
.box h1{
	text-transform: uppercase;
}
```
```html
/*button.html*/
<css src="css/button.css"></css>
<a href="http://best-url-ever.com" class="button">button</a>

/*button.css*/
.button{
	display: block;
	height: 40px;
	line-height: 40px;
	text-align: center;
	width: 200px;
}
```
all included css files will be compiled to external one:
```css
.box{
	background: #ccc;
	margin: 0 auto;
	width: 50%;
}
.box h1{
	text-transform: uppercase;
}
.button{
	display: block;
	height: 40px;
	line-height: 40px;
	text-align: center;
	width: 200px;
}
```

You just keep your css in one place with your html. From now on ther is no need to make separate file with css imports. If you delete  your html file no extra css will be generated.
