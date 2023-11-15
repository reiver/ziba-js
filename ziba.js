/*
Copyright (c) 2023 Charles Iliya Krempeaux :: http://changelog.ca/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
export function transform(rootElement) {
	if (undefined === rootElement) {
		return
	}

	transform_link(rootElement)
}

function transform_link(rootElement) {
	if (undefined === rootElement) {
		console.log("[ziba] root-elelemt is undefined")
		return
	}

	const tagName = "ziba-link"
	const elements = rootElement.getElementsByTagName(tagName)
	if (!elements) {
		console.log("[ziba] no elements")
		console.log("[ziba] rootElement.innerHTML=", rootElement.innerHTML)
		return
	}

	[].forEach.call(elements, function(element) {
		const anchor = document.createElement("a")

		anchor.innerHTML = element.innerHTML

		let href = element.innerText
		const elementTitle = element.getAttribute("title")
		if (elementTitle) {
			href = elementTitle
		}
		href = "./"+href

		anchor.setAttribute("href", href)

		element.replaceWith(anchor)
	})
}