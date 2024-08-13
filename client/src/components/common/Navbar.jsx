// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// export default function Navbar(props) {
//   const { logout, token } = props; // Destructure logout function from props
//   const navigate = useNavigate()
//   function handleClick() {
//     if (token) {
//       logout()
//     } else {
//       navigate('/')
//     }
//   }
//   return (
//     <div className="navbar">
//       {token && <>
//         <Link to="/home">
//           <p className="navbar-buttons">Home</p>
//         </Link>
//         <Link to="/pacetracker">
//           <p className="navbar-buttons">Pace Tracker</p>
//         </Link>
//       </>}
//       <Link to="/about">
//         <p className="navbar-buttons">About</p>
//       </Link>
//       {/* Logout button with an onClick event handler to trigger the logout function */}
//       <p className="navbar-buttons" onClick={handleClick}>{token ? "Logout" : "Login"}</p>
//     </div>
//   );
// }


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// export default function Navbar(props) {
//   const { logout, token } = props; // Destructure logout function from props
//   const navigate = useNavigate()
//   function handleClick() {
//     if (token) {
//       logout()
//     } else {
//       navigate('/')
//     }
//   }
//   return (
//     <div className="navbar">

//       {token && <>
//       <Link to="/home">
//         <p className="navbar-buttons">Home</p>
//       </Link>
//       <Link to="/pacetracker">
//         <p className="navbar-buttons">Pace Tracker</p>
//       </Link>
//       <Link to="/settings">
//         <p className="navbar-buttons">Settings</p>
//       </Link>

//       </>}
//       <Link to="/about">
//         <p className="navbar-buttons">About</p>
//       </Link>

//       {/* Logout button with an onClick event handler to trigger the logout function */}
//       <p className="navbar-buttons" onClick={handleClick}>{token ? "Logout" : "Login"}</p>
//     </div>
//   );
// }


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'

export default function Navbar(props) {
  const { logout, token } = props; // Destructure logout function from props
  const navigate = useNavigate()
  function handleClick() {
    if (token) {
      logout()
    } else {
      navigate('/')
    }
  }
  return (
    <div className="navbar">
      <img src={logo}/>
      {token && <>
      <Link to="/home">
        <p className="navbar-buttons">Home</p>
      </Link>
      <Link to="/pacetracker">
        <p className="navbar-buttons">Pace Tracker</p>
      </Link>
      </>}
      <a href="https://airtable.com/appg2CeX4DA9Y7hDi/shrUyD9aoryvXZgfu">Daily Standup</a>
      <a href="https://jobleads.today/">VSchool Hub</a>
      <Link to="/about">
        <p className="navbar-buttons">About</p>
      </Link>
      {/* Logout button with an onClick event handler to trigger the logout function */}
      <p className="navbar-buttons" onClick={handleClick}>{token ? "Logout" : "Login"}</p>
    </div>
  );
}
