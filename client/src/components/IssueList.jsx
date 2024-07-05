import React from 'react';
import Issue from './Issue.jsx';

export default function IssueList(props) {
  const { issues } = props; // Destructure issues from props

  // Sort issues by the number of likes in descending order
  const sortedIssues = [...issues].sort((a, b) => b.likedUsers.length - a.likedUsers.length);

  return (
    <div className="issue-list">
      {/* Map through the sorted issues and render each Issue component */}
      {sortedIssues.map(issue => (
        <Issue {...issue} key={issue._id} />
      ))}
    </div>
  );
}
