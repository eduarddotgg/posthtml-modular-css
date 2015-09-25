# POSTHTML MODULAR CSS
PostHTML modular css plugin will collect all you included css and compile it to output file.


```html
/*box.html*/
<css src="css/box.css"></css>
<div class="box">
	<h1>title</h1>
	<p>Some text</p>
</div>

/*button.html*/
<css src="css/button.css"></css>
<a href="http://best-url-ever.com">button</a>
```
will compile to:
```html
<head>
	<link rel="stylesheet" href="style.css">
</head>
```

You just keep your css in one place with your html. From now on ther is no need to make separate file with css imports. If you delete  your html file no extra css will be generated.
