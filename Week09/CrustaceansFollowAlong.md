# Crustaceans: Follow-Along Activity
Follow the steps below to use CSS to make HTML elements dynamic and interactive with transitions and transforms.

## Basic Setup
First, create a new HTML page (and CSS file) and add the basic tags. Within the `<head></head>` of the HTML, include a link to the Bootstrap CSS file and the new CSS file.

```html
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="TransitionsAndTransforms.css" type="text/css">
    </head>
    <body>
    </body>
</html>
```

## Transitions
When an HTML element changes its state, CSS can dynamically update the styles for that element. CSS can even specify rules around the transition from one state to another. This makes the webpage feel much more interactive! Follow the instructions below to complete an example detailing some transitions in CSS.

### Jumbotron HTML
1. In the HTML file, within the `<body></body>` element, add a new `<div>` element that will serve as a big header on our page
    - Set its `class` attribute to "jumbotron text-center" so both class rulesets apply
1. Within the "jumbotron" `<div></div>`, add an `h3` saying "Crustaceans Quarterly"
    - Set its `class` attribute to "display-4", another Bootstrap class to change the text style
1. Underneath the `<h3></h3>`, add another `div` and put the text "Subscribe" within it
    - Set its `class` attribute to "btn", another Bootstrap class to display elements as buttons
    - Set its `id` attribute to "subscribe" to allow styling in the CSS

```html
<div class="jumbotron text-center">
    <h3 class="display-4">Crustaceans Quartlerly</h3>
    <div class="btn" id="subscribe">Subscribe</div>
</div>
```

### Jumbotron CSS
1. In the CSS file, create a new ruleset for the "jumbotron" class
1. Within the "jumbotron" ruleset, set the `background-color` to `lightcoral`
1. Create a new ruleset for the "subscribe" element
1. Within the "subscribe" ruleset, set the `background-color` to `pink`
1. Within the "subscribe" ruleset, set the `cursor` property to `pointer`
    - This will make the cursor appear as a hand when hovering over the element

```css
.jumbotron {
    background-color: lightcoral;
}

#subscribe {
    background-color: pink;
    cursor: pointer;
}
```

Open the file in a browser to see how it looks so far!

### Hover State
To select an HTML element in a given state, use a **pseudo-selector**. These start with `:` and are placed at the end of a CSS selector. For example, to select the `div` with `id="subscribe"` in its hover state, add `:hover` to the selector.

```css
#subscribe:hover
```

Give the `div` a nice box shadow when the user hovers over it:

```css
#subscribe:hover {
    box-shadow: 0px 5px 5px black;
}
```

Now, hover over the `div` button on the webpage, and the box shadow should appear. It should look like the "subscribe" button is raised off the page!

### Transition
Now that the button has two states, it is possible to specify how the styles transition from one to the other. Use the `transition` property to accomplish this. Add a `transition` to the `#subscribe:hover` ruleset with a value of "1s" (one second):

```css
transition: 1s;
```

This means that when the user hovers over the `div`, it will take one second to transition into the `:hover` styles. The box shadow should appear slowly.

#### Going back
When the element _leaves_ the hover state, it reverts back to the original styles immediately. To fix this, add the same `transition` property to the `#subscribe` ruleset.

Now, the `div` should slowly add/remove a box shadow when the user hovers over it and leaves.

### Active State
In addition to the `:hover` selector, some HTML elements have an `:active` selector. Use `:active` to tell when a user has clicked a `div` element on the page.

Make it so that the button changes color when the user clicks it. It should take `.5` seconds to transition into this state. To accomplish this, use a selector of `#subscribe:active`, and the `transition` and `background-color` properties:

```css
#subscribe:active {
    background-color: lightsalmon;

    transition: .5s;
}
```

After making this change, the button is fully interactive! Of course, it doesn't actually do anything, but it sure looks like it does.

## Transforms
Use transforms to change the shape and position of HTML elements without affecting the other parts of the document. These transforms can be very useful for creating interesting and unique visual experiences on a webpage. Follow the instructions below to complete an example detailing some transforms in CSS.

### Article Setup
1. In the HTML file, beneath the jumbotron `<div></div>`, add another `div` element for the container
    - Set its `class` attribute to "container" so it will be contained properly
