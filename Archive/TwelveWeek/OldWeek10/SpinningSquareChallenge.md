# Challenge: Spinning square loading indicator
Create an animation of a square rotating, and moving around a square path as it rotates. The animation should repeat infinitely on page load.

## HTML
- Add a `div` element to the HTML (make sure it has an `id`!)
    - This `div` will contain our square
- Inside the `div`, add another `div` (make sure it has an `id`!)
- Give the `div` a height, width, and background-color
    - This `div` is our square

## Rotation Animation
First, we want to get the square to rotate infinitely. To do this, we need to use `animation`!

- Create a new `@keyframes` called "rotation"
    - There should be two frames within this rule: `from` and `to`
    - For `from`, set the `transform` property to `rotate` 0 degrees
    - For `to`, set the `transform` property to `rotate` 360 degrees (a full circle)
- In the ruleset for the square `div`, set the `animation` property
    - It should take four seconds to rotate fully
    - It should rotate infinitely
    - It should animate in a linear fashion
    - The animation should be "rotation"

Once that's all complete, your square should spin around forever!

## Moving the Square
Now that we have the square rotating, we want to move it around the page in a square path.

- Create a new `@keyframes` called "spin"
    - There should be four frames within this rule: `0%`, `25%`, `50%`, and `75%`
    - Each frame should place the square in one corner using the `transform` property and the `translate` function
    - `0%`: (0, 0)
    - `25%`: (100, 0)
    - `50%`: (100, 100)
    - `75%`: (0, 100)
- In the ruleset for the `div` that contains the square, set the `animation` property
    - It should take four seconds to complete one full spin
    - It should keep orbiting infinitely
    - It should animate in a linear fashion
    - The animation should be "spin"

Now, your square should rotate AND spin around!

## Updates
Mess around with the values used by the animations. Make the square spin around in a different shape (e.g., triangle), change colors, or rotate differently. Try to make the most interesting loading indicator you can make!

## More Animation Options
Read this w3schools article about animations: https://www.w3schools.com/css/css3_animations.asp

This article introduces some additional properties we can specify for animations. After reading the article, complete the exercises at the bottom.