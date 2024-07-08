// import React, { useContext } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Navbar from './components/common/Navbar.jsx';
// import Welcome from './components/pages/Welcome.jsx'
// import Home from './components/pages/Home.jsx';
// import PaceTracker from './components/pages/PaceTracker.jsx';
// import ProtectedRoute from './components/authentication/ProtectedRoute.jsx';
// import About from './components/pages/About.jsx';

// import { UserContext } from './components/context/UserContext.jsx';

// export default function App() {

//     const { token, logout } = useContext(UserContext);// Get the user context to check if the user is logged in and to access logout function
// console.log(token)
//     return (
//     <div className="app">
//         {<Navbar logout={logout} token={token} />}
//         <Routes>
//         <Route
//             path="/"
//             element={token ? <Navigate to="/home" /> : <Welcome />}
//         />
//         <Route
//             path="/home"
//             element={
//             <ProtectedRoute token={token} redirectTo="/">
//                 <Home />
//             </ProtectedRoute>
//             }
//         />
//         <Route
//             path="/pacetracker"
//             element={
//             <ProtectedRoute token={token} redirectTo="/">
//                 <PaceTracker />
//             </ProtectedRoute>
//             }
//         />
//         <Route path="/about" element={<About />} />
//         </Routes>
//     </div>
//     );
// }



import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/common/Navbar.jsx';
import Welcome from './components/pages/Welcome.jsx'
import Home from './components/pages/Home.jsx';
import PaceTracker from './components/pages/PaceTracker.jsx';
import ProtectedRoute from './components/authentication/ProtectedRoute.jsx';
import About from './components/pages/About.jsx';

import { UserContext } from './components/context/UserContext.jsx';

export default function App() {
  
  const { token, logout, user } = useContext(UserContext);// Get the user context to check if the user is logged in and to access logout function
console.log(token)
  return (
    <div className="app">
      {<Navbar logout={logout} token={token} />}
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <Welcome />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pacetracker"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <PaceTracker />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}