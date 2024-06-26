# Presidents: Follow-Along Activity
Follow the steps below to update the Presidents website with information about John F. Kennedy. Start from [this Glitch project](https://glitch.com/edit/#!/remix/presidentstarter).

## Main Page Update
Add an entry row for JFK, including an image, a blurb, and a link to a JFK page. It should appear beneath the LBJ entry.

### Row Setup
1. Within the "container" `<div></div>`, underneath the "row" `<div></div>` for Lyndon B. Johnson, add another `div`
    - Set its `class` attribute to "row"
1. Within the "row" `<div></div>`, add another two `div` elements that will represent columns in the row
1. The first column `div` within the "row" should take up  `1/4` of the available space
    - Set its `class` attribute to "col-md-3"
1. The second column `div` within the "row" should take up the remaining `3/4` of the space
    - Set its `class` attribute to "col-md-9"

#### Code
```html
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-9"></div>
</div>
```

### Row Content
1. Within the first column `<div></div>`, add an `img`
    - Set its `src` attribute to "JFK.jpg"
1. Within the second column `<div></div>`, add an `h4` that says "John F. Kennedy"
1. Underneath the `<h4></h4>`, add a `p`
1. Within the `p`, enter the following text:
    ```
    Kennedy was born in Brookline, Massachusetts, the second child of Joseph P. Kennedy Sr. and Rose Kennedy. He graduated from Harvard University in 1940 and joined the U.S. Naval Reserve the following year. During World War II, he commanded a series of PT boats in the Pacific theater and earned the Navy and Marine Corps Medal for his service. After the war, Kennedy represented the 11th congressional district of Massachusetts in the U.S. House of Representatives from 1947 to 1953.
    ```
1. Underneath the `<p></p>`, add another `p`
    - It should say "To learn more about JFK, click here"
1. Within the `<p></p>`, wrap the text that says "here" in an `a`
    - Set its `href` attribute to "JFK.html" (a file that has yet to be created)

#### Code
```html
<div class="col-md-3">
    <img src="JFK.jpg">
</div>
<div class="col-md-9">
    <h4>John F. Kennedy</h4>
    <p>
        Kennedy was born in Brookline, Massachusetts, the second child of Joseph P. Kennedy Sr. and Rose Kennedy. He graduated from Harvard University in 1940 and joined the U.S. Naval Reserve the following year. During World War II, he commanded a series of PT boats in the Pacific theater and earned the Navy and Marine Corps Medal for his service. After the war, Kennedy represented the 11th congressional district of Massachusetts in the U.S. House of Representatives from 1947 to 1953.
    </p>
    <p>
        To learn more about JFK, click <a href="JFK.html">here</a>.
    </p>
</div>
```

### Row Styles
1. Set the `class` attribute of the `img` to "pres-img"
    - This will apply the existing styles for all the president images
1. Set the `class` attribute of the information `p` to "info-text"
    - This will apply the existing styles for all the blurbs
1. Set the `id` attribute of the `a` to "jfk-link"
1. In the CSS file, create a new ruleset selecting the `a` by its `id`
    - Within the ruleset, create a new declaration setting the "color" to "maroon"

#### Code
```css
#jfk-link {
    color: maroon;
}
```

## New JFK page
Create a new HTML file named `JFK.html` (the file linked by the `a` on the main page). The entire page will be devoted to John F. Kennedy.

### Setup
1. Fill out the HTMl file with the basic tags: `html`, `head`, `body`
1. Within the `<head></head>` element, link to the Bootstrap CSS file:
    ```html
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    ```
1. Underneath the Bootstrap `<link>`, create another link to the "Presidents.css" stylesheet
1. Within the `<body></body>` element, add a `div` for the header
    - Set its class attribute to "jumbotron text-center" so both sets of styles will apply
1. Underneath the "jumbotron" `<div></div>`, add another `div`
    - Set its class attribute to "container"

#### Code
```html
<html>
    <head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="Presidents.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="jumbotron text-center"></div>
        <div class="container"></div>
    </body>
</html>
```

### Jumbotron Content and Style
1. Within the "jumbotron" `<div></div>`, add an `h2` that says "John F. Kennedy"
    - Set its `class` attribute to "display-4" so the Bootstrap styles apply
    - Set its `id` attribute to "jfk-header"
1. In the CSS file, create a new ruleset selecting the `h2` by its `id`
    - Within the ruleset, create a new declaration setting the "color" to "palegoldenrod"
1. Back in the HTML file, underneath the `<h2></h2>`, add a `p` that says "Everyone's second-favorite president"
1. Underneath the `<p></p>`, add an `a` that says "Back"
    - Set its `href` attribute to "index.html" so it navigates to the main page when clicked
    - Set its `class` attribute to "btn" so the Bootstrap styles apply

#### Code
##### HTML
```html
<h2 class="display-4" id="jfk-header">John F. Kennedy</h2>
<p>Everyone's second-favorite president</p>
<a class="btn" href="index.html">Back</a>
```

##### CSS
```css
#jfk-header {
    color: palegoldenrod;
    transition: .25s text-shadow;
}
```

### Container Content
1. Within the "container" `<div></div>`, add another `div`
    - Set its `class` attribute to "row"
1. Within the "row" `<div></div>`, add two additional `div`s
    - Set the `class` attribute for each `div` to "col-md-6" so they each take up half of the available space
1. Within the first column `<div></div>`, add an `iframe`
    - Set its `src` attribute to "https://www.youtube.com/embed/56wg7-f4hFk"
    - Set its `frameborder` attribute to "0"
1. Within the second column `<div></div>`, add an `h4` that says "Cabinet"
1. Underneath the "Cabinet" `<h4></li>`, add a `ul`
1. Within the `<ul></ul>`, add `li` elements for the following people:
    - Lyndon B. Johnson: Vice President
    - Dean Rusk: Secretary of State
    - C. Douglas Dillon: Secretary of Treasury
    - Robert McNamara: Secretary of Defense
    - Robert F. Kennedy: Attorney General
    - J. Edward Day: Postmaster General

### Header Hover
1. In the CSS file, create a new ruleset to select the "jfk-header" element in its hover state
1. Within the ruleset, create a new declaration that adds a shadow to the text
    - property: `text-shadow`
    - value: `-2px 2px 10px lightgoldenrodyellow`
1. In the "jfk-header" ruleset, add a declaration that sets the `text-shadow` to transition in `.25s`
    - property: `transition`
    - value: `.25s text-shadow`

```html
<html>
    <head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="Presidents.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="jumbotron text-center">
            <h2 class="display-4" id="jfk-header">John F. Kennedy</h2>
            <p>Everyone's second-favorite president</p>
            <a class="btn" href="index.html">Back</a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <iframe src="https://www.youtube.com/embed/56wg7-f4hFk" frameborder="0"></iframe>
                </div>
                <div class="col-md-6">
                    <h4>Cabinet</h4>
                    <ul>
                        <li>Lyndon B. Johnson: Vice President</li>
                        <li>Dean Rusk: Secretary of State</li>
                        <li>C. Douglas Dillon: Secretary of Treasury</li>
                        <li>Robert McNamara: Secretary of Defense</li>
                        <li>Robert F. Kennedy: Attorney General</li>
                        <li>J. Edward Day: Postmaster General</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
```

## Code
### Presidents Page
```html
<div class="row">
    <div class="col-md-3">
        <img class="pres-img" src="JFK.jpg">
    </div>
    <div class="col-md-9">
        <h4>John F. Kennedy</h4>
        <p class="info-text">
            Kennedy was born in Brookline, Massachusetts, the second child of Joseph P. Kennedy Sr. and Rose Kennedy. He graduated from Harvard University in 1940 and joined the U.S. Naval Reserve the following year. During World War II, he commanded a series of PT boats in the Pacific theater and earned the Navy and Marine Corps Medal for his service. After the war, Kennedy represented the 11th congressional district of Massachusetts in the U.S. House of Representatives from 1947 to 1953.
        </p>
        <p>
            To learn more about JFK, click <a id="jfk-link" href="JFK.html">here</a>.
        </p>
    </div>
</div>
```

### JFK Page
```html
<html>
    <head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="Presidents.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="jumbotron text-center">
            <h2 class="display-4" id="jfk-header">John F. Kennedy</h2>
            <p>Everyone's second-favorite president</p>
            <a class="btn" href="index.html">Back</a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <iframe src="https://www.youtube.com/embed/56wg7-f4hFk" frameborder="0"></iframe>
                </div>
                <div class="col-md-6">
                    <h4>Cabinet</h4>
                    <ul>
                        <li>Lyndon B. Johnson: Vice President</li>
                        <li>Dean Rusk: Secretary of State</li>
                        <li>C. Douglas Dillon: Secretary of Treasury</li>
                        <li>Robert McNamara: Secretary of Defense</li>
                        <li>Robert F. Kennedy: Attorney General</li>
                        <li>J. Edward Day: Postmaster General</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
```

### CSS
```css
#jfk-link {
    color: maroon;
}

#jfk-header {
    color: palegoldenrod;
    transition: .25s text-shadow;
}

#jfk-header:hover {
    text-shadow: -2px 2px 10px lightgoldenrodyellow;
}
```
