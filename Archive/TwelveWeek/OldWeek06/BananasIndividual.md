# Go Bananas: Individual Exercise
The banana product page looks much more exciting than a simple HTML page, but it could look even better. Follow the instructions below to update the page with even more styles.

## Part 1 - Updating Existing Rulesets
### Changing the Text Color
The `darkblue` color is a little too strong. Change it to a lighter blue color that still maintains a contrast with the yellow background.

1. In the CSS file, find the `body` ruleset
1. In the `body` ruleset, find the declaration for the `color` property
1. Update the value of the `color` property from `darkblue` to `steelblue`

### Changing the Main Header Font
Update the main header font so it looks even more fun.

1. In the CSS file, find the `h1` ruleset
1. In the `h1` ruleset, find the declaration for the `font-family` property
1. Update the value of the `font-family` property from `cursive` to `jokerman`

### Making the Images Larger
The images on the page are a little small. Make them bigger!

1. In the CSS file, find the `img` ruleset
1. In the `img` ruleset, find the declaration for the `height` property
1. Update the value of the `height` property from `150px` to `200px`

## Part 2 - Creating Additional Rulesets
### Updating the Color of the Section Headers
The section headers should match the background more effectively. Update the CSS so that the headers are a dark gold color.

1. In the CSS file, create a new **ruleset** for `h2`
    - Place the new ruleset beneath the existing rulesets
    - Use the `h2` selector and curly brackets (`{}`) to open the new block
1. Within the curly brackets, create a new **declaration** that sets the text color
    - Property: `color`
    - Value: `darkgoldenrod`

### Updating the Font of the Reviewer Names
The reviewer names should have a different font to differentiate them from the rest of the text on the page.

1. In the CSS file, create a new **ruleset** for `h4` (reviewer names are in these headers)
1. Within the ruleset, create a new **declaration** that sets the font
    - Property: `font-family`
    - Value: `cursive`

### Updating the "Add to Cart" Button Styles
The button should be more inviting than a plain HTML one. Update its color, background color, and font.

1. In the CSS file, create a new **ruleset** for `button`
1. Within the `button` ruleset, create a new **declaration** that sets the text color
    - Property: `color`
    - Value: `white`
1. Within the `button` ruleset, create another new declaration underneath the existing declaration that sets the background color
    - Property: `background`
    - Value: `forestgreen`
1. Within the `button` ruleset, create another new declaration that sets the font
    - Property: `font-family`
    - Value: `consolas`

## Bonus - New Product
Create an entirely new HTML page containing information about a different product! Link the same CSS file, and notice that those styles should apply in the same way to the new product page.

## Bonus - New Styles
Create an entirely new CSS stylesheet (`.css` file) for the different product. Link to the new stylesheet instead. Try to make the styles match the product information.