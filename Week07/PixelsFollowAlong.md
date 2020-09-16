# Pixels: Follow-Along Activity
Follow the instructions to create a very simple pixel PAC-MAN!

![](https://i.imgur.com/k7Ahc1C.png)

## Pixel Art Examples
#### Original Mario
![](https://i.imgur.com/L1VJN5C.png)

All art for video games was once hand-coded, pixel-by-pixel!

#### Panda
(animated: https://i.imgur.com/ghillV4.gif)

![](https://i.imgur.com/ghillV4.gif)

Now, some developers copy this style for their own art

#### Landscape  
![](https://i.imgur.com/6YJEPEp.png)

Pixel art can be used for almost anything!

## Setup
1. Create a new HTML file named `Pixels.html`
1. Add the basic tags to the HTML file - `html`, `head`, `body`
1. Create a new CSS file named `Pixels.css`
1. Link the CSS file in the HTML file using a `link` tag
    - `href`: `Pixels.css`
    - `rel`: `stylesheet`
    - `type`: `text/css`

## Main Container
1. In the HTML file, in the `body` tag, create a `div`
1. Give the `div` an `id` attribute: `main`
    - This `div` element will contain the pixels
1. In the CSS file, create a new **ruleset** for the main div
    - Selector: `#main`
    - Curly brackets
1. In the `#main` ruleset, fill out a few properties:
    - `height`: `400px`
    - `width`: `400px`
    - `border`: `2px solid black`

##### Pixels.html
```html
<html>
    <head>
        <link href="Pixels.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="main">
        </div>
    </body>
</html>
```

#### Pixels.css
```css
#main {
    width: 400px;
    height: 400px;
    border: 2px solid black;
}
```

## Rows and Columns for the Grid
1. In the HTML file, within the main `div`, create 4 child `div` elements
    - Each of these `div` elements represents one row
1. Add a `class` attribute with a value of "horizontal" for each "row" `div`
1. Within each of those child `div` elements, create 4 child `div` elements
    - Each of these `div` elements represents one cell
1. Add a `class` attribute with a value of "cell" for each "cell" `div`

>Note: Copy/Paste will make this much faster!

```html
<div id="main">
    <div class="horizontal">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
    <div class="horizontal">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
    <div class="horizontal">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
    <div class="horizontal">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
</div>
```

## Styling the Cells
1. In the CSS file, create a new **ruleset** for each cell
    - Selector: `.cell`
    - Curly brackets
1. Set the `width` and `height` properties of each cell to `100px`
1. For testing purposes, set the `background-color` property to `blue`

```css
.cell {
    height: 100px;
    width: 100px;
    background-color: blue;
}
```

## Aligning the Cells
Currently, each cell `div` will stack vertically. This is the default behavior for HTML `div` elements. Instead, the "cell" elements should display horizontally within each row. CSS Grid layout allows this style.
> Resource: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

1. In the CSS file, create a new **ruleset** for each row
    - Selector: `.horizontal`
    - Curly brackets
1. Set the `display` property of each row to `grid`
    - This tells the webpage that each row will have the grid layout
1. Set the `grid-template-columns` property of each row to `1fr 1fr 1fr 1fr`
    - This will determine the number of columns in each row
    - The 4 `1fr` mean that there are 4 columns, each taking one _fraction_ of the available width
1. Remove the `width` from the `.cell` ruleset as it is no longer necessary

```css
.horizontal {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.cell {
    height: 100px;
    background-color: blue;
}
```

Now, the entire main container should be blue, because each cell is 100x100 and they stack properly!

## Filling Out the Grid with Colors
1. In the HTML file, add a `class` of "black" to each black cell
1. Add a `class` of "yellow" to each yellow cell
    - Note that the `div` will now have two classes: `cell` and `yellow`
    - Two classes can be set with a space between them: `class="cell yellow"`
1. In the CSS file, remove the blue `background-color` from the "cell" elements
1. Create a new **ruleset** for "black" cells
    - Selector: `.black`
1. In the `.black` ruleset, set the background color to black
1. Create a new **ruleset** for "yellow" cells
    - Selector: `.yellow`
1. In the `.yellow` ruleset, set the background color to gold

That's it! Refresh the page and PAC-MAN should appear in the grid.

##### Pixels.html
```html
<html>
    <head>
        <link href="Pixels.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="main">
            <div class="horizontal">
                <div class="cell"></div>
                <div class="cell yellow"></div>
                <div class="cell black"></div>
                <div class="cell yellow"></div>
            </div>
            <div class="horizontal">
                <div class="cell yellow"></div>
                <div class="cell yellow"></div>
                <div class="cell yellow"></div>
                <div class="cell yellow"></div>
            </div>
            <div class="horizontal">
                <div class="cell yellow"></div>
                <div class="cell yellow"></div>
                <div class="cell"></div>
                <div class="cell"></div>
            </div>
            <div class="horizontal">
                <div class="cell"></div>
                <div class="cell yellow"></div>
                <div class="cell yellow"></div>
                <div class="cell yellow"></div>
            </div>
        </div>
    </body>
</html>
```

##### Pixels.css
```css
#main {
    width: 400px;
    height: 400px;
    border: 2px solid black;
}

.horizontal {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.cell {
    height: 100px;
}

.black {
    background-color: black;
}

.yellow {
    background-color: gold;
}
```