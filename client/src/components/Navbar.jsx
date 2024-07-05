import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { logout } = props; // Destructure logout function from props

  return (
    <div className="navbar">
      {/* Link to the user's profile page */}
      <Link to="/profile">
        <button className="navbar-buttons">Profile</button>
      </Link>

      {/* Link to the public page */}
      <Link to="/public">
        <button className="navbar-buttons">Public</button>
      </Link>

      {/* Logout button with an onClick event handler to trigger the logout function */}
      <button className="navbar-buttons" onClick={logout}>Logout</button>
    </div>
  );
}
