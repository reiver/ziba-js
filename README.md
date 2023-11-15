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
			Hello world!

			Here is a ziba-link to my rsume: <ziba-link>resume</ziba-link>
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
