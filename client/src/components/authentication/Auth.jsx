// import React, { useContext } from 'react';
// import AuthForm from './AuthForm.jsx';
// import { UserContext } from '../context/UserContext.jsx';
// import './Authentication.css';

// export default function Auth() {
//   // Extract functions and values from UserContext
//   const { signup, login, errMsg, isLogin, inputs, handleInputChange, toggleForm } = useContext(UserContext);

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault(); // Prevents form submission from reloading the page
//     if (isLogin) {
//       login(inputs); // Calls login function from UserContext with form inputs
//     } else {
//       signup(inputs); // Calls signup function from UserContext with form inputs
//     }
//   }
  
//   return (
//     <div className="auth-container-page">
//       <div className="auth-container">
//         {isLogin ? (
//           <>
//             {/* Renders the login form */}
//             <AuthForm 
//               handleChange={handleInputChange} // Pass handleChange function to AuthForm
//               handleSubmit={handleSubmit} // Pass handleSubmit function to AuthForm
//               inputs={inputs} // Pass current input state to AuthForm
//               btnText="Login" // Text for the submit button
//               errMsg={errMsg} // Pass any error message to AuthForm
//             />
//             <p onClick={toggleForm}>Not a member?</p> {/* Link to toggle to signup form */}
//           </>
//         ) : (
//           <>
//             {/* Renders the signup form */}
//             <AuthForm 
//               handleChange={handleInputChange} // Pass handleChange function to AuthForm
//               handleSubmit={handleSubmit} // Pass handleSubmit function to AuthForm
//               inputs={inputs} // Pass current input state to AuthForm
//               btnText="Sign up" // Text for the submit button
//               errMsg={errMsg} // Pass any error message to AuthForm
//             />
//             <p onClick={toggleForm}>Already a member?</p> {/* Link to toggle to login form */}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm.jsx';
import { UserContext } from '../context/UserContext.jsx';
import './Authentication.css'

const initInputs = { username: "", password: "" };

export default function Auth() {
  // State to manage form inputs and toggle between signup and login forms
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);
  
  // Extract functions and values from UserContext
  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);
  
  // Handle change in form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  }

  // Handle signup form submission
  function handleSignup(e) {
    e.preventDefault(); // Prevents form submission from reloading the page
    signup(inputs); // Calls signup function from UserContext with form inputs
  }
  
  // Handle login form submission
  function handleLogin(e) {
    e.preventDefault(); // Prevents form submission from reloading the page
    login(inputs); // Calls login function from UserContext with form inputs
  }
  
  // Toggle between signup and login forms and reset error messages
  function toggleForm() {
    setToggle(prev => !prev); // Toggles the boolean state
    resetAuthErr(); // Resets any authentication error messages
  }
  
  return (
    <div className="auth-container-page">
      <div className="auth-container">
        {!toggle ? (
          <>
            {/* Renders the signup form */}
            <AuthForm 
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign up"
              errMsg={errMsg}
              />
            <p onClick={toggleForm}>Already a member?</p>
          </>
        ) : (
          <>
            {/* Renders the login form */}
            <AuthForm 
              handleChange={handleChange}
              handleSubmit={handleLogin}
              inputs={inputs}
              btnText="Login"
              errMsg={errMsg}
              />
            <p onClick={toggleForm}>Not a member?</p>
          </>
        )}
      </div>
    </div>
  );
}