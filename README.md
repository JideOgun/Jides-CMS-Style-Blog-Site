# Title
### Jides-CMS-Style-Blog-Site
## Table of Contents
[Deployed Heroku Link](https://peaceful-stream-28816.herokuapp.com/)
---
1. [DESCRIPTION](#description)
2. [LICENSE](#licenses)
3. [INSTALLATION](#installation-instructions)
4. [USAGE](#usage-information)
5. [CONTRIBUTION GUIDELINES](#contribution-guidelines)
6. [TEST INSTRUCTIONS](#test-instructions)
7. [CREDITS](#credits)
8. [QUESTIONS](#questions)
---
 ## DESCRIPTION
 CMS-Style-Blog-Site where developers(users) can publish blog posts and comment on other developers(users) posts as well. <br>
 App is deployed to Heroku. <br>
 App follows MVC paradigm in its architechural structure. <br>
 App uses handlebars as the templating language. <br>
 App uses Sequelize as the ORM. <br>
 App uses express-session npm package for authentication. <br>
 

   ### CMS-Style-Blog-Site functionality
GIVEN a CMS-style blog site <br>
When the user visits the site for the first time <br>
THEN the user is presented with the homepage, which includes existing blog posts if any have been posted;
navigation links for the homepage and the dashboard; and the option to log in <br>
When the user clicks on the homepage option <br>
Then the user is taken to the homepage <br>
When the user click on any other links in the navigation <br>
Then the user is prompted to either sign up or sign in <br>
When the user chooses to sign up <br>
Then the user is prompted to create a username and password <br>
When the user clicks on the sign-up button <br>
THEN the user's credentials are saved and I am logged into the site <br>
When the user revisits the site at a later time and choose to sign in <br>
Then the user is prompted to enter my username and password <br>
When the user am signed in to the site <br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out <br>
When the user clicks on the homepage option in the navigation <br>
Then the user is taken to the homepage and presented with existing blog posts that include the post title and the date created <br>
When the user clicks on an existing blog post <br>
Then the user is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment <br>
When the user enter a comment and clicks on the submit button while signed in  <br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created <br>
When the user clicks on the dashboard option in the navigation <br>
Then the user is taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post <br>
When the user clicks on the button to add a new blog post <br>
Then the user is prompted to enter both a title and contents for my blog post <br>
When the user clicks on the button to create a new blog post <br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post <br>
When the user clicks on one of my existing posts in the dashboard <br>
Then the user is able to delete or update my post and taken back to an updated dashboard <br>
When the user clicks on the logout option in the navigation <br>
Then the user is signed out of the site <br>
When the user am idle on the site for more than a set time <br>
Then the user is able to view comments but I am prompted to log in again before I can add, update, or delete comments <br>
   
   
 ---
 ## LICENSES
        Licensed under the Apache License.
 ---
 ## INSTALLATION INSTRUCTIONS
 
        Install Node, express, nodemon.
 ---
 ## USAGE INFORMATION
       none
 ---
## CONTRIBUTION GUIDELINES
        None available.
---
## TEST INSTRUCTIONS
        None available.
---
## CREDITS
   * UT Modules 14  
---
## Questions
For any questions 
- Email: [jideogun93@gmail.com](mailto:jideogun93@gmail.com)
- Gihtub: [jideogun](https://github.com/jideogun)
