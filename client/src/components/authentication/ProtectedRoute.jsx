// import React from 'react';
// import { Navigate } from 'react-router-dom';

// export default function ProtectedRoute(props) {
//   const { token, redirectTo, children } = props;

//   // Check if the user is authenticated (token exists)
//   // If authenticated, render the children components
//   // Otherwise, navigate to the specified redirect path
//   return token ? children : <Navigate to={redirectTo} />;
// }


import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const { token, redirectTo, children } = props;

  // Check if the user is authenticated (token exists)
  // If authenticated, render the children components
  // Otherwise, navigate to the specified redirect path
  return token ? children : <Navigate to={redirectTo} />;
}