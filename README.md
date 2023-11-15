# ziba.js

**ziba.js** is a JavaScript implementation of a **ziba markup** renderer.

**ziba markup** is a set of HTML tags designed to help better use HTML as a **document** format (rather than a cross-platform application format).

## Example

Here is an example usage of **ziba.js**:

```html
<!DOCTYPE html>
<html>
	<body>
		<div id="main">
			<p>
				Hello world!
			</p>
			<p>
				Here is a ziba-link to my <ziba-link>resume</ziba-link>.
				That ziba-link will get turned into <a href="resume">resume</a>.
				Notice that the text and the href are the same.
			</p>
			<p>
				Here is another one <ziba-link title="four">fource</ziba-link>
				This ziba tag will get turned into <a href="four">fource</a>
				Notice that the href now has the value of the title of the ziba-link
			</p>
			<p>
				ziba-link is design to work for only local links.
			</p>
		</div>

		<script type="module">
			import * as ziba from "./ziba.js" // <--- Your path of ziba.js might be different.

			const rootElement = document.getElementById("main")

			ziba.transform(rootElement)
		</script>
	</body>
</html>
```

## Tags

* `<ziba-link>` — used for local links.

## Import

To import module **ziba** use `import` code like the following:
```javascript
import * as ziba from "./ziba.js" // <--- Your path of ziba.js might be different.
```

## Author

Module **ziba** was written by [Charles Iliya Krempeaux](http://changelog.ca)
