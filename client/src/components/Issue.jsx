import { useContext } from 'react';
import moment from 'moment';
import CommentContainer from './CommentContainer';
import { UserContext } from '../context/UserContext';

export default function Issue(props) {
  // Destructure props to extract issue details
  const { title, description, imgUrl, _id, username, createdAt, likedUsers, dislikedUsers } = props;
  
  // Format the creation date using moment.js
  const timeStamp = moment(createdAt).fromNow();
  
  // Extract upvote and downvote functions from UserContext
  const { upvoteIssue, downvoteIssue } = useContext(UserContext);
  
  return (
    <div className="issue">
      {/* Display the title of the issue */}
      <h1>{title}</h1>
      
      {/* Display the image associated with the issue */}
      <img src={imgUrl} alt="Issue image"/>
      
      {/* Display the description of the issue */}
      <h3>{description}</h3>
      
      <div className="votes">
        <div>
          {/* Display the number of likes and provide a button to upvote */}
          <p>{likedUsers.length} Users agree with this.</p>
          <button onClick={() => upvoteIssue(_id)}>Agree?</button>
        </div>
        
        <div>
          {/* Display the number of dislikes and provide a button to downvote */}
          <p>{dislikedUsers.length} Users oppose this.</p>
          <button onClick={() => downvoteIssue(_id)}>Disagree?</button>
        </div>
      </div>
      
      {/* Display the username of the person who posted the issue */}
      <h3>Posted by User:</h3>
      <h3>{username}</h3>
      
      {/* Display the time when the issue was posted */}
      <h2>{timeStamp}</h2>
      
      {/* Integrate CommentContainer to display related comments */}
      <CommentContainer issueId={_id} />
    </div>
  );
}
