import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import IssueForm from './IssueForm.jsx';
import IssueList from './IssueList.jsx';

export default function Profile() {
  // Extract user context data and functions
  const { 
    user: { username }, 
    issues,
    getUserIssues, 
    getAllComments
  } = useContext(UserContext);
  
  // useEffect hook to fetch user's issues and all comments when the component mounts
  useEffect(() => {
    getUserIssues(); // Fetches issues posted by the logged-in user
    getAllComments(); // Fetches all comments
  }, []); 

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1> {/* Displays a personalized welcome message */}
      <h3>Add A Political Issue</h3> {/* Heading for the IssueForm section */}
      <IssueForm /> {/* Renders the form for adding new issues */}
      <h3>Your Posted Political Issues</h3> {/* Heading for the IssueList section */}
      <IssueList issues={issues} /> {/* Renders the list of issues posted by the user */}
    </div>
  );
}
