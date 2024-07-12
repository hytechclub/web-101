# Challenge: Creating multiple HTML files
Often, websites will consist of multiple webpages, each with their own information. Add some links to your "About Me" webpage that lead to pages containing more information about yourself!

## Instructions
For each of the items listed below, create a **new** HTML page. Make sure to name it with a `.html` at the end. On the pages, include a header, some paragraphs, some images, and possibly links.

- Family
    - Fill the HTML page with information about your family tree and family history (include pets)
- Interest
    - Write in-depth about an interest of yours (e.g., sports, music, art, fashion, writing, etc)
- Career Aspiration
    - Provide some information about what career you would like once you become an adult

Once you have created your new HTML pages, link them from your main "About Me" page! Create a new section, with a header that says **More Information**. Then, include a paragraph about each of your additional pages, and use an `a` anchor tag to link to them.

### Further explorations
If you complete the above instructions, research the following tags and add them throughout your "About Me" page:
- `<br>`  This is a line break. It moves text on to a new line. It does not have a closing tag. 

<html>
    <body>
        <p> This is a paragraph </p>
        <br>
        <p>This is a paragraph after a line break </p>
    </body>
</html>

- `<audio>`   This tag allows you to embed audio content that can be played in the browser into a webpage. There are three supported audio formats in HTML: MP3, WAV, and OGG. 

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
</audio>

- `<code>`  This defines a piece of code within a webpage, maintaining the original format of the code rather than formatting it into text. 

- `<del>`  This creates a strikethrough in text without removing it from the website. You can also use CSS to change the color and style of the strikethrough.

- `<details>`  This tag wraps around content that you want to hide initially but reveal upon user interaction. Use the `<summary>` tag for what you want to show on the website and then add a `<p>` with the text you want to show once it is hovered over
