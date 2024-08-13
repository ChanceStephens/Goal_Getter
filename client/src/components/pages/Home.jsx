// import React from 'react';
// import DailyDose from '../daily_dose/DailyDose';

// // Functional component representing the HomePage
// export default function HomePage() {
//     return (
//         <div>
//             <DailyDose />
//         </div>
//     );
// }


// import React from 'react';
// import DailyDose from '../daily_dose/DailyDose'
// import PaceTrackerDisplay from '../pace_tracker/PaceTrackerDisplay'

// export default function HomePage() {
//     return (
//         <div>
//         <DailyDose />
//         </div>
//     )
// }

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import PaceTrackerDisplay from '../pace_tracker/PaceTrackerDisplay';
import { UserContext } from '../context/UserContext';
import DailyDose from '../daily_dose/DailyDose';
import './pages-styles/Home.css'

export default function HomePage() {
    const [paceData, setPaceData] = useState(null);
    const { token } = useContext(UserContext);

    useEffect(() => {
        axios.get('/api/main/pace', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            if (response.data.length > 0) {
                setPaceData(response.data[0]);
            }
        })
        .catch(error => {
            console.error('Error fetching pace data:', error);
        });
    }, [token]);

    return (
        <div className="homepage">
                <div className='resources'>
                    <a href="https://app.slack.com/client/T0E1PQ12P">VSchool Slack</a>
                    <a href="https://github.com/">GitHub</a>
                    <a href="https://www.w3schools.com/">W3 Schools</a>
                    <a href="https://codesandbox.io/">Code Sandbox</a>
                    <a href="https://www.codewars.com/">Code Wars</a>
                    <a href="https://flexboxfroggy.com/">Flexbox Froggy</a>
                    <a href="https://jsonlint.com/">JSONLint Editor</a>
                    <a href="https://http.cat/">HTTP Cats</a>
                </div>
            <div className='summary'>
                {paceData && <PaceTrackerDisplay paceData={paceData} />}
            </div>
            <div className='daily-dose'>
                <DailyDose />
            </div>
        </div>
    );
}
