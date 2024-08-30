# Customization
There is so much you can do with HTML and CSS. Here are some ideas!

## HTML: Embed a YouTube Video
It is pretty simple to add a YouTube video to your website; YouTube does all the hard work for you! First, find an appropriate video (e.g., [color red](https://www.youtube.com/watch?v=8YWl7tDGUPA)). Then, follow [this guide](https://support.google.com/youtube/answer/171780?hl=en) to copy the HTML code needed to embed the video. Then, paste it into your **index.html** file!

The code should look something like this:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/7zkX6kfnWbk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## CSS: Custom Fonts
There are _some_ fonts built into the web by default, but there are a ton more available online. Use [Google Fonts](https://fonts.google.com/) to outfit your website with a cool custom one!

### Built-In Project Fonts
Some fonts are already built into the Glitch project. In the project files area, open the **extras/** folder, and then the **fonts.txt** file.  This file contains a list of usable fonts! Find one, and put it in the **style.css** code like this:

```css
* {
  font-family: "Georgia";
}
```

Try out some of the different ones to see how they look!

### More Google Fonts
[Click here for a full guide on using Google Fonts.](https://developers.google.com/fonts/docs/getting_started) There are so many fonts available!

Here is an example using a font called [Ms Madi](https://fonts.google.com/specimen/Ms+Madi):

```css
@import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');

* {
  font-family: "Ms Modi", cursive;
}
```

To use a different font, copy the name and update the `Ms+Madi` part of the url.

## CSS: Create a Gradient Background or a Background Image
Currently, the background of the website is just a solid color. But it can be a gradient color, or even an image!

### Background Gradient
Luckily, there is a website that generates CSS code for gradients.

1. Open a new tab and go to [cssgradient.io](https://cssgradient.io)
1. Play around with the color selection tools to find a nice gradient to use
    - Select different colors for each point on the line
    - Change angles or gradient type
    - Add new color points
    - Do whatever makes it look the best!
1. Once a good gradient is found, scroll down a bit to the **CSS** section
1. Click the "Copy to Clipboard" button at the bottom of the **CSS** box
1. Go back to the StackBlitz project, and open the **style.css** file for editing
1. Within the `body` rule, (between `{` and `}`), paste the code (starting with `background`)
1. Save the project to see the background change!

That should be it! The code should end up looking something like this:

```css
body {
  background: rgb(34,193,195);
  background: linear-gradient(163deg, rgba(34,193,195,1) 0%, rgba(104,191,147,1) 10%, rgba(101,175,65,1) 40%, rgba(253,240,45,1) 100%);
}
```

### Background Image
It is also possible to give the page a background image. 

1. Find an image online
1. Copy the image address
1. Open the **style.css** file
1. Remove the value for the `background` property
1. Replace the value with `url("")`
1. Inside the quotes, paste the image address
1. Save the project to see the background change!

It should look something like this:

```css
body {
    background: url("https://cdn.wallpaperhub.app/cloudcache/6/9/0/e/e/f/690eefe3ba1f553e0ea527f51ee407b604b681b4.jpg");
}
```

## CSS: Header Text Shadow
Another neat CSS trick is to add text shadow. For this example, add text shadow _only_ to the `h1` header.

1. In the **style.css** file, make a new line at the very bottom under everything
1. Create a new rule for the top header by adding `h1` and `{`
    - This will mean that all styles apply to each `h1` HTML element
1. Make a new line, and press space a couple times
1. There, add a new property: `text-shadow: red -1px 1px`
1. Make another new line, and add the closing `}` curly bracket
1. Save the project to see the shadow!
1. Update the numbers and the color to see how it changes the effect

The code should look something like this:

```css
h1 {
    text-shadow: red -1px 1px;
}
```

## CSS: Change Text Color on Hover
To make the website feel a bit more **🌟 i n t e r a c t i v e 🌟**, update the styles when hovering over certain elements on the page!

1. In the **style.css** file, create a new rule for `li` at the bottom of the file
    - The styles in this rule will only affect `li` elements
1. Add the `color` property with a value of `orange`
    - Notice that the text color changed
1. Update the beginning part so that instead of `li`, it is `li:hover`
    - This means the styles will only apply when the user hovers over the `li` elements
1. Save the project, and hover over the list items to see them change!
1. Update the values to change the effect

```css
li:hover {
  color: orange;
}
```

## CSS: Animations
[Click here for a guide to CSS animations.](https://www.w3schools.com/css/css3_animations.asp)
