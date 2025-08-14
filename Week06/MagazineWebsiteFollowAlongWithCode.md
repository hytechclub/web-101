# Magazine Website: Follow-Along Activity
Create a simple website for a magazine! It will be up to you to decide what topic the magazine should cover. Some examples:

- [Dirigibles (aka blimps)](https://hylandtechclub.com/showcase/Web101/DirigibleDigest.html)
- Music Reviews
- [Interior Design](https://hylandtechclub.com/showcase/Web101/DesignDecoded.html)
- Fashion
- Sports
- Anything!

## Setup
Start from [this starter project](https://hytop.onrender.com/e/onlinemagazine), and then follow the instructions below.

**index.html** contents:

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="MagazineWebsite.css" type="text/css" />
  </head>
  <body></body>
</html>
```

**MagazineWebsite.css** file begins empty.

## Big Header
Bootstrap has built-in CSS class rulesets for headers called **Jumbotron**s. In order to use them, add some new HTML elements, and then add `class`es to them.

### Basic HTML
1. Within the `<body></body>` element, add a `div` element
1. Within the `<div></div>` element, add an `h1` element that says "TOPIC Magazine"
1. Within the `<div></div>` element, add a `p` element that says "News and information related to TOPIC"

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
    <h1>TOPIC Magazine</h1>
    <p id="subtitle">News and information related to TOPIC</p>
</div>
```

##### CSS
```css
#subtitle {
    font-style: italic;
}
```

## Article 1
Add an article about your topic to the webpage. Ultimately, it should be laid out in a grid format, like a newspaper, and take up half of a row within a container.

### Basic HTML
1. Within the `<body></body>` element, underneath the jumbotron `<div></div>`, create another `div`
    - This `div` will represent the container for the rows
1. Within the container `<div></div>`, create another `div`
    - This `div` will represent one row within the container
1. Within the row `<div></div>`, create another `div`
    - This `div` will represent one article
1. Within the article `<div></div>`, create an `h3` header saying "article 1"
1. Within the article `<div></div>`, under the `h3`, create a `p`
1. Add some text within the `<p>` and `</p>` - it can be quick at first, but you'll want to have more content later!

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
            <h3>article 1</h3>
            <p>text</p>
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
1. Within the new article `<div></div>`, create an `h3` header saying "article 2"
1. Within the article `<div></div>`, under the `h3`, create a `p`
1. Add some text to the paragraph!

### Adding CSS for All Articles
To make the article text appear dark grey, follow the steps below:
1. In the HTML file, add a `class` attribute to the `p` elements containing article text, and set the values to "article-text"
1. In the CSS file, create a new ruleset for the `p`s with a `class` of "article-text"
1. Within the "article-text" ruleset, create a new declaration setting `color` to `grey`
1. Open the file in a browser to see the dark grey text!

#### Code
##### HTML
```html
 <div class="col-md-6">
    <h3>article 1 title</h3>
    <p class="article-text">
        article text goes here
    </p>
</div>
<div class="col-md-6">
    <h3>article 2 title</h3>
    <p class="article-text">
        super cool text here
    </p>
</div>
```

##### CSS
```css
.article-text {
    color: grey;
}
```

## Template Code
At this point, the project should look something like [this](https://hytop.onrender.com/e/onlinemagazine35)... it should have all the basic structure for a magazine!

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
            <h1>TOPIC Magazine</h1>
            <p id="subtitle">News and information related to TOPIC</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3>article 1 title</h3>
                    <p class="article-text">
                        article text goes here
                    </p>
                </div>
                <div class="col-md-6">
                    <h3>article 2 title</h3>
                    <p class="article-text">
                        super cool text here
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
  color: grey;
}
```

## Next Steps: Fill Out Content
From here, it's up to you to add more articles, add style, and keep it fun!

You are also welcome to try to incorporate some of these new bootstrap techniques into your final project.
