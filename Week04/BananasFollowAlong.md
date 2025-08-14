# Go Bananas: Follow-Along Activity
Add some styling to a webpage advertising bananas.

## Background Information
Watch this video for some background on the exercise: https://www.youtube.com/watch?v=MFmr_TZLpS0&feature=youtu.be&t=21

## Current Webpage
So far, there is a [simple webpage](https://hytop.onrender.com/e/bananas) that has a lot of information about a banana:

```html
<html>
	<body>
		<h1>Banana for sale</h1>
		
		<img src="banana1.jpg"/>
		<img src="banana2.jpg"/>
		<img src="banana3.jpg"/>
		
		<p>This lovely banana is just about to hit its prime ripeness. It will not disappoint you with all of its amazing features.</p>
		
		<h2>Features:</h2>
		<ul>
			<li>Protective peel surrounding inner fruit</li>
			<li>Decadent yellow color</li>
			<li>Distinct banana flavor</li>
			<li>Completely non-organic</li>
			<li>Attracts adorable monkeys</li>
		</ul>
		
		<h2>Specs:</h2>
		<table>
			<tr>
				<td>Dimensions:</td>
				<td>12" x 2" x 2"</td>
			</tr>
			<tr>
				<td>Weight:</td>
				<td>3oz</td>
			</tr>
			<tr>
				<td>Processing Time:</td>
				<td>4 days</td>
			</tr>
			<tr>
				<td>Ships From:</td>
				<td>Cancun, Mexico</td>
			</tr>
			<tr>
				<td>Returns:</td>
				<td>Accepted for 1 year</td>
			</tr>
		</table>
		
		<h2>Reviews:</h2>
		<h4>Bob P.</h4>
		<p>I love this banana. It meant everything to me the day I recieved it.</p>
		
		<h4>Barb O.</h4>
		<p>Great seller, recieved my banana quickly and fully intact with no bruising. Five stars.</p>
		
		<h4>Bobby J.</h4>
		<p>This banana saved my marriage. Would buy again.</p>
		
		<h2>BUY NOW!</h2>
		<p>only <span>$49.99</span> for a limited time!</p>
		<p>Quantity: <input type="text"/></p>
		<button>Add to Cart</button>
	</body>
</html>
```

All of the information is there, but the page doesn't really pop. It could use a little CSS!

## Adding the First Style
Bananas are yellow (usually), so it would make sense to make the background of the page a nice yellow-ish color. This is possible with an external CSS stylesheet.

### CSS styles
1. Create a new CSS file (call it `Banana.css` and save it in the same folder as the HTML file)
1. In the CSS file, to select the entire page, use the body selector (`body`)
1. Use curly brackets (`{}`) to open the new block, also called a **ruleset**
1. Within the curly brackets, create a new **declaration** that sets the background color to yellow-ish
    - Start on a new line with the background property (`background`)
    - Insert a colon (`:`)
    - Provide the name of the yellow-ish color (`lightgoldenrodyellow`)
    - End it with a semi-colon (`;`)

##### Banana.css
```css
body {
    background: lightgoldenrodyellow;
}
```

That's all the CSS, but so far it's not actually linked to the HTML page! The HTML needs a `link` element pointing to the CSS file.

### HTML Link
1. Within the `<html></html>` tags, above the `<body>`, create a new `<head>` element
    - The `<head>` should have an opening and closing tag, both above the `<body>`
2. Between the `<head></head>` tags, create a new `<link>` element
3. Set the attributes of the `link` element as follows:
    - `href`: Bananas.css
    - `type`: text/css
    - `rel`: stylesheet

The added HTML code should look something like this:

```html
<head>
	<link href="Bananas.css" type="text/css" rel="stylesheet">
</head>
```
    
Open the HTML file in a browser to see the change. The background of the page should appear yellow-ish!

## Adding More `body` Styles
Any **declaration** within the `body` **ruleset** will apply by default to any element on the webpage.

1. Make the text color for the page a deep blue
	- Create a new declaration on its own line in the `body` ruleset
	- Property: `color`
	- Value: `darkblue`
1. Make the font for the page a nice sans-serif font
	- Create a new declaration on its own line in the `body` ruleset
	- Property: `font-family`
	- Value: `Tahoma`

##### Code
```css
body {
    background: lightgoldenrodyellow;
    color: darkblue;
    font-family: Tahoma;
}
```

## Styling the Images
The images on the page are good, but they are a little too big. Use CSS to update their size.

1. In the CSS file, create a new ruleset for images
	- Start on a new line under the `body` ruleset
	- Create an image ruleset with `img` and opening/closing curly brackets (`{}`)
1. Within the `img` ruleset, add a declaration for height
	- Property: `height`
	- Value: `150px`

##### Code
```css
img {
    height: 150px;
}
```

## Styling the Main Header
The top `h1` should have some special styling as the header for the whole page.

1. In the CSS file, create a new ruleset for `h1`
1. In the `h1` ruleset, create a declaration setting the color to goldenrod
	- Property: `color`
	- Value: `goldenrod`
1. In the `h1` ruleset, create a declaration setting the font to comic sans
	- Property: `font-family`
	- Value: `cursive`
1. In the `h1` ruleset, create a declaration setting the text size to 50 pixels
	- Property: `font-size`
	- Value: `50px`

##### Code
```css
h1 {
    color: goldenrod;
    font-family: cursive;
    font-size: 50px;
}
```

## Styling the Price
The price for the banana is within a `span` element, which is a generic inline container for phrasing content. It is generally used to group elements for styling purposes. Since the price is in a `span`, it is possible to style it separately from the surrounding elements.

1. In the CSS file, create a new ruleset for `span`
1. In the `span` ruleset, create declarations for the following properties and values:
	- `color` / `forestgreen`
	- `font-weight` / `bold`
	- `font-size` / `30px`
	- `font-family` / `consolas`

##### Code
```css
span {
    color: forestgreen;
    font-weight: bold;
    font-size: 30px;
    font-family: consolas;
}
```

## Final CSS
```css
body {
    background: lightgoldenrodyellow;
    color: darkblue;
    font-family: Tahoma;
}

img {
    height: 150px;
}

h1 {
    color: goldenrod;
    font-family: cursive;
    font-size: 50px;
}

span {
    color: forestgreen;
    font-weight: bold;
    font-size: 30px;
    font-family: consolas;
}
```
