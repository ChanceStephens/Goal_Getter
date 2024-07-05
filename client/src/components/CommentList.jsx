import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

export default function CommentList(props) {
  const { issueId } = props; // Destructure issueId from props
  const { allComments } = useContext(UserContext); // Extract allComments from UserContext

  // Filter comments related to the specific issue
  const filteredComments = allComments.filter(comment => comment.issue === issueId);

  // Map through filtered comments to create JSX elements
  const commentElements = filteredComments.map(comment => (
    <div key={comment._id}>
      <p>{comment.username}</p>
      <p>{comment.text}</p>
    </div>
  ));

  // Log the filtered comments for debugging purposes
  console.log(filteredComments);

  return (
    <div>
      {commentElements}
    </div>
  );
}
