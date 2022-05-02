# CS103CPA02
Link to Heroku App:
Link to Repository: https://github.com/aarthisivasankar-1/CS103CPA02
Link to Zoom Movie Demonstrating Proof of Concept:

For my CPA02 assignment- I have created a web app that allows users to keep track of their growing list of to do bucket list items that they want to acheive at some point in their life. 

*To run and install app locally*:

1. Clone the git repo to your desktop or other location

2. Open vscode, then go to terminal and run npm install. This will install all needed packages as needed

3. Next, run npm start. Once you see the phrase "we are connected!", that signifies the app is now successfully connected to the server. 

4. Go to your desired browser, and type localhost:<port number> (enter the specified port number in the app.js file) annd will bring you to the web app!


*App Overview with Screenshots*:


Users can log into their account here. If they dont have an account they can create one here as well. This ensure only them having complete and safe access to their list: 


Once they log in, they are brought to the welcome page:


The user can click on the MyBucketList tab on the navbar above which will bring them to this page that allows them to create and view their bucket list:


Scrolling down on this page, the user can find this section that allows them to input the name of the item they want to accomplish, a description of it, and then the location of where they want to complete the item.

Upon clicking the add to list button, they should see their new item added to the ongrowing list of items they want to complete. Notice how the most recent added items will be towards the bottom of the list to make it easier for the user to track which items they want to complete when. Each entry includes the status of whether they have acheived the item and the date of when the item was added to the list.

If the user is done with the item, they can click on the 'still in progress' button which will automatically change the status to 'acheived!':

Similarly, if a user wants to delete an item of the list, they can simply hit the 'delete item' button and it will remove the item from the list: