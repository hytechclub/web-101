# Pizza Website: Individual Exercise
The website for Alfredo's Pizza Cafe is pretty solid, but there are some changes we need to make to take it to the next level. Follow the instructions below to add some new features to Alfredo's website!

## Part 1 - Expanding the existing options
Since we last visited Alfredo's, they have added a new location, a new pizza size, and a new topping! We need the website to reflect those changes.

1. In the `ul` list of locations, add another `li` element with the new location
1. In the `select` dropdown of pizza sizes, add another `option` element with the new size option
1. In the toppings section, add another `p` element containing a checkbox `input` and topping text

## Part 2 - Crust Type
Alfredo's actually offers two crust types, "Thin Crust" and "Deep Dish" (no in-between). The user should be able to select which crust type they want on the order form via a dropdown.

1. Under the "Pizza Size" `select`, add an `h3` header that says "Crust Type"
1. Under the `h3`, add a `select` element
1. Within the `select` element, add `option` elements for each crust type
    - Note that the `option` elements are _children_ of the `select` element

## Part 3 - Spiciness
Alfredo's also allows customers to select the spiciness of their pie. They use values from 0 to 10, and they want users to be able to select the spicy level on the form with a sliding scale.

1. Under the "Crust Type" `select`, add an `h3` header that says "Spiciness"
1. Under the `h3`, add a new `p` element
1. Within the `p` element, add text that says "0"
1. To the right of the "0", still within the `p` element, add an `input` element
1. Set the `type` of the `input` element so that it displays as a sliding scale
1. To the right of the `input`, add text that says "10"

## Part 4 - Special Instructions
Alfredo's also wants to include a multi-line text box where customers can input any additional instructions for their pie.

1. Under the "Address" text box, add an `h3` header that says "Special Instructions"
1. Under the `h3`, add `textarea` element

## (BONUS 1) Order Type
Alfredo's would like to offer both pick-up and delivery to their customers. They want to use radio buttons to allow users to select the type of the order on the form

1. Under the "Special Instructions" text box, add an `h3` header that says "Order Type"
1. Under the `h3`, add a new `p` element
1. Within the `p` element, add an `input` that will appear as a radio button
1. Next to the `input` element (still within the `p`), add the text "Pick-up"
1. Repeat the steps above to create a `p` element for "Delivery"
1. Finally, ensure that only one radio button can be checked at a time
    - This way, selecting one option will de-select the other option
    - Use the `name` attribute on both `input` elements to accomplish this

## (BONUS 2) Order Form on its own page
With all of the restaurant information and the order form on the same page, it seems a little crowded. Alfredo's would like the order form to have its own page, and there should be a link to it from the main page.

1. Create a new HTML file called `OrderForm.html` in the same folder as your current HTML file
1. Add the basic `html` and `body` tags to the new HTML file
1. Copy the "Order Form" code, including all of the fields and the submit button, into the `OrderForm.html` file
1. Remove all of the "Order Form" code from the main HTML file
1. Finally, add an `a` anchor tag to the main HTML file
    - It should link to the `OrderForm.html` file
    - The text content for the link should be "Order Now"