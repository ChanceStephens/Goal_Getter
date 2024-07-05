import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import IssueList from './IssueList.jsx';
import crowd from '../assets/crowd.png';

export default function Public() {
  // Extract functions and state from UserContext
  const { getAllIssues, allIssues, getAllComments } = useContext(UserContext);
  
  // useEffect hook to fetch issues and comments when the component mounts
  useEffect(() => {
    getAllIssues(); // Fetches all issues
    getAllComments(); // Fetches all comments for the issues
  }, []);
  
  return (
    <div className="public">
      <h1>Today's Biggest Political Issues</h1>
      {/* Render the list of issues */}
      <IssueList issues={allIssues} />
      {/* Display an image */}
      <img src={crowd} alt="Crowd" />
    </div>
  );
}
