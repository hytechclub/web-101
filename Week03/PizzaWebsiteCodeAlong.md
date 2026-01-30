# Pizza Website: Follow-Along Activity
Alfredo's Pizza Cafe has some great pizza, but unfortunately their technological prowess is not so great. They need your help to create their website! They want to provide some information about their restaurants, along with an order form so customers can order pies online. Start from [this empty project](https://hytop.onrender.com/e/web), and then follow the instructions below.

## Setup
First, we need all the basics for a new HTML document file.

1. Open up the **index.html** file
2. Add the `html` tags (opening and closing)
3. Add the `body` tags within the `html` tags

## Adding the Basics
Next, let's add some content for the very top of the website, with some basic information.

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
Now, add a _list_ of locations served by the restaurant.

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

## Adding Hours
Now, add a _table_ of operating hours for the restaurant.

1. Add an `h2` header under the `p` that says "Locations"
1. Under the `h2`, add a `table` element
1. Within the `table`, add a `tr` for the column headers
    - Note that the `tr` element is a _child_ the `table` element
1. Within the top `tr` element, add a `th` that says "Day" and a `th` that says "Open"
1. Next, under the `tr`, add another `tr`
1. Within _that_ `tr`, and `td` elements for "Sunday" and "9AM-9PM"
1. Continue adding `tr` elements - one for each day of the week
1. Open your webpage in a browser and make sure it appears as expected!

The added table code should look something like this:

```html
<h2>Hours</h2>
<table border>
    <tr>
        <th>Day</th>
        <th>Open</th>
    </tr>
    <tr>
        <td>Sunday</td>
        <td>11AM-9PM</td>
    </tr>
    <tr>
        <td>Monday</td>
        <td>Closed</td>
    </tr>
    <tr>
        <td>Tuesday</td>
        <td>4PM-9PM</td>
    </tr>
    <tr>
        <td>Wednesday</td>
        <td>4PM-9PM</td>
    </tr>
    <tr>
        <td>Thursday</td>
        <td>4PM-10PM</td>
    </tr>
    <tr>
        <td>Friday</td>
        <td>4PM-11PM</td>
    </tr>
    <tr>
        <td>Saturday</td>
        <td>4PM-11PM</td>
    </tr>
</table>
```

## Adding a Video
Just for fun, we can add a video to this site to provide "more information" about the pizza.

_**IMPORTANT NOTE:** you do NOT need to write any code by hand for the `<iframe>` element - YouTube gives you all the code you need._

1. In the **index.html** file, add an `h2` element that says "More Information"
1. Next, open a new tab and go to [YouTube](https://youtube.com)
1. Search for a pizza-related video (e.g., [gimme pizza](https://www.youtube.com/watch?v=CJEoASUMZbI))
1. Under the video, click the "SHARE" button  
    ![](Assets/YouTubeShare.png) 
1. Click "Embed"  
    ![](Assets/YouTubeEmbed.png)  
1. Click "COPY"  
    ![](Assets/YouTubeCopy.png)
1. Back in HyTop, in the **index.html** file, paste the code at the bottom of the HTML section
    - Use **Ctrl**+**v**
1. Watch the video on your website!

The code should look something like this:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/SG_04GABaEM?si=tvhq04tKi4FuzD9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

## Final Code
[Project](https://hytop.onrender.com/e/pizzacafecomplete)

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

        <h2>Hours</h2>
        <table border>
            <tr>
                <th>Day</th>
                <th>Open</th>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>11AM-9PM</td>
            </tr>
            <tr>
                <td>Monday</td>
                <td>Closed</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>4PM-9PM</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>4PM-9PM</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>4PM-10PM</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>4PM-11PM</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>4PM-11PM</td>
            </tr>
        </table>

        <h2>More Information</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SG_04GABaEM?si=tvhq04tKi4FuzD9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
