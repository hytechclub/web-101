# Crustaceans: Individual Exercise
Follow the instructions below to update the Crustaceans website with more interactivity.

## Part 1 - "More Info" button
Create a hyperlink button that will send the user to more crustacean information when clicked.

### HTML Updates
1. In the HTML file, underneath the "Subscribe" `<div></div>`, add a new `a` element
1. Set the `class` attribute of the `a` to "btn" so it appears as a button
1. Set the `id` attribute of the `a` to "more-info" so it is accessible in the CSS
1. Set the `href` attribute of the `a` to "https://en.wikipedia.org/wiki/Crustacean" so it goes there when clicked

### CSS Updates
1. In the CSS file, create a new ruleset for the "more-info" link using the `id` selector
1. Within the "more-info" ruleset, set the `background-color` to `oldlace`
1. Create another new ruleset for the "more-info" link to select it when it is **hovered**
1. Within the "more-info" hover ruleset, set the `font-weight` to `bold`
1. In both the "more-info" ruleset and the "more-info" hover ruleset, add a declaration so that it takes `.1s` to transition from one state to the other

## Part 2 - Sideways Walk Column
Create an additional column in the row that will inform the user that some crustaceans walk sideways. This column should rotate sideways when clicked.

### HTML Updates
1. Within the "row" `<div></div>`, underneath the existing column `div`, create another `div`
1. Update the `class` attribute of the first column `div` so that it takes up `10/12` of the available space
1. Update the `class` attribute of the _new_ column `div` so that it takes up `2/12` of the available space
1. Set the `id` attribute of the new column `div` to "sideways" so it is accessible in the CSS
1. Within the new "sideways" `<div></div>`, add an `h2` element that says "Some walk side-ways"

### CSS Updates
1. In the CSS file, create a new ruleset for the "sideways" `div` using the `id` selector
1. Within the "sideways" ruleset, set the `background-color` to `oldlace`
1. Create another new ruleset for the "sideways" `div` to select it when it is **active**
1. Within the "sideways" active ruleset, transform the box so it rotates 90 degrees
1. In both the "sideways" ruleset and the "sideways" active ruleset, add a declaration so that it takes `.75s` to transition from one state to the other
