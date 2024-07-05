import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentContainer(props) {
  const { issueId } = props; // Destructure issueId from props

  // State to manage the visibility of the comment list
  const [isHidden, setIsHidden] = useState(true);

  // Function to toggle the visibility of the comment list
  function toggleView() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      {/* Render the CommentForm component and pass the issueId as a prop */}
      <CommentForm issueId={issueId} />
      
      {/* Button to toggle the visibility of the comment list */}
      <button onClick={toggleView}>
        {isHidden ? 'Show Comments' : 'Hide Comments'}
      </button>
      
      {/* Conditionally render the CommentList component based on the isHidden state */}
      {!isHidden && <CommentList issueId={issueId} />}
    </div>
  );
}

export default CommentContainer;
