# About Me: Follow-Along
With this exercise, you will create a webpage that shows some information about yourself.

## Setup
1. Create a new HTML file called `AboutMe.html`
1. In the new HTML file, add the `<html></html>` opening and closing tag
1. Inside of the `<html>` and `</html>`, add the `<body></body>` opening and closing tag
1. Inside of the `<body>` and `</body>`, add a `<h1></h1>` header tag that says "About Me"
1. Open up the `AboutMe.html` file in a web browser to make sure your page is working!

At the end of the **Setup**, your code should look like this (try to match the spacing):
```html
<html>
    <body>
        <h1>About Me</h1>
    </body>
</html>
```

## Greeting and basic information
1. Under the `h1` header tag, add in a `<p></p>` paragraph tag welcoming the user to your page
1. Add another paragraph containing your name
1. Add another paragraph containing your grade level
1. Add another paragraph containing your hometown

At the end of this section, your code should look something like this:
```html
<html>
    <body>
        <h1>About Me</h1>

        <p>Welcome to my page!</p>
        <p>My name is Arthur Read</p>
        <p>I am in 3rd grade</p>
        <p>I am from Elwood City</p>
    </body>
</html>
```

## Favorite animal
1. Under the last `p` paragraph tag, add a smaller `h3` header that says "Favorite Animal"
1. Add an image of your favorite animal
    1. Find an image somewhere online, and copy the **image URL**
    1. Add an `<img>` image tag under the `h3` header
    1. Set the `src` of the image to the URL, in quotes
1. Add a paragraph with some text about your favorite animal
1. Add a link to the Wikipedia page for your animal
    1. Find the Wikipedia page URL online
    1. Add an `<a></a>` anchor tag under the `p` paragraph
    1. Set the `href` of the image to the URL, in quotes
    1. Inside of the anchor tag, insert the text "Wikipedia"

## Final HTML
```html
<html>
    <body>
        <h1>About Me</h1>

        <p>Welcome to my page!</p>
        <p>My name is Arthur Read</p>
        <p>I am in 3rd grade</p>
        <p>I am from Elwood City</p>

        <h3>Favorite Animal</h3>
        <img src="https://i.imgur.com/GfT5Z9R.png" />
        <p>Dogs are the best!</p>
        <a href="https://en.wikipedia.org/wiki/Dog">Wikipedia</a>
    </body>
</html>
```