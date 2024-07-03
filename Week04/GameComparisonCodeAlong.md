# Game Comparison: Code-Along Activity
Follow the instructions below to build a webpage that helps users compare the various features of different games. Use a `table` and some `iframes` to provide information to the user. Start from [this empty Repl](https://replit.com/@HylandOutreach/EmptyWeb#index.html), and then follow the instructions below.

## Setup
Start with the basic HTML setup for the page.

1. Open the **index.html** file for editing
1. Add the `html` tags (opening and closing)
1. Add the `body` tags within the `html` tags
1. Add an `h1` header that says "Game Comparison" within the `body`
1. Click the **Run** button and make sure it appears as expected!

At the end of this section, your webpage code should look like this:
```html
<html>
    <body>
        <h1>Game Comparison</h1>
    </body>
</html>
```

## Comparison Table Basics
1. Under the header, add a `table` tag (opening and closing)
1. Add the "border" attribute to the `table` element so a border appears

At the end of this section, your table code should look like this:
```html
<table border="1">

</table>
```

## Comparison Table Headers
1. Between the opening and closing `table` tags, add a `tr` (table row)
1. Between the opening and closing `tr` tags, add four `th`s (table header data)
1. Make the content for the `th` tags the following text values:
    - Game Title
    - Release Year
    - Platform
    - Price

At the end of this section, your table header code should look like this:
```html
<tr>
    <th>Game Title</th>
    <th>Release Year</th>
    <th>Platform</th>
    <th>Price</th>
</tr>
```

## Comparison Table Row Data
1. Between the opening and closing `table` tags, add three `tr`s (table row)
    - Each row will represent one game
1. In each row, add four `td`s (table data), each corresponding with the column headers
1. The data should be as follows:
    - Fortnite, 2017, Multiple, Free
    - Candy Crush Saga, 2012, Mobile, Free
    - Pokemon Sword & Shield, 2019, Nintendo Switch, $59.99

At the end of this section, your table body code should look like this:
```html
<tr>
    <td>Fortnite</td>
    <td>2017</td>
    <td>Multiple</td>
    <td>Free</td>
</tr>
<tr>
    <td>Candy Crush Saga</td>
    <td>2012</td>
    <td>Mobile</td>
    <td>Free</td>
</tr>
<tr>
    <td>Pokemon Sword & Shield</td>
    <td>2019</td>
    <td>Nintendo Switch</td>
    <td>$59.99</td>
</tr>
```

## Game Reviews
In addition to showing the user the information for these games, add a review for each of them! Instead of copying and pasting from review sites, use `iframe`s to directly show the reviews on the page.

1. Under the comparison table, add an `h3` that says "Fortnite"
1. Under that `h3`, add an `iframe` that will point to a review of Fortnite
1. Set the `src` attribute of the `iframe` to "https://www.pcmag.com/reviews/fortnite-for-pc"
1. Set the `height` attribute to `300`
1. Set the `width` attribute to `500`
1. Add additional `h3` headers and `iframe` elements for the other games:
    - Candy Crush Saga: https://www.cnet.com/reviews/candy-crush-saga-android-review/
    - Pokemon Sword & Shield: https://www.pcmag.com/reviews/pokemon-swordshield-for-nintendo-switch

At the end of this section, your iframes should look like this:
```html
<h3>Fortnite</h3>
<iframe width="500" height="300" src="https://www.pcmag.com/reviews/fortnite-for-pc"></iframe>
<h3>Candy Crush Saga</h3>
<iframe width="500" height="300" src="https://www.cnet.com/reviews/candy-crush-saga-android-review/"></iframe>
<h3>Pokemon Sword & Shield</h3>
<iframe width="500" height="300" src="https://www.pcmag.com/reviews/pokemon-swordshield-for-nintendo-switch"></iframe>
```

## Final HTML
```html
<html>
    <body>
        <h1>Phone Comparison</h1>
        <table border="1">
            <tr>
                <th>Game Title</th>
                <th>Release Year</th>
                <th>Platform</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Fortnite</td>
                <td>2017</td>
                <td>Multiple</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Candy Crush Saga</td>
                <td>2012</td>
                <td>Mobile</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Pokemon Sword & Shield</td>
                <td>2019</td>
                <td>Nintendo Switch</td>
                <td>$59.99</td>
            </tr>
        </table>

        <h3>Fortnite</h3>
        <iframe width="500" height="300" src="https://www.pcmag.com/reviews/fortnite-for-pc"></iframe>
        <h3>Candy Crush Saga</h3>
        <iframe width="500" height="300" src="https://www.cnet.com/reviews/candy-crush-saga-android-review/"></iframe>
        <h3>Pokemon Sword & Shield</h3>
        <iframe width="500" height="300" src="https://www.pcmag.com/reviews/pokemon-swordshield-for-nintendo-switch"></iframe>
    </body>
</html>
```