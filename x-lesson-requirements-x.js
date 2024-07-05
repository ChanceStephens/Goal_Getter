//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   ROCK THE VOTE PROJECT REQUIREMENTS   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※♦

//☆                                                              Key Requirements:                                                            ☆

//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   1. User Authentication:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦
//  🗹  Create a login/signup page required to access any part of the application.
//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   2. Issue List:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦
//  🗹  Develop a web page displaying a list of political issues.
//  🗹  Each issue includes a title and description.
//  🗹  Users can upvote or downvote each issue.                                                                                                
//  🗹  Users are limited to one upvote and one downvote per issue.                                                                             
//  🗹  Sort issues based on the number of upvotes, with the most upvoted issues at the top.                                                    
//  🗹  Display the total number of votes for each issue.                                                                                       
//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   3. User Interaction:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦
//  🗹  Include a page for logged-in users to add new posts.
//  🗹  Implement a page where logged-in users can view all the posts they've created.
//  🗹  Allow users to comment on posts with an unlimited number of comments per post.
//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   4. Backend Configuration:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦
//  🗹  Create backend models and routes for persisting topics, comments, and votes.
//☆                                                              Models:                                                                      ☆
//  🗹  User.js
//  🗹  Issue.js
//  🗹  Comment.js
//☆                                                              Routes:                                                                      ☆
//  🗹  authRouter.js
//  🗹  issueRouter.js
//  🗹  commentRouter.js
//  🗹  Utilize React for the front-end.
//  🗹  Employ Node/Express for the back-end.
//  🗹  Use MongoDB and Mongoose for the database and models.
//  🗹  Manage user authentication with dotenv, jsonwebtoken, and expressJwt.
//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   5. API Operations:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦
//  🗹  Implement GET, POST, PUT, and DELETE functionalities for issues and comments.                                                           
//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   6. Project Phases:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦
//  🗹  Divide the project into three phases following Level 6 videos and their associated Git repository.                                      
//  🗹  First, set up user authentication based on the provided Git repository.                                                                 
//  🗹  After completing Part 3 of the video series, have user authentication and basic routing in place to develop the rest of the application.
//  🗹  Suggestions:                                                                                                                            
//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   1. Model Structure:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦

//☆                                                              Create the following models:                                                 ☆
//  🗹  User.js
//  🗹  Issue.js (linked to the user who created it)
//  🗹  Comment.js (linked to the issue it was commented on and the user who created the comment).
//♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦   2. Database Relationships:   ♦※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※♦
//  🗹  Manage one-to-many and many-to-many database relationships:                                                                             
//  🗹  One-to-many relationships connect users to issues and comments to issues.                                                               
//  🗹  Many-to-many relationships for the upvote/downvote process, ensuring each issue can be upvoted or downvoted only once per user.         


