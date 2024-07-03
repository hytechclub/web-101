# Additional Challenges
Create a new HTML file and a new CSS file. Fill out the basic tags in the HTML file, and link the CSS file. Then, complete the following challenges. Each challenge should appear in its own section, surrounded by a `div`.

## Circle Square
Create a square that slowly turns into a circle when the user clicks on it.

### Square
- Create a `div` element in the HTML file
    - Make sure to give it an `id` attribute so we can select it in CSS
- In the CSS file, select the `div`
- In the ruleset for the `div`, give it a height, width, and background color
    - To make a square, the height and width should be equal

### Circle
- In the CSS file, select the `div` in its active state (use `:active`)
- When the `div` is active, we want it to appear as a circle (use `border-radius`)
- Finally, to make this happen slowly, use the `transition` property

## Text Emphasis
Create a paragraph that slowly turns red and enlarges when the user hovers over it

### Paragraph
- Create a `p` element in the HTML file
- In the CSS file, select the `p`
    - Give it a font size and a color other than red

### Hovered Paragraph
- In the CSS file, select the `p` in its hovered state (use `:hover`)
- When the `p` is hovered over, make it to become larger and change colors
- Make it transition to these new styles in half a second
- It should also take half a second to transition back to its original state

## Scrapbook - Rotated Images
Create a scrapbook-like section of the webpage with at least three images. The images should all be rotated slightly, either to the left or to the right.

### Images
- Add three `img` elements to the webpage.
    - Ensure that each image has an `id`
    - Each image should also be made to be 200px tall and 200px wide

### Rotations
- Use the `transform` property to rotate each image in a different way
- The images should still be right-side up, just slightly rotated
- At least one image should lean to the right, and at least one should lean to the left

### Enlarged image on hover
- Select all images on hover
- In the hover state, make them 300px tall and 300px wide
- It should take .2 seconds to transition between these styles

## W3Schools Exercises
### More transition options
Read this w3schools article about transitions: https://www.w3schools.com/css/css3_transitions.asp

This article introduces some additional properties we can specify for transitions. After reading the article, complete the exercises at the bottom.

### More transform options
Read this w3schools article about transforms: https://www.w3schools.com/css/css3_2dtransforms.asp

This article introduces some additional ways we can use the `transform` property. After reading the article, complete the exercises at the bottom.

## Beyond
If you complete all of the exercises above, you're free to do whatever you want with transitions and transforms. Create a new file, and make a work of art!