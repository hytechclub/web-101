# Phone Comparison: Follow-Along Activity
Follow the instructions below to build a webpage that helps users compare the various features of different smart phones. Use a `table` and some `iframes` to provide information to the user.

## Setup
1. Create a new `.html` file
1. Add the `html` tags (opening and closing)
1. Add the `body` tags within the `html` tags
1. Add an `h1` header that says "Phone Comparison" within the `body`
1. Open your webpage in a browser and make sure it appears as expected!

At the end of this section, your webpage code should look like this:
```html
<html>
    <body>
        <h1>Phone Comparison</h1>
    </body>
</html>
```

## Comparison Table Basics
1. Under the header, add a `table` tag (opening and closing)
1. Add the "border" attribute to the `table` element so a border appears
1. Between the opening and closing `table` tags, add a `thead` (table header)
1. Under the `thead` (as its sibiling), add a `tbody` (table body)

At the end of this section, your table code should look like this:
```html
<table border>
    <thead>
    </thead>
    <tbody>
    </tbody>
</table>
```

## Comparison Table Headers
1. Between the opening and closing `thead` tags, add a `tr` (table row)
1. Between the opening and closing `tr` tags, add four `th`s (table header data)
1. Make the content for the `th` tags the following text values:
    - Phone Name
    - Display Size
    - Weight
    - Internal Storage

At the end of this section, your table header code should look like this:
```html
<thead>
    <tr>
        <th>Phone Name</th>
        <th>Display Size</th>
        <th>Weight</th>
        <th>Internal Storage</th>
    </tr>
</thead>
```

## Comparison Table Row data
1. Between the opening and closing `tbody` tags, add three `tr`s (table row)
    - Each row will represent one smartphone
1. In each row, add four `td`s (table data), each corresponding with the column headers
1. The data should be as follows:
    - Samsung Galaxy Note 9, 6.4 inches, 7.09 oz, 126 GB
    - Apple iPhone XR, 6.1 inches, 6.84 oz, 256 GB
    - LG G7, 6.1 inches, 5.71 oz, 64 GB

At the end of this section, your table body code should look like this:
```html
<tbody>
    <tr>
        <td>Samsung Galaxy Note 9</td>
        <td>6.4 inches</td>
        <td>7.09 oz</td>
        <td>126 GB</td>
    </tr>
    <tr>
        <td>Apple iPhone XR</td>
        <td>6.1 inches</td>
        <td>6.84 oz</td>
        <td>256 GB</td>
    </tr>
    <tr>
        <td>LG G7</td>
        <td>6.1 inches</td>
        <td>5.71 oz</td>
        <td>64 GB</td>
    </tr>
</tbody>
```

## Phone reviews
In addition to showing the user the stats of these smartphones, add a review for each of them! Instead of copying and pasting from review sites, use `iframe`s to directly show the reviews on the page.

1. Under the comparison table, add an `h3` that says "Samsung Galaxy Note 9"
1. Under that `h3`, add an `iframe` that will point to a review of the Galaxy Note 9
1. Set the `src` attribute of the `iframe` to "https://www.consumerreports.org/smartphones/samsung-galaxy-note9-review-tops-consumer-reports-ratings/"
1. Set the `height` attribute to `300`
1. Set the `width` attribute to `500`
1. Add additional `h3` headers and `iframe` elements for the other smartphones:
    - Apple iPhone XR: https://www.consumerreports.org/smartphones/apple-iphone-xr-review-premium-features-lower-price/
    - LG G7: https://www.consumerreports.org/smartphones/lg-g7-smartphone-preview/

At the end of this section, your iframes should look like this:
```html
<h3>Samsung Galaxy Note 9</h3>
<iframe width="500" height="300" src="https://www.consumerreports.org/smartphones/samsung-galaxy-note9-review-tops-consumer-reports-ratings/"></iframe>
<h3>Apple iPhone XR</h3>
<iframe width="500" height="300" src="https://www.consumerreports.org/smartphones/apple-iphone-xr-review-premium-features-lower-price/"></iframe>
<h3>LG G7</h3>
<iframe width="500" height="300" src="https://www.consumerreports.org/smartphones/lg-g7-smartphone-preview/"></iframe>
```

## Final HTML
```html
<html>
    <body>
        <h1>Phone Comparison</h1>
        <table border>
            <thead>
                <tr>
                    <th>Phone Name</th>
                    <th>Display Size</th>
                    <th>Weight</th>
                    <th>Internal Storage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Samsung Galaxy Note 9</td>
                    <td>6.4 inches</td>
                    <td>7.09 oz</td>
                    <td>126 GB</td>
                </tr>
                <tr>
                    <td>Apple iPhone XR</td>
                    <td>6.1 inches</td>
                    <td>6.84 oz</td>
                    <td>256 GB</td>
                </tr>
                <tr>
                    <td>LG G7</td>
                    <td>6.1 inches</td>
                    <td>5.71 oz</td>
                    <td>64 GB</td>
                </tr>
            </tbody>
        </table>

        <h3>Samsung Galaxy Note 9</h3>
        <iframe width="500" height="300" src="https://www.consumerreports.org/smartphones/samsung-galaxy-note9-review-tops-consumer-reports-ratings/"></iframe>
        <h3>Apple iPhone XR</h3>
        <iframe width="500" height="300" src="https://www.consumerreports.org/smartphones/apple-iphone-xr-review-premium-features-lower-price/"></iframe>
        <h3>LG G7</h3>
        <iframe width="500" height="300" src="https://www.consumerreports.org/smartphones/lg-g7-smartphone-preview/"></iframe>
    </body>
</html>
```