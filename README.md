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
				That ziba-link will get turned into <a href="./resume">resume</a>.
				Notice that the text and the href are the same.
			</p>
			<p>
				Here is another one <ziba-link name="four">fource</ziba-link>
				This ziba tag will get turned into <a href="./four">fource</a>
				Notice that the href now has the value of the title of the ziba-link
			</p>
			<p>
				<ziba-link transform="lowercase">once Twice tHRICE FOURCE</ziba-link> should become <a href="./once twice thrice fource">once Twice tHRICE FOURCE</a>
			</p>
			<p>
				<ziba-link transform="uppercase">once Twice tHRICE FOURCE</ziba-link> should become <a href="./ONCE TWICE THRICE FOURCE">once Twice tHRICE FOURCE</a>
			</p>
			<p>
				<ziba-link transform="lowersnakecase">once Twice tHRICE FOURCE</ziba-link> should become <a href="./once_twice_thrice_fource">once Twice tHRICE FOURCE</a>
			</p>
			<p>
				<ziba-link transform="uppersnakecase">once Twice tHRICE FOURCE</ziba-link> should become <a href="./ONCE_TWICE_THRICE_FOURCE">once Twice tHRICE FOURCE</a>
			</p>
			<p>
				<ziba-link transform="lowerllamacase">once Twice tHRICE FOURCE</ziba-link> should become <a href="./oncetwicethricefource">once Twice tHRICE FOURCE</a>
			</p>
			<p>
				<ziba-link transform="upperllamacase">once Twice tHRICE FOURCE</ziba-link> should become <a href="./ONCETWICETHRICEFOURCE">once Twice tHRICE FOURCE</a>
			</p>
			<p>
				<ziba-link dir="apple Banana CHERRY">>once Twice tHRICE FOURCE</ziba-link> should become <a href="./apple Banana CHERRY/once twice thrice fource">once Twice tHRICE FOURCE</a>
			</p>
			<p>
				ziba-link is designed to work for only local links.
			</p>
		</div>

		<script type="module">
			import * as ziba from "./ziba.js" // <--- Your path of ziba.js might be different.

			const rootElement = document.getElementById("main") // <--- the HTML element you get will probably be different than this.

			ziba.transform(rootElement)
		</script>
	</body>
</html>
```

## Tags

* `<ziba-link>` — used for local links.
  * attributes:
    * `dir`
    * `name`
    * `transform` — possible values: `"lowercase"`, `"uppercase"`, `"lowerllamacase"`, `"upperllamacase"`, `"lowersnakecase"`, `"uppersnakecase"`, `"lowerslugcase"`, `"upperslugcase"`

## Import

To import module **ziba** use `import` code like the following:
```javascript
import * as ziba from "./ziba.js" // <--- Your path of ziba.js might be different.
```

## Author

Module **ziba** was written by [Charles Iliya Krempeaux](http://changelog.ca)
