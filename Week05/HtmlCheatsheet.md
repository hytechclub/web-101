# HTML Elements Cheatsheet
## HTML - `html`
Surrounds the entire HTML document

```html
<html>

</html>
```

## Body - `body`
Represents the **content** of an HTML document

```html
<html>
    <body>
    
    </body>
</html>
```

## Header - `h1`-`h6`
Represents different sizes of section headings

```html
<h1>I am the biggest header</h1>
<h6>I am the smallest header</h6>
```

## Paragraph - `p`
Represents a paragraph, usually blocks of text

```html
<p>Normal text</p>
```

## Anchor - `a`
Creates a hyperlink to another URL that will navigate when clicked

### Attributes
- `href`: The URL where the link will navigate

```html
<a href="https://google.com">Google</a>
```

## Image - `img`
Embeds an image into a webpage

### Attributes
- `src`: The URL of the image

### Notes
- Does not require a closing tag

```html
<img src="https://i.imgur.com/v4GLRqb.jpg">
```

## Lists - `ul`, `ol`, `li`
Represents a list of items, rendered as a bulletted or numbered list

```html
<p>Shopping List</p>
<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Cheese</li>
</ul>

<p>Recipe</p>
<ol>
    <li>Scramble Eggs</li>
    <li>Add Milk</li>
    <li>Add Cheese</li>
    <li>Fry</li>
</ol>
```

## Input - `input`
Used to create interactive controls for web-based forms

### Attributes
- `type`: Determines the appearance of the input

#### Types
- `text`
- `checkbox`
- `radio`
- `range`
- `file`

- `name`: Used to group inputs together (radio buttons)

### Notes
- Does not require a closing tag

```html
<p>Hometown: <input type="text"></p>
<p>Current Resident: <input type="checkbox"></p>
<p>Income</p>
<p>
    Under $5,000: <input type="radio" name="income">
    Between $5,000 and $1,000,000: <input type="radio" name="income">
    Over $1,000,000: <input type="radio" name="income">
</p>
<p>Satisfaction with Service: <input type="range"></p>
<p>Proof of Identity: <input type="file"></p>
```

## Dropdown - `select` and `option`
Represents a control that provides a menu of options

```html
<p>Pet</p>
<select>
    <option>Dog</option>
    <option>Cat</option>
    <option>Hamster</option>
</select>
```

## Text Area - `textarea`
Represents a multi-line plain-text editing control

```html
<p>Address</p>
<textarea></textarea>
```

## Table - `table`, `thead`, `tbody`, `tr`, `th`, and `td`
Represents tabular data: information that is presented in a two-dimensional table comprised of rows and columns of cells containing data

### Attributes
- `border`: Gives the table a border and borders for each cell (no value necessary)

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sally</td>
            <td>65</td>
        </tr>
        <tr>
            <td>Bernard</td>
            <td>59</td>
        </tr>
    </tbody>
</table>
```

## Iframe - `iframe`
Represents a nested browsing context, embedding another HTML page into the current one

### Attributes
- `src`: The URL of the page to embed
- `height`: The height of the embedded frame (in pixels)
- `width`: The width of the embedded frame (in pixels)

```html
<iframe src="https://weather.gov" height="500" width="400"></iframe>
```