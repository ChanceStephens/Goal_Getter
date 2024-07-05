import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Auth from './components/Auth.jsx';
import Profile from './components/Profile.jsx';
import Public from './components/Public.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import { UserContext } from './context/UserContext.jsx';

export default function App() {
  // Get the user context to check if the user is logged in and to access logout function
  const { token, logout, user } = useContext(UserContext);

  return (
    <div className="app">
      {/* Conditionally rendering the Navbar if a token exists (user is logged in) */}
      {token && <Navbar logout={logout} />}
      
      {/* Setting up routes for the application */}
      <Routes>
        {/* Route for the landing page. Redirects to profile if logged in, otherwise shows Auth component */}
        <Route
          path="/"
          element={token ? <Navigate to="/profile" /> : <Auth />}
        />
        
        {/* Protected route for the user's profile. Requires token to access */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Profile />
            </ProtectedRoute>
          }
        />
        
        {/* Protected route for the public page. Requires token to access */}
        <Route
          path="/public"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Public />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
