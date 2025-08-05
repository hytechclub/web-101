# Animation: Follow-Along
>Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations

Use CSS to animate the `background-color` property on a webpage!

## Setup
1. Create a new HTML file, and add the basic tags - `html`, `head`, `body`
1. Create a new CSS file
1. In the HTML file, within the `<head></head>` element, add a `link` element that links the CSS file

## Defining an Animation with Keyframes
When animating using CSS, the styles are defined at certain **keyframes**. These keyframes represent the styles of an element at a given point in time, during the animation cycle.

To make the background color black at the very beginning of the animation (or, `0%` of the way through), the keyframe would look like a normal CSS ruleset, but with `0%` as the selector. Add the following code in the CSS file:
```css
0% {
    background-color: black;
}
```

Next, to make the background color darkred at the end of the animation, add the following ruleset:
```css
100% {
    background-color: darkred;
}
```

Now, all that's left is to put these two keyframes together is an `@keyframes` ruleset that includes both frames. A keyframes ruleset consists of:
- `@keyframes`
- animation name
- curly brackets (`{}`)
- frame rulesets

Add the following code to define a new keyframes ruleset named "pulse" that will change the background color from black to red:
```css
@keyframes pulse {
    0% {
        background-color: black;
    }

    100% {
        background-color: darkred;
    }
}
```

## Using an Animation on an HTML Element
After defining an animation's keyframes, it must be applied to an element to take effect. Apply this animation to the whole page by selecting the `body` in the CSS file, and creating a declaration that points to the "pulse" animation.

1. In the CSS file, create a new ruleset that will apply to the entire `body`
1. Within the `body` ruleset, create a new declaration with a property of `animation`
1. There are many options for the `animation` property:
    - `animation-duration` configures the length of time that an animation should take to complete one cycle
    - `animation-iteration-count` configures the number of times the animation should repeat
    - `animation-timing-function` configures the timing of the animation
    - `animation-direction` configures whether or not the animation should alternate direction on each run through the sequence
    - `animation-name` specifies the name of the keyframes ruleset describing the animation's keyframes
1. To put them all together, list each value separated by a space:
    - `4s` so the animation takes four seconds to complete
    - `infinite` so the animation goes on forever
    - `linear` so the animation happens smoothly
    - `alternate` so the animation goes smoothly beetween black and red
    - `pulse` so the animation uses the keyframes specified by the "pulse" ruleset

```css
body {
    animation: 4s infinite linear alternate pulse;
}
```

## Adding Another Keyframe
With the keyframes ruleset set up, it's easy to add an additional frame at any point in the animation cycle. Add a frame at `50%` of the way through that sets the background color to pink.

## Code
```css
body {
    animation: 4s infinite linear alternate pulse;
}

@keyframes pulse {
    0% {
        background-color: black;
    }

    50% {
        background-color: pink;
    }

    100% {
        background-color: darkred;
    }
}
```