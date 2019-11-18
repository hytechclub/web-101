# Magazine Website: Individual Exercise
Take the magazine website to the next level by adding some additional articles and updating some styles.

## Part 1 - New Row
Add a new row to the container that will hold two additional articles. The articles will have different widths because one is more important than the other.

1. Within the container `<div></div>`, under the existing row `<div></div>`, create another `div` element
1. Add a `class` attribute to the new `div`, and set its value to "row"

### Article 1
The first article is less important, so it should take up less space.

1. Within the new row `<div></div>`, create a new `div` element
    - This `div` will represent the article
1. Add a `class` attribute to the new article `div`, and set the value so that the article takes up 4/12 of the available row space
1. Within the article `<div></div>`, create an `h3` header saying "LZ 129 Hindenburg"
1. Within the article `<div></div>`, under the `<h3></h3>`, create a `p`
1. Copy the following text into the `p`:  
    ```
    LZ 129 Hindenburg was a large German commercial passenger-carrying rigid airship, the longest class of flying machine and the largest airship by envelope volume...
    ```

Open the file in a browser to see the new article appear!

### Article 2
The second article is more important, so it should take up more space.

1. Within the row `<div></div>`, underneath the existing article `<div></div>`, add another `div` element
1. Add a `class` attribute to the new `div` element and set the value so that the article takes up 8/12 of the available row space
    - This way, the two article `div` elements will take up all the available row space (`4`+`8`=`12`)
1. Within the article `<div></div>`, create an `h3` header saying "What is a dirigible?"
1. Within the article `<div></div>`, under the `<h3></h3>`, create a `p`
1. Copy the following text into the `p`:  
    ```
    An airship or dirigible balloon is a type of aerostat or lighter-than-air aircraft that can navigate through the air under its own power. Aerostats gain their lift from large gasbags filled with a lifting gas that is less dense than the surrounding air. In early dirigibles, the lifting gas used was hydrogen, due to its high lifting capacity and ready availability...
    ```
1. Within the article `<div></div>`, under the `<p></p>`, create an `a` hyperlink
    - Set the `href` attribute of the `a` to point to here: https://en.wikipedia.org/wiki/Airship
    - Set the text content of the `a` to say "MORE INFORMATION"

Open the file in a browser to see the new article appear!

## Part 2 - Updated Styles
### Updated HTML
1. In the HTML file, add a `class` attribute to the `p` elements containing article text, and set the values to "article-text"
    - Because there is already a ruleset for the "article-text" class, the styles will be applied automatically!
1. For the second article `div`, add another class within the existing `class` attribute: "featured"
1. For the `a` within the second article `div`, add an `id` attribute and set its value to "airship-info"

### Updated CSS
1. In the CSS file, add a new ruleset for the "featured" class
1. Within the "featured" ruleset, create a new declaration setting the `border` property
    - It should have a thickness of `2px`
    - It should have a style of `dotted`
    - It should have a color of `lightgrey`
1. Add another new ruleset for the "airship-info" id
1. Within the "airship-info" ruleset, create a new declaration setting the `color` property to `grey`

Open the file in a browser to see the new article appear!