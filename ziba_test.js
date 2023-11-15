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
			html:'<ziba-link title="one">once</ziba-link>',
			expected:'<a href="./one">once</a>',
		},
		{
			html:'<ziba-link title="two">twice</ziba-link>',
			expected:'<a href="./two">twice</a>',
		},
		{
			html:'<ziba-link title="three">thrice</ziba-link>',
			expected:'<a href="./three">thrice</a>',
		},
		{
			html:'<ziba-link title="four">fource</ziba-link>',
			expected:'<a href="./four">fource</a>',
		},



		{
			html:'<ziba-link title="1 2 3 4">ONCE TWICE THRICE FOURCE</ziba-link>',
			expected:'<a href="./1 2 3 4">ONCE TWICE THRICE FOURCE</a>',
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
