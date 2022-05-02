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

<img width="999" alt="Screen Shot 2022-05-02 at 2 13 18 PM" src="https://user-images.githubusercontent.com/55194773/166308159-8b524bfc-76aa-4ae6-917f-864ebf8aa782.png">

Once they log in, they are brought to the welcome page:

<img width="1012" alt="Screen Shot 2022-05-02 at 2 13 32 PM" src="https://user-images.githubusercontent.com/55194773/166308173-760c2d1f-8ad8-4f5c-b952-2cacedf083e0.png">

The user can click on the MyBucketList tab on the navbar above which will bring them to this page that allows them to create and view their bucket list:

<img width="991" alt="Screen Shot 2022-05-02 at 2 18 32 PM" src="https://user-images.githubusercontent.com/55194773/166308197-c7287eb8-edc6-49a5-95fb-b6838d058cf6.png">

Scrolling down on this page, the user can find this section that allows them to input the name of the item they want to accomplish, a description of it, and then the location of where they want to complete the item.
<img width="998" alt="Screen Shot 2022-05-02 at 2 22 55 PM" src="https://user-images.githubusercontent.com/55194773/166308214-5b6e490c-e25c-41d4-998f-851a956d5db6.png">

Upon clicking the add to list button, they should see their new item added to the ongrowing list of items they want to complete. Notice how the most recent added items will be towards the bottom of the list to make it easier for the user to track which items they want to complete when. Each entry includes the status of whether they have acheived the item and the date of when the item was added to the list.
  
<img width="983" alt="Screen Shot 2022-05-02 at 2 25 25 PM" src="https://user-images.githubusercontent.com/55194773/166308224-9bf16074-5ff8-4203-a4ed-b58d2d7df543.png">

If the user is done with the item, they can click on the 'still in progress' button which will automatically change the status to 'acheived!'. Let's say the user already visited the Eiffel Tower in Paris, now after clicking the button, they can see 'acheived!' next to that entry:

Similarly, if a user wants to delete an item of the list, they can simply hit the 'delete item' button and it will remove the item from the list:
