# Pizza Website: Follow-Along Activity
Alfredo's Pizza Cafe has some great pizza, but unfortunately their technological prowess is not so great. They need your help to create their website! They want to provide some information about their restaurants, along with an order form so customers can order pies online. Start from [this empty Glitch](https://glitch.com/edit/#!/emptyweb101), and then follow the instructions below.

## Setup
1. Open up the **index.html** file
2. Add the `html` tags (opening and closing)
3. Add the `body` tags within the `html` tags

## Adding the Basics
1. Add an `h1` header that says "Alfredo's Pizza Cafe" within the `body`
1. Under the `h1`, add an `img` of the pizza (set the `src` attribute to "https://styles.redditmedia.com/t5_21ulkr/styles/profileIcon_owuf7qzyhuk61.jpg")
1. Under the `img`, add a `p` that says "WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!"
    - Note that this is the actual slogan of the actual Alfredo's Pizza Cafe
1. Open your webpage in a browser and make sure it appears as expected!

At the end of this section, your code should look like this:
```html
<html>
    <body>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src="https://styles.redditmedia.com/t5_21ulkr/styles/profileIcon_owuf7qzyhuk61.jpg">
        <p>WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!</p>
    </body>
</html>
```

## Adding a List of Locations
1. Add an `h2` header under the `p` that says "Locations"
1. Under the `h2`, add a new `ul` (unordered list)
1. Within the `ul`, add some locations within `li` elements
    - Note that the `li` elements are _children_ of the `ul` element
1. Open your webpage in a browser and make sure it appears as expected!

At the end of this section, your code should look like this:
```html
<html>
    <body>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src="https://styles.redditmedia.com/t5_21ulkr/styles/profileIcon_owuf7qzyhuk61.jpg">
        <p>WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!</p>
        <h2>Locations</h2>
        <ul>
            <li>Scranton, PA</li>
            <li>Albany, NY</li>
            <li>Utica, NY</li>
        </ul>
    </body>
</html>
```

## Adding the Order Form
The website has information now, but we still need to add in an order form! Start by adding an `h2` header that says "Order Form" underneath the locations list. Then, follow the steps below to add some fields to the form.

### Pizza Size
For pizza size, the user should be able to select from a dropdown of available sizes.

1. Under the "Order Form" `h2`, add an `h3` that says "Pizza Size"
    - This will serve as a label for our field
1. Create a `select` element under the "Pizza Size" `h3`
1. Within the `select`, add some pizza sizes within `option` elements
    - Note that the `option` elements are _children_ of the `select` element
1. Open your webpage in a browser and make sure it appears as expected!

Your code for this section should look like this:
```html
<h3>Pizza Size</h3>
<select>
    <option>Small</option>
    <option>Medium</option>
    <option>Large</option>
</select>
```

### Toppings
For toppings, the user should be able to select whichever combination they choose using checkboxes.

1. Under the Pizza Size `select`, add an `h3` that says "Toppings"
1. Under the `h3`, add a new `p` paragraph
1. Inside the `p`, add an `input` element with the `type` attribute set to "checkbox"
1. Next to the `input` element (still within the `p`), add the text "Pepperoni"
1. Repeat the above steps to add three additional topping `p` elements, each with a checkbox and text
1. Open your webpage in a browser and make sure it appears as expected!

Your code for this section should look like this:
```html
<h3>Toppings</h3>
<p><input type="checkbox"> Pepperoni</p>
<p><input type="checkbox"> Sausage</p>
<p><input type="checkbox"> Mushrooms</p>
<p><input type="checkbox"> Black Olives</p>
```

### Name, Address, and Submit
Lastly, the user should be able to enter their name and address so Alfredo knows where to send the pizza! They will also need a submit button.

1. Under the toppings, add an `h3` that says "Name"
1. Under the Name `h3`, add a new `input` with the `type` attribute set to "text"
1. Under the name `input`, add an `h3` that says "Address"
1. Under the Address `h3`, add a new `textarea` element
1. Under the address `textarea`, add a new `p` element
1. Within the `p` element, add a new `input` element with the `type` attribute set to "submit"
1. Open your webpage in a browser and make sure it appears as expected!

Your code for this section should look like this:
```html
<h3>Name</h3>
<input type="text">
<h3>Address</h3>
<textarea></textarea>
<p><input type="submit"></p>
```

<br>

That's it! Your website has some information about the website, and a form the user can submit.

## Final HTML
```html
<html>
    <body>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src="https://styles.redditmedia.com/t5_21ulkr/styles/profileIcon_owuf7qzyhuk61.jpg">
        <p>WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!</p>
        <h2>Locations</h2>
        <ul>
            <li>Scranton, PA</li>
            <li>Albany, NY</li>
            <li>Utica, NY</li>
        </ul>
        <h2>Order Form</h2>
        <h3>Pizza Size</h3>
        <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
        </select>
        <h3>Toppings</h3>
        <p><input type="checkbox"> Pepperoni</p>
        <p><input type="checkbox"> Sausage</p>
        <p><input type="checkbox"> Mushrooms</p>
        <p><input type="checkbox"> Black Olives</p>
        <h3>Name</h3>
        <input type="text">
        <h3>Address</h3>
        <textarea></textarea>
        <p><input type="submit"></p>
    </body>
</html>
```
