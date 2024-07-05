import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

// Initial input state for the form
const initInputs = {
  title: "",
  description: "",
  imgUrl: "" 
};

export default function IssueForm(props) {
  // State to manage form inputs
  const [inputs, setInputs] = useState(initInputs);
  const { addIssue } = useContext(UserContext); // Extract addIssue function from UserContext
  
  // Handle change in form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  }
  
  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    addIssue(inputs); // Call addIssue function with current inputs
    setInputs(initInputs); // Reset form inputs
  }
  
  // Destructure inputs for easier access
  const { title, description, imgUrl } = inputs;
  
  return (
    <div className="issue-form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={handleChange} 
          placeholder="Title" />
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={handleChange} 
          placeholder="Description" />
        <input 
          type="text" 
          name="imgUrl" 
          value={imgUrl} 
          onChange={handleChange} 
          placeholder="Image URL" />
        <button>Add an Issue</button>
      </form>
    </div>
  );
}
