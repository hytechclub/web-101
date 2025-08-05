# Code-Along: Endangered Species
Follow the steps below to use CSS to make HTML elements dynamic and interactive with transitions and transforms.

## Getting Started
Start by remixing [this project](https://glitch.com/edit/#!/remix/endangered-species-starter). The page has a lot of good content so far, but it could certainly use some additional style!

[StackBlitz Mirror](https://stackblitz.com/edit/web-platform-zehaqspe?file=index.html)

[Endangered Species Source](EndangeredSpeciesSource.md)

## Transitions
When an HTML element changes its state, CSS can dynamically update the styles for that element. CSS can even specify rules around the transition from one state to another. This makes the webpage feel much more interactive! Follow the instructions below to complete an example detailing some transitions in CSS.

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
Now that the button has two states, it is possible to specify how the styles transition from one to the other. Use the `transition` property to accomplish this. Add a `transition` to the `#subscribe` ruleset with a value of "1s" (one second):

```css
transition: 1s;
```

This means that when the user hovers over the `div`, it will take one second to transition into the `:hover` styles. The box shadow should appear slowly.

### Active State
In addition to the `:hover` selector, some HTML elements have an `:active` selector. Use `:active` to tell when a user has clicked a `div` element on the page.

Make it so that the button changes color when the user clicks it. It should take `.5` seconds to transition into this state. To accomplish this, use a selector of `#subscribe:active`, and the `transition` and `background-color` properties:

```css
#subscribe:active {
    background-color: oldlace;
    transition: .5s;
}
```

After making this change, the button is fully interactive! Of course, it doesn't actually do anything, but it sure looks like it does.

## Transforms
Use transforms to change the shape and position of HTML elements without affecting the other parts of the document. These transforms can be very useful for creating interesting and unique visual experiences on a webpage. Follow the instructions below to complete an example detailing some transforms in CSS.

### Rotating an Animal Picture with a Transform
>Rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate

Currently, the otters are upside down! That's not good. Luckily, it is possible to fix it using the `rotate` function.

To rotate the picture on the page, use the `transform` CSS property. `transform` can do a whole lot of different things, but in this case, use `rotate` to spin the image around. Rotate the picture 180 degrees, so that it appears right-side-up.

1. Select the image in CSS with `#animal2 img`
1. Setup the `transform` property
1. Call the `rotate` function, and pass in `180deg`

The added CSS code in **style.css** should look something like this:

```css
#animal2 img {
    transform: rotate(180deg);
}
```

### Moving the Boxes with a Transform
>Translate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
It is also possible to move an element from one position to another using `transform`. To do this, use the `translate` value of the `transform` property.

#### Move the Article to the Right
If only one value is passed to the `translate` function, it will move along the X axis (horizontally). The CSS below will move the article 20 pixels to the right:

```css
transform: translate(20px);
```

Try adding that to one of the `#animal` selectors in CSS to see what happens!

#### Move the Article Up
Using `translateY` instead of simply `translate` will move the element along the Y axis (vertically). The CSS below will move the article 20 pixels up:

```css
transform: translateY(-20px);
```

See what happens if that is added to one of the boxes!

### Combining a Transform and a Transition
Now the fun part. The goal is to make the animal box pop a bit when the user hovers over it - this is possible by combining a transition and a transform!

When the `.col-md-6` elements enter their hover state, they should pop up a little bit.

First, select all the animal boxes in hover state. Move the `transform` with the `translateY` to that ruleset.

```css
.col-md-6:hover {
    transform: translateY(-20px);
}
```

Next, add the transition to the original `.col-md-6` ruleset. This will ensure a smooth transition between the transform states.

```css
transition: .5s;
```

Now, the animal boxes should slowly move up on hover!

## Adding Another Animal
Everything is looking pretty good, but there is definitely room for more animals on this page!

Click the "More Info" link from the current website to visit a [page listing endangered animals](https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status). Find an animal that you like, and create a box for that species! It can be added to the existing second row. Make sure to create a new box, a header with the animal's name, a quick description, and a picture. You should also change the background color for the box in CSS.

The added HTML should look something like this:

```html
<div class="col-md-6" id="animal4">
    <h3>Bornean Orangutan</h3>
    <p>Bornean orangutan populations have declined by more than 50% over the past 60 years, and the species' habitat has been reduced by at least 55% over the past 20 years.</p>
    <img src="orangutan.jpg">
</div>
```

And the added CSS should look something like this:

```css
#animal4 {
  background-color: papayawhip;
}
```

## Final Code
That's it for the activity! By this point, you should have an website with four animal boxes, each interactive on hover. The ending project could look something like [this](https://replit.com/@HylandOutreach/EndangeredSpecies):

### HTML
```html
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
      <div class="jumbotron text-center">
        <h3 class="display-4">Endangered Species</h3>
        <div class="btn" id="subscribe">Subscribe</div>
        <p><a href="https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status" target="_blank">More Info</a></p>
      </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6" id="animal1">
                <h3>Axolotl</h3>
                <p>Axolotls are critically endangered. They can only be found in the wild in a specific lake in Mexico.</p>
                <img src="axolotl.jpg" >
            </div>
            <div class="col-md-6" id="animal2">
                <h3>Otter</h3>
                <p>Otters hold hands while sleeping to keep from drifting apart.</p>
                <img src="otter.png" >
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" id="animal3">
                <h3>Amazon River Dolphin</h3>
                <p>These dolphins are known for their unique pink color.</p>
                <img src="dolphin.jpg" >
            </div>
            <div class="col-md-6" id="animal4">
                <h3>Bornean Orangutan</h3>
                <p>Bornean orangutan populations have declined by more than 50% over the past 60 years, and the species' habitat has been reduced by at least 55% over the past 20 years.</p>
                <img src="orangutan.jpg">
        </div>
    </div>
    </body>
</html>
```

### CSS
```css
.btn {
  margin-bottom: 10px;
}

img {
  width: 100%;
}

.jumbotron {
  background-color: skyblue;
}

#subscribe {
  background-color: mediumspringgreen;
  cursor: pointer;
  transition: 1s;
}

#animal1 {
  background-color: pink;
}

#animal2 {
  background-color: mediumspringgreen;
}

#animal3 {
  background-color:skyblue;
}

#animal4 {
  background-color: papayawhip;
}

.col-md-6 {
  padding: 25px;
  box-sizing: border-box;
  border: 5px solid white;
  transition: .5s;
}

#subscribe:hover {
  box-shadow: 0px 5px 5px black;
}

#subscribe:active {
  background-color: oldlace;
  transition: .5s;
}

#animal2 img {
  transform: rotate(180deg);
}

.col-md-6:hover {
  transform: translateY(-20px);
}
```
