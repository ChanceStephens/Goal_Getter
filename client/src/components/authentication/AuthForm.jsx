// import React from 'react';

// export default function AuthForm(props) {
//   // Destructure props to extract necessary values and functions
//   const {
//     handleChange,
//     handleSubmit,
//     btnText,
//     errMsg,
//     inputs: { username, password }
//   } = props;

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Input field for the username */}
//       <input 
//         type="text" 
//         value={username} 
//         name="username" 
//         onChange={handleChange} 
//         placeholder="Username" 
//       />
//       {/* Input field for the password */}
//       <input 
//         type="password" 
//         value={password} 
//         name="password" 
//         onChange={handleChange} 
//         placeholder="Password" 
//       />
//       {/* Submit button with dynamic text */}
//       <button>{btnText}</button>
//       {/* Display error message if exists */}
//       {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
//     </form>
//   );
// }


import React from 'react';

export default function AuthForm(props) {
  // Destructure props to extract necessary values and functions
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: { username, password }
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the username */}
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username" 
      />
      {/* Input field for the password */}
      <input 
        type="password" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password" 
      />
      {/* Submit button with dynamic text */}
      <button>{btnText}</button>
      {/* Display error message if exists */}
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
    </form>
  );
}