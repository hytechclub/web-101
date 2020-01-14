# Magazine Website: Follow-Along Activity
Create a simple website for a magazine called _Dirigible Digest_. The website will contain articles related to dirigibles, and will be formatted using Bootstrap. A dirigible balloon, or airship, is a type of aerostat or lighter-than-air aircraft that can navigate through the air under its own power. For more information about dirigibles, refer to this article: https://en.wikipedia.org/wiki/Airship.

## Setup
### HTML File
1. Create a new `.html` file, and add the basic tags: `html`, `head`, `body`
1. Within the `<head></head>` element, add the `meta` tag for `viewport`:  
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ```
1. Within the `<head></head>` element, add the `link` tag for the bootstrap stylesheet:  
    ```html
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    ```

### CSS File
1. Create a new `.css` file named "MagazineWebsite.css"
1. Link the CSS file within the HTML file using a `link` tag

#### Code
```html
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="MagazineWebsite.css" type="text/css">
    </head>
    <body>
    </body>
</html>
```

## Big Header
Bootstrap has built-in CSS class rulesets for headers called **Jumbotron**s. In order to use them, add some new HTML elements, and then add `class`es to them.

### Basic HTML
1. Within the `<body></body>` element, add a `div` element
1. Within the `<div></div>` element, add an `h1` element that says "Dirigible Digest"
1. Within the `<div></div>` element, add a `p` element that says "News and information related to dirigibles"

Open the file in a browser to see how it renders. It has the proper font, it needs to be centered and placed within a large header banner!

### Jumbotron
1. Add a `class` attribute to the `div` element containing the header content
1. Set the value of the `class` attribute to "jumbotron"
1. Open the file in a browser to see the banner!
1. Back in the HTML file, add an additional `class` of "text-center" to the `div`
    - Use a space between the two classes to specify that the `div` has both classes
1. Open the file in a browser to see the text centered!

### Adding CSS
To make the subtitle text appear _italic_, follow the steps below:
1. In the HTML file, add an `id` attribute to the `p` element, and set it to "subtitle"
1. In the CSS file, create a new ruleset for the `p` with an `id` of "subtitle"
1. Within the "subtitle" ruleset, create a new declaration setting `font-style` to `italic`
1. Open the file in a browser to see the italicized text!

#### Code
##### HTML
```html
<div class="jumbotron text-center">
    <h1>Dirigible Digest</h1>
    <p id="subtitle">News and information related to dirigibles</p>
</div>
```

##### CSS
```css
#subtitle {
    font-style: italic;
}
```

## Article 1
Add an article about airships to the webpage. Ultimately, it should be laid out in a grid format, like a newspaper, and take up half of a row within a container.

### Basic HTML
1. Within the `<body></body>` element, underneath the jumbotron `<div></div>`, create another `div`
    - This `div` will represent the container for the rows
1. Within the container `<div></div>`, create another `div`
    - This `div` will represent one row within the container
1. Within the row `<div></div>`, create another `div`
    - This `div` will represent one article
1. Within the article `<div></div>`, create an `h3` header saying "Reprise of the airship"
1. Within the article `<div></div>`, under the `h3`, create a `p`
1. Copy the following text into the `p`:  
    ```
    The U.S. is experiencing something of a blimp renaissance. There are more new airship designs coming off drawing boards than ever before and designers have ambitious plans for their use, provided they can rise above a number of technical hurdles--and the reservations of potential blimp operators...
    ```

Open the file in a browser to see how it renders. It has the proper content, but it needs some Bootstrap classes so that it appears within the grid!

### Container / Row / Column
1. Add a `class` attribute to the container `div`, and set its value to "container"
1. Open the file in a browser, and notice the space is automatically added on the sides of the container
1. Add a `class` attribute to the row `div`, and set its value to "row"
1. Add a `class` attribute to the article `div`, and set its value to "col-md-6"
    - This will make the `div` take up 6 12ths (or one half) of the available row space
1. Open the file in a browser to see the article take up the proper amount of space

#### Code
```html
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <h3>Reprise of the airship</h3>
            <p>
                The U.S. is experiencing something of a blimp renaissance. There are more new airship designs coming off drawing boards than ever before and designers have ambitious plans for their use, provided they can rise above a number of technical hurdles--and the reservations of potential blimp operators...
            </p>
        </div>
    </div>
</div>
```

## Article 2
Add an additional article to the webpage. The second article should take up the other part of the first row.

### HTML for Article 2
1. Within the row `<div></div>`, underneath the existing article `<div></div>`, add another `div` element
1. Add a class attribute to the new `div` element and set it to "col-md-6"
    - This way, the two article `div` elements will take up all the available space (`6`+`6`=`12`)
1. Within the new article `<div></div>`, create an `h3` header saying "Goodyear's blimp fleet complete"
1. Within the article `<div></div>`, under the `h3`, create a `p`
1. Copy the following text into the `p`:  
    ```
    After years of planning and construction, Goodyear's fleet of high-technology Zeppelin airships is complete. The old blimp had two propeller engines that only pointed to the rear. But the new NTs have three engines that swivel in multiple directions, increasing maneuverability and control...
    ```

### Adding CSS for all articles
To make the article text appear dark grey, follow the steps below:
1. In the HTML file, add a `class` attribute to the `p` elements containing article text, and set the values to "article-text"
1. In the CSS file, create a new ruleset for the `p`s with a `class` of "article-text"
1. Within the "article-text" ruleset, create a new declaration setting `color` to `darkgrey`
1. Open the file in a browser to see the dark grey text!

#### Code
##### HTML
```html
<div class="col-md-6">
    <h3>Reprise of the airship</h3>
    <p class="article-text">
        The U.S. is experiencing something of a blimp renaissance. There are more new airship designs coming off drawing boards than ever before and designers have ambitious plans for their use, provided they can rise above a number of technical hurdles--and the reservations of potential blimp operators...
    </p>
</div>
<div class="col-md-6">
    <h3>Goodyear's blimp fleet complete</h3>
    <p class="article-text">
        After years of planning and construction, Goodyear's fleet of high-technology Zeppelin airships is complete. The old blimp had two propeller engines that only pointed to the rear. But the new NTs have three engines that swivel in multiple directions, increasing maneuverability and control...
    </p>
</div>
```

##### CSS
```css
.article-text {
    color: darkgrey;
}
```

## Final Code
##### HTML
```html
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="MagazineWebsite.css" type="text/css">
    </head>
    <body>
        <div class="jumbotron text-center">
            <h1>Dirigible Digest</h1>
            <p id="subtitle">News and information related to dirigibles</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3>Reprise of the airship</h3>
                    <p class="article-text">
                        The U.S. is experiencing something of a blimp renaissance. There are more new airship designs coming off drawing boards than ever before and designers have ambitious plans for their use, provided they can rise above a number of technical hurdles--and the reservations of potential blimp operators...
                    </p>
                </div>
                <div class="col-md-6">
                    <h3>Goodyear's blimp fleet complete</h3>
                    <p class="article-text">
                        After years of planning and construction, Goodyear's fleet of high-technology Zeppelin airships is complete. The old blimp had two propeller engines that only pointed to the rear. But the new NTs have three engines that swivel in multiple directions, increasing maneuverability and control...
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>
```

##### CSS
```css
#subtitle {
    font-style: italic;
}

.article-text {
    color: darkgrey;
}
```