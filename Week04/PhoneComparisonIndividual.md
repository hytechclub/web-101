# Phone Comparison: Individual Exercises
The phone comparison website is pretty good, but it could use a little more data. Follow the instructions below to fill out the page with some more information!

## Part 1 - Adding a new column
Users of the website would like to see information about the battery life of their smart phones. Add the column to the table, and fill out the data for each of the phones listed.

1. In the table header `tr`, add another `th` for "Battery" after "Internal Storage"
1. In each of the table body `tr`s, add the `td` for the phone's battery
    - Galaxy Note 9: 4,000mAh
    - iPhone XR: 2,943mAh
    - LG G7: 3,000mAh

## Part 2 - Adding a new phone
Users would like to see more than just three phones compared on the website. Add an additional row to the table, containing information for the Moto G6 smartphone.

1. Under the last `tr` in the `tbody`, add another `tr`
1. Fill in each `td` with the information for the Moto G6
    - Phone Name: Moto G6
    - Display Size: 5.7 inches
    - Weight: 5.89 oz
    - Internal Storage: 32 GB
    - Battery: 3,000mAh

Additionally, users would like to see a review of the Moto G6.

1. Under the last `iframe` in the `body`, add an `h3` with the phone's name
1. Under the `h3`, add an `iframe` with this review: https://www.tomsguide.com/us/moto-g6,review-5455.html
1. Set the width and height of the `iframe` appropriately

## Challenge
Add another column to the table with a link to the part of the page containing the review. When the link is clicked in the table, it should automatically scroll to the place on the page with the review `iframe`. Note that this is possible using only HTML. You will need to utilize the `id` attribute to accomplish this challenge.
