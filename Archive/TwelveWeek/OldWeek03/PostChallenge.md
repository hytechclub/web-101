# Challenge: POST Request
First, do some research about [HTTP](https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/http-html/a/hypertext-transfer-protocol-http). Learn about [the difference between GET requests and POST requests](https://www.w3schools.com/tags/ref_httpmethods.asp).

In the [Movie Search Challenge](MovieSearchChallenge.md), HTML forms are used to make a GET request to IMDb. The data from the form is used to search a database. In a POST request, the data from the form is used to update data in a database.

## Textify
[txt.fyi](https://txt.fyi/) is a website that allows users to post text. The website hosts the posts with unique URLs. Try submitting some text to see what happens.

## Viewing the Request with Developer Tools
1. Go to the [txt.fyi](https://txt.fyi/) homepage in Google Chrome
1. Enter some text
1. Press the `F12` key to open Developer Tools
1. Go to the "Network" tab
1. Make sure the "Preserve log" checkbox is checked  
    ![](Assets/PreserveLog.png)
1. Click the "PUBLISH" button on **txt.fyi**, and view the requests in the "Network" tab
1. Click on the "do.php" request to see more information about the request - specifically the "Form Data" section

## Building a New Form
Create a new HTML page with a form similar to the **txt.fyi** page. Make the form POST to the **txt.fyi** website!
