# Endangered Species Starter Code

**index.html**

```html
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
      <div class="jumbotron text-center">
        <h3 class="display-4">Endangered Species</h3>
        <div class="btn" id="subscribe">Subscribe</div>
        <p><a href="https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status" target="_blank">More Info</a></p>
      </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6" id="animal1">
                <h3>Axolotl</h3>
                <p>Axolotls are critically endangered. They can only be found in the wild in a specific lake in Mexico.</p>
                <img src="https://cdn.glitch.global/26d38cdf-acde-46ae-9f50-dc175641b72e/axolotl.jpg?v=1725049508199" >
            </div>
            <div class="col-md-6" id="animal2">
                <h3>Otter</h3>
                <p>Otters hold hands while sleeping to keep from drifting apart.</p>
                <img src="https://cdn.glitch.global/26d38cdf-acde-46ae-9f50-dc175641b72e/otter%20rotated.png?v=1725049560983" >
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" id="animal3">
                <h3>Amazon River Dolphin</h3>
                <p>These dolphins are known for their unique pink color.</p>
                <img src="https://cdn.glitch.global/26d38cdf-acde-46ae-9f50-dc175641b72e/pinkdolphin.jpg?v=1725049615829" >
            </div>
        </div>
    </div>
    </body>
</html>
```

**style.css**

```css
.btn {
  margin-bottom: 10px;
}

img {
  width: 100%;
}

.jumbotron {
  background-color: skyblue;
}

#subscribe {
  background-color: mediumspringgreen;
  cursor: pointer;
}

#animal1 {
  background-color: pink;
}

#animal2 {
  background-color: mediumspringgreen;
}

#animal3 {
  background-color:skyblue;
}

.col-md-6 {
  padding: 25px;
  box-sizing: border-box;
  border: 5px solid white;
}
```