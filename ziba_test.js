import * as ziba from "./ziba.js"

export function test() {
	testTransform()
}

function testTransform() {

	const tests = [
		{
			html:"",
			expected:"",
		},



		{
			html:'<ziba-link></ziba-link>',
			expected:'<a href="./"></a>',
		},



		{
			html:'<ziba-link>apple</ziba-link>',
			expected:'<a href="./apple">apple</a>',
		},
		{
			html:'<ziba-link>banana</ziba-link>',
			expected:'<a href="./banana">banana</a>',
		},
		{
			html:'<ziba-link>cherry</ziba-link>',
			expected:'<a href="./cherry">cherry</a>',
		},



		{
			html:'<ziba-link>ONCE TWICE THRICE FOURCE</ziba-link>',
			expected:'<a href="./ONCE TWICE THRICE FOURCE">ONCE TWICE THRICE FOURCE</a>',
		},



		{
			html:'<ziba-link name="one">once</ziba-link>',
			expected:'<a href="./one">once</a>',
		},
		{
			html:'<ziba-link name="two">twice</ziba-link>',
			expected:'<a href="./two">twice</a>',
		},
		{
			html:'<ziba-link name="three">thrice</ziba-link>',
			expected:'<a href="./three">thrice</a>',
		},
		{
			html:'<ziba-link name="four">fource</ziba-link>',
			expected:'<a href="./four">fource</a>',
		},



		{
			html:'<ziba-link name="1 2 3 4">ONCE TWICE THRICE FOURCE</ziba-link>',
			expected:'<a href="./1 2 3 4">ONCE TWICE THRICE FOURCE</a>',
		},



		{
			html:'<ul><li><ziba-link>one</ziba-link></li><li><ziba-link>two</ziba-link></li><li><ziba-link>three</ziba-link></li></ul>',
			expected:'<ul><li><a href="./one">one</a></li><li><a href="./two">two</a></li><li><a href="./three">three</a></li></ul>',
		},



		{
			html:'<ziba-link transform="lowercase">e</ziba-link>',
			expected:'<a href="./e">e</a>',
		},
		{
			html:'<ziba-link transform="lowercase">E</ziba-link>',
			expected:'<a href="./e">E</a>',
		},
		{
			html:'<ziba-link transform="lowercase">example</ziba-link>',
			expected:'<a href="./example">example</a>',
		},
		{
			html:'<ziba-link transform="lowercase">Example</ziba-link>',
			expected:'<a href="./example">Example</a>',
		},
		{
			html:'<ziba-link transform="lowercase">eXAMPLE</ziba-link>',
			expected:'<a href="./example">eXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="lowercase">EXAMPLE</ziba-link>',
			expected:'<a href="./example">EXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="lowercase">Hello world</ziba-link>',
			expected:'<a href="./hello world">Hello world</a>',
		},
		{
			html:'<ziba-link transform="lowercase">apple Banana CHERRY</ziba-link>',
			expected:'<a href="./apple banana cherry">apple Banana CHERRY</a>',
		},



		{
			html:'<ziba-link transform="uppercase">e</ziba-link>',
			expected:'<a href="./E">e</a>',
		},
		{
			html:'<ziba-link transform="uppercase">E</ziba-link>',
			expected:'<a href="./E">E</a>',
		},
		{
			html:'<ziba-link transform="uppercase">example</ziba-link>',
			expected:'<a href="./EXAMPLE">example</a>',
		},
		{
			html:'<ziba-link transform="uppercase">Example</ziba-link>',
			expected:'<a href="./EXAMPLE">Example</a>',
		},
		{
			html:'<ziba-link transform="uppercase">eXAMPLE</ziba-link>',
			expected:'<a href="./EXAMPLE">eXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="uppercase">EXAMPLE</ziba-link>',
			expected:'<a href="./EXAMPLE">EXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="uppercase">Hello world</ziba-link>',
			expected:'<a href="./HELLO WORLD">Hello world</a>',
		},
		{
			html:'<ziba-link transform="uppercase">apple Banana CHERRY</ziba-link>',
			expected:'<a href="./APPLE BANANA CHERRY">apple Banana CHERRY</a>',
		},



		{
			html:'<ziba-link transform="lowersnakecase">e</ziba-link>',
			expected:'<a href="./e">e</a>',
		},
		{
			html:'<ziba-link transform="lowersnakecase">E</ziba-link>',
			expected:'<a href="./e">E</a>',
		},
		{
			html:'<ziba-link transform="lowersnakecase">example</ziba-link>',
			expected:'<a href="./example">example</a>',
		},
		{
			html:'<ziba-link transform="lowersnakecase">Example</ziba-link>',
			expected:'<a href="./example">Example</a>',
		},
		{
			html:'<ziba-link transform="lowersnakecase">eXAMPLE</ziba-link>',
			expected:'<a href="./example">eXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="lowersnakecase">EXAMPLE</ziba-link>',
			expected:'<a href="./example">EXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="lowersnakecase">Hello world</ziba-link>',
			expected:'<a href="./hello_world">Hello world</a>',
		},
		{
			html:'<ziba-link transform="lowersnakecase">apple Banana CHERRY</ziba-link>',
			expected:'<a href="./apple_banana_cherry">apple Banana CHERRY</a>',
		},



		{
			html:'<ziba-link transform="uppersnakecase">e</ziba-link>',
			expected:'<a href="./E">e</a>',
		},
		{
			html:'<ziba-link transform="uppersnakecase">E</ziba-link>',
			expected:'<a href="./E">E</a>',
		},
		{
			html:'<ziba-link transform="uppersnakecase">example</ziba-link>',
			expected:'<a href="./EXAMPLE">example</a>',
		},
		{
			html:'<ziba-link transform="uppersnakecase">Example</ziba-link>',
			expected:'<a href="./EXAMPLE">Example</a>',
		},
		{
			html:'<ziba-link transform="uppersnakecase">eXAMPLE</ziba-link>',
			expected:'<a href="./EXAMPLE">eXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="uppersnakecase">EXAMPLE</ziba-link>',
			expected:'<a href="./EXAMPLE">EXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="uppersnakecase">Hello world</ziba-link>',
			expected:'<a href="./HELLO_WORLD">Hello world</a>',
		},
		{
			html:'<ziba-link transform="uppersnakecase">apple Banana CHERRY</ziba-link>',
			expected:'<a href="./APPLE_BANANA_CHERRY">apple Banana CHERRY</a>',
		},



		{
			html:'<ziba-link transform="lowerllamacase">e</ziba-link>',
			expected:'<a href="./e">e</a>',
		},
		{
			html:'<ziba-link transform="lowerllamacase">E</ziba-link>',
			expected:'<a href="./e">E</a>',
		},
		{
			html:'<ziba-link transform="lowerllamacase">example</ziba-link>',
			expected:'<a href="./example">example</a>',
		},
		{
			html:'<ziba-link transform="lowerllamacase">Example</ziba-link>',
			expected:'<a href="./example">Example</a>',
		},
		{
			html:'<ziba-link transform="lowerllamacase">eXAMPLE</ziba-link>',
			expected:'<a href="./example">eXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="lowerllamacase">EXAMPLE</ziba-link>',
			expected:'<a href="./example">EXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="lowerllamacase">Hello world</ziba-link>',
			expected:'<a href="./helloworld">Hello world</a>',
		},
		{
			html:'<ziba-link transform="lowerllamacase">apple Banana CHERRY</ziba-link>',
			expected:'<a href="./applebananacherry">apple Banana CHERRY</a>',
		},



		{
			html:'<ziba-link transform="upperllamacase">e</ziba-link>',
			expected:'<a href="./E">e</a>',
		},
		{
			html:'<ziba-link transform="upperllamacase">E</ziba-link>',
			expected:'<a href="./E">E</a>',
		},
		{
			html:'<ziba-link transform="upperllamacase">example</ziba-link>',
			expected:'<a href="./EXAMPLE">example</a>',
		},
		{
			html:'<ziba-link transform="upperllamacase">Example</ziba-link>',
			expected:'<a href="./EXAMPLE">Example</a>',
		},
		{
			html:'<ziba-link transform="upperllamacase">eXAMPLE</ziba-link>',
			expected:'<a href="./EXAMPLE">eXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="upperllamacase">EXAMPLE</ziba-link>',
			expected:'<a href="./EXAMPLE">EXAMPLE</a>',
		},
		{
			html:'<ziba-link transform="upperllamacase">Hello world</ziba-link>',
			expected:'<a href="./HELLOWORLD">Hello world</a>',
		},
		{
			html:'<ziba-link transform="upperllamacase">apple Banana CHERRY</ziba-link>',
			expected:'<a href="./APPLEBANANACHERRY">apple Banana CHERRY</a>',
		},
	]

	tests.forEach(function(test, testNumber){
		if (undefined === ziba.transform) {
			console.error("[test-tramsform] For test", testNumber, "ziba.transform is undefined.")
			return
		}

		const html = test.html
		const expected = test.expected

		const element = document.createElement("div")
		element.innerHTML = html
		ziba.transform(element)


		const actual = element.innerHTML

		if (expected !== actual) {
			console.error("[test-tramsform] For test №", testNumber, "the actual value is not what was expected.")
			console.log("[test-tramsform] EXPECTED:", JSON.stringify(expected))
			console.log("[test-tramsform] ACTUAL:  ", JSON.stringify(actual))
			console.log("[test-tramsform] HTML:    ", JSON.stringify(html))
			return
		}

		console.log("[test-tramsform] Test №", testNumber, "passed.")
	})
}