1. Within the "container" `<div></div>`, add another `div` element for the row
    - Set its `class` attribute to "row"
1. Within the "row" `<div></div>`, add another `div` element for one column
    - Set its `class` attribute to "col-md-12" so it takes up the whole row
    - Set its `id` attribute to "info" so it can be referenced in the CSS
1. Within the "col-md-12" `<div></div>`, add an `h3` element that says "Crustaceans information"
1. Underneath the `h3` element, add a `p` element containing the following text:
    ```
    Crustaceans form a large, diverse arthropod taxon which includes such familiar animals as crabs, lobsters, crayfish, shrimp, krill, woodlice, and barnacles. The crustacean group is usually treated as a subphylum, and because of recent molecular studies it is now well accepted that the crustacean group is paraphyletic, and comprises all animals in the Pancrustacea clade other than hexapods.
    ```
1. In the CSS file, create a new ruleset for the "info" column and set its `background-color` to `pink`

#### HTML
```html
<div class="container">
    <div class="row">
        <div class="col-md-12" id="info">
            <h3>Crustaceans Information</h3>
            <p>
                Crustaceans form a large, diverse arthropod taxon which includes such familiar animals as crabs, lobsters, crayfish, shrimp, krill, woodlice, and barnacles. The crustacean group is usually treated as a subphylum, and because of recent molecular studies it is now well accepted that the crustacean group is paraphyletic, and comprises all animals in the Pancrustacea clade other than hexapods.
            </p>
        </div>
    </div>
</div>
```

#### CSS
```css
#info {
    background-color: pink;
}
```

### Rotating the Article with a Rransform
>Rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
To rotate the article on the page, use the `transform` CSS property. `transform` can do a whole lot of different things, but in this case, use `rotate` to spin the article around. Rotate the article 200 degrees, so that it appears upside-down and tilted. Add the following declaration to the "info" ruleset:

```css
transform: rotate(200deg);
```

### Moving the Box with a Rransform
>Translate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
It is also possible to move an element from one position to another using `transform`. To do this, use the `translate` value of the `transform` property.

#### Move the Article to the Right
If only one value is passed to the `translate` function, it will move along the X axis (horizontally). The CSS below will move the article 20 pixels to the right.

```css
transform: translate(20px);
```

#### Move the Article Up
Using `translateY` instead of simply `translate` will move the element along the Y axis (vertically). The CSS below will move the article 20 pixels up.

```css
transform: translateY(-20px);
```

### Combining a Transform and a Transition
To make the article move up when the user hovers over it, use a `transform` AND a `transition` at the same time!

First, select the "info" article in its hover state. Move the `transform` with the `translateY` to that ruleset.

```css
#info:hover {
    transform: translateY(-20px);
}
```

Next, add the transition to both the `#info` ruleset and the `#info:hover` ruleset, so that the styles take half a second to change.

```css
#info {
    background-color: pink;

    transition: .5s;
}

#info:hover {
    transform: translateY(-20px);

    transition: .5s;
}
```

Now, the article should slowly move up when we hover over it!

## Final Code
### HTML
```html
<html>
    <head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="TransitionsAndTransforms.md" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="jumbotron text-center">
            <h3 class="display-4">Crustaceans Quartlerly</h3>
            <div class="btn" id="subscribe">Subscribe</div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12" id="info">
                    <h3>Crustaceans Information</h3>
                    <p>
                        Crustaceans form a large, diverse arthropod taxon which includes such familiar animals as crabs, lobsters, crayfish, shrimp, krill, woodlice, and barnacles. The crustacean group is usually treated as a subphylum, and because of recent molecular studies it is now well accepted that the crustacean group is paraphyletic, and comprises all animals in the Pancrustacea clade other than hexapods.
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>
```

### CSS
```css
.jumbotron {
    background-color: lightcoral;
}

#subscribe {
    background-color: pink;
    cursor: pointer;

    transition: .5s;
}

#subscribe:hover {
    box-shadow: 0px 5px 5px black;

    transition: .5s;
}

#subscribe:active {
    background-color: lightsalmon;

    transition: .5s;
}

#info {
    background-color: pink;

    transition: .5s;
}

#info:hover {
    transform: translateY(-10px);

    transition: .5s;
}
```