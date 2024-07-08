// import React from 'react';
// import Auth from '../authentication/Auth';
// import logo from '../../assets/logo.png';
// import './pages-styles/Welcome.css';

// // Functional component representing the Welcome page
// export default function Welcome() {
//     return (
//         <div className="welcome-container">
//             {/* Logo image */}
//             <img src={logo} alt="Logo" />
//             {/* Authentication form */}
//             <Auth />
//         </div>
//     );
// }


import React from 'react';
import Auth from '../authentication/Auth'
import logo from '../../assets/logo.png'
import './pages-styles//Welcome.css'

export default function Welcome() {
 return (
    <div className="welcome-container">
        <img src={logo} />
        <Auth />
    </div>
  )
}