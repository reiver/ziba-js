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
	console.log("[ziba][transform] begin")

	if (undefined === rootElement) {
		console.log("[ziba][transform] root-elelemt is undefined")
		console.log("[ziba][transform] end")
		return
	}

	transform_link(rootElement)

	console.log("[ziba][transform] end")
}

function transform_link(rootElement) {
	console.log("[ziba][transform_link] begin")

	if (undefined === rootElement) {
		console.log("[ziba][transform_link] root-elelemt is undefined")
		console.log("[ziba][transform_link] end")
		return
	}

	const tagName = "ziba-link"
	const elements = rootElement.getElementsByTagName(tagName)
	if (!elements) {
		console.log("[ziba][transform_link] no elements")
		console.log("[ziba][transform_link] rootElement.innerHTML=", rootElement.innerHTML)
		console.log("[ziba][transform_link] end")
		return
	}
	const length = elements.length
	console.log("[ziba][transform_link] found", length, tagName)

	// Because we are doing a replaceWith() on the HTMLCollection,
	// we need to iterate through it backwards, because the HTMLCollection
	// will change size and what is in it each time we do that.
	//
	//@TODO: Is there a better way of dealing with this?
	for (let i = length-1; i >= 0; i--) {

		const element = elements[i]

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
	}

	console.log("[ziba][transform_link] end")
}
