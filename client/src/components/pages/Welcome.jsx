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


// import React from 'react';
// import Auth from '../authentication/Auth'
// import logo from '../../assets/logo.png'
// import './pages-styles//Welcome.css'
// import welcomeMusic from '../../assets/astronaut-in-the-ocean-official-music-video.mp3'

// export default function Welcome() {
//  return (
//     <div className="welcome-container">
//         <img src={logo} />
//         <Auth />
//         <div>
//         <audio controls autoPlay>
//           <source src={welcomeMusic} type="audio/mp3" />
//       </audio>
//     </div>
//     </div>
//   )
// }



import React, { useEffect, useRef } from 'react';
import Auth from '../authentication/Auth';
import logo from '../../assets/logo.png';
import './pages-styles/Welcome.css';
import welcomeMusic from '../../assets/astronaut-in-the-ocean-official-music-video.mp3';

export default function Welcome() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Error playing the audio", error);
      });
    }
  }, []);

  return (
    
    <div className="welcome-container">
      <img src={logo} alt="Logo" />
      <Auth />
        {/*<audio ref={audioRef} controls>
          <source src={welcomeMusic} type="audio/mp3" />
        </audio>*/}
      
    </div>
  );
}
