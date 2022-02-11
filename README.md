# Title
### Jides-CMS-Style-Blog-Site
## Table of Contents
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
WHEN I visit the site for the first time <br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted;
navigation links for the homepage and the dashboard; and the option to log in <br>
WHEN I click on the homepage option <br>
THEN I am taken to the homepage <br>
WHEN I click on any other links in the navigation <br>
THEN I am prompted to either sign up or sign in <br>
WHEN I choose to sign up <br>
THEN I am prompted to create a username and password <br>
WHEN I click on the sign-up button <br>
THEN my user credentials are saved and I am logged into the site <br>
WHEN I revisit the site at a later time and choose to sign in <br>
THEN I am prompted to enter my username and password <br>
WHEN I am signed in to the site <br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out <br>
WHEN I click on the homepage option in the navigation <br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created <br>
WHEN I click on an existing blog post <br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment <br>
WHEN I enter a comment and click on the submit button while signed in  <br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created <br>
WHEN I click on the dashboard option in the navigation <br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post <br>
WHEN I click on the button to add a new blog post <br>
THEN I am prompted to enter both a title and contents for my blog post <br>
WHEN I click on the button to create a new blog post <br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post <br>
WHEN I click on one of my existing posts in the dashboard <br>
THEN I am able to delete or update my post and taken back to an updated dashboard <br>
WHEN I click on the logout option in the navigation <br>
THEN I am signed out of the site <br>
WHEN I am idle on the site for more than a set time <br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments <br>
   
   
 ---
 ## LICENSES
        Licensed under the Apache License.
 ---
 ## INSTALLATION INSTRUCTIONS
 
        Install Node, express, nodemon.
 ---
 ## USAGE INFORMATION
        Do not enter an ID that is already in use or it will throw an error. Checking schema and seeds files for already used ID's is advised.
        Run in an express server environment.
        Server restart is required for updated json file to render to page.
 ---
## CONTRIBUTION GUIDELINES
        None available.
---
## TEST INSTRUCTIONS
        None available.
---
## CREDITS
   * UT Modules 12
---

## Walkthrough Video
   * [Walkthrough Video]()
   
---
## Questions
For any questions 
- Email: [jideogun93@gmail.com](mailto:jideogun93@gmail.com)
- Gihtub: [jideogun](https://github.com/jideogun)
