# Challenge: Movie Search
HTML inputs are cool, but it would be cooler if the data actually went somewhere when the user clicked the "Submit" button. Learn about HTML forms to create an interactive, user-driven movie search on a webpage!

**Note: For the "Submit" button to work in Repl, the project must be opened in a separate window:**

![](../Assets/OpenInNewTab.png)

## Background
Web developers use HTML forms to send data from their webpages to servers. For more information about the flow of data from forms, read this article: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data

## Instructions
For this challenge, you will create a webpage with a form. When a user submits the form, the browser will go to the IMDb Advanced Title Search page, using the data from the form to filter the results. **Before starting to build the HTML page, play around with the IMDb search here: https://www.imdb.com/search/title**

Notice that when you submit the form, the redirected URL reflects the data they entered. It uses **query string parameters** to communicate with the server. The form populates those values, and the server parses them and returns the proper results. The webpage you create in this challenge will simulate the IMDb form, but you can personalize it however you like!

### Setup
1. Create a new HTML page, and add the basic tags: `html`, and `body`
1. Add a header at the top of your page with the text "Movie Search"

### The form basics
1. Add a `form` element under the header
1. Set the `action` attribute of the form to point to [https://www.imdb.com/search/title](https://www.imdb.com/search/title)
1. Inside the form, create a new `p` element
1. Inside the new `p` element, create a "Submit" button
    - To do this, create an `input` element, and set its `type` attribute to `submit`
1. Open your file in a web browser, and verify that clicking "Submit" will navigate to the IMDb page

### Adding basic inputs
Add a "Title" input where the user can enter for a title they wish to search. Additionally, add in a "Now Playing" checkbox, so the user can choose to search only for titles which are currently in theaters.

1. Inside the form, above the "Submit" button, create a `h3` element that says "Title"
1. Under the "Title" `h3`, add an `input` element
1. On the `input`, set the `type` attribute to `text`, and the `name` attribute to "title"
    - The `name` attribute determines the field on the IMDb search
1. Create another `h3` element that says "Now Playing"
1. Under the "Now Playing" `h3`, add a checkbox `input` (set the `type` attribute to `checkbox`)
1. On the checkbox input, set the `name` attribute to "now_playing"
1. On the checkbox input, set the `value` attribute to "restrict"
    - This way, when the checkbox is checked, it will set "now_playing=restrict"
1. Open your file in a web browser, and verify that searching for some titles works properly

### Adding a "Genres" dropdown
Add a dropdown with a few genres, so the user can further narrow down their search if they so choose.

1. Inside the form, add another `h3` element saying "Genre"
1. On the next line, create a `select` element
1. Set the `name` attribute of the `select` to "genres"
1. Within the `select` element, add an `option` element that contains the text "All"
1. Set the `value` attribute of the `option` element to blank (`""`)
    - This will mean that no genre is set in the search
1. Create three additional `option` elements within the `select` element
1. For each `option` element, the text and `value` attribute should match, and should be real genres
1. Open your file in a web browser, and verify that searching for some genres works properly

### Adding a "Rating" radio button set
Add some radio buttons so the user can narrow down their search by rating.

1. Inside the form, add another `h3` element that says "Rating"
1. On the next line, add a `p` element
    - This `p` element will be one radio button option
1. Inside the radio `p` element, create an `input` element with `type` "radio"
1. Set the `name` attribute of the radio `input` to "certificates"
    - Giving radio buttons the same `name` value will ensure that only one in the group is checked
1. Set the `value` attribute of the radio `input` to "US:G"
1. Outside of the `input`, but within the radio `p` element, insert the text "G"
1. Repeat the above steps and create radio `p` elements for "US:PG" and "US:PG-13"
    - Make sure all the `name` attributes are "certificates", and they contain text
1. Open your file in a web browser, and verify that searching for some ratings works properly

### Adding other fields
Once you have added the fields above, revisit the IMDb Advanced Title Search page. Take a look at some of the options on that form, and how they data is represented in the query string of the URL after you submit the form. Try to add some other inputs to your webpage, or you can even try to statically set some filter values using hidden inputs!

#### More input types
- Reference: [https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)

## Next Steps
After completing the Movie Search Challenge, move on to the [Post Challenge](PostChallenge.md).
