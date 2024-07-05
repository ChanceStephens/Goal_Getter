import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function CommentForm(props) {
  const { addComment } = useContext(UserContext); // Extract addComment function from UserContext
  const { issueId } = props; // Destructure issueId from props

  // State to manage form data and comments
  const [formData, setFormData] = useState({ text: '' });
  const [comments, setComments] = useState([]);

  // Handle change in form input
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    addComment(issueId, formData); // Call addComment function with issueId and formData
    setComments(prevComments => [...prevComments, formData.text]); // Update comments state with new comment
    setFormData({ text: '' }); // Reset form data
  }

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Comment"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
        <button>Leave Comment</button>
      </form>
      {/* Display the list of comments */}
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
}
