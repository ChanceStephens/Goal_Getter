// import React, { useState, useContext } from 'react';
// import moment from 'moment';
// import axios from 'axios';
// import { UserContext } from '../context/UserContext.jsx';

// export default function SetPaceForm({ onPaceSet }) {
//     const { user, token } = useContext(UserContext); // Extract user and token from UserContext
//     const [dates, setDates] = useState({ startDate: '', endDate: '' }); // State to store start and end dates
//     const [totalPointsTarget, setTotalPointsTarget] = useState(0); // State to store total points target
//     const [errMsg, setErrMsg] = useState(''); // State to store error message

//     // Handle change in date input fields
//     function handleChange(event) {
//         const { name, value } = event.target;
//         setDates(prevDates => ({
//             ...prevDates,
//             [name]: value
//         }));
//     }

//     // Handle change in total points input field
//     function handlePointsChange(event) {
//         setTotalPointsTarget(event.target.value);
//     }

//     // Handle form submission
//     function handleSubmit(event) {
//         event.preventDefault();
//         const startDate = moment(dates.startDate).format('YYYY-MM-DD');
//         const endDate = moment(dates.endDate).format('YYYY-MM-DD');
//         const dateDiff = moment(endDate).diff(moment(startDate), 'days');
//         let pointsPerDay = 0;
//         if (dateDiff > 0) {
//             pointsPerDay = parseFloat((totalPointsTarget / dateDiff).toFixed(2));
//         }

//         const paceData = {
//             startDate,
//             finishDate: endDate,
//             totalPointsTarget: parseFloat(totalPointsTarget),
//             pointsPerDay,
//             userId: user._id
//         };

//         // Send data to the backend
//         axios.post('/api/main/pace', paceData, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//             .then(response => {
//                 console.log('Pace data saved:', response.data);
//                 onPaceSet(response.data); // Call the callback to indicate pace has been set
//             })
//             .catch(error => {
//                 setErrMsg(error.response?.data?.errMsg || 'Error saving pace data');
//                 console.error('There was an error saving the pace data:', error);
//             });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="date"
//                     name="startDate"
//                     value={dates.startDate}
//                     onChange={handleChange}
//                     placeholder="Start Date"
//                 />
//                 <input
//                     type="date"
//                     name="endDate"
//                     value={dates.endDate}
//                     onChange={handleChange}
//                     placeholder="End Date"
//                 />
//                 <input
//                     type="number"
//                     value={totalPointsTarget}
//                     onChange={handlePointsChange}
//                     placeholder="Total Points Target"
//                 />
//                 <button type="submit">Set Pace</button>
//             </form>
//             {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
//         </div>
//     );
// }



// import React, { useState } from 'react';
// import moment from 'moment';

// export default function SetPaceForm() {
//     const [dates, setDates] = useState({
//         startDate: '',
//         endDate: ''
//     });
//     const [totalPointsTarget, setTotalPointsTarget] = useState(0);

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setDates(prevDates => ({
//             ...prevDates,
//             [name]: value
//         }));
//     }

//     function handlePointsChange(event) {
//         setTotalPointsTarget(event.target.value);
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         const startDate = moment(dates.startDate).format('YYYY-MM-DD');
//         const endDate = moment(dates.endDate).format('YYYY-MM-DD');
//         const dateDiff = moment(endDate).diff(moment(startDate), 'days');
//         let pointsPerDay = 0;
//         if (dateDiff > 0) {
//             pointsPerDay = parseFloat((totalPointsTarget / dateDiff).toFixed(2));
//         }
//         console.log(Start Date: ${startDate}, End Date: ${endDate}, Date Difference: ${typeof dateDiff}, Points per Day: ${pointsPerDay});
//         // Here you can proceed to save the formatted dates and points per day as needed
//     }
    

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="date"
//                     name="startDate"
//                     value={dates.startDate}
//                     onChange={handleChange}
//                     placeholder="Start Date"
//                 />
//                 <input
//                     type="date"
//                     name="endDate"
//                     value={dates.endDate}
//                     onChange={handleChange}
//                     placeholder="End Date"
//                 />
//                 <input
//                     type="number"
//                     value={totalPointsTarget}
//                     onChange={handlePointsChange}
//                     placeholder="Total Points Target"
//                 />
//                 <button type="submit">Set Pace</button>
//             </form>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import moment from 'moment';

// export default function SetPaceForm() {
//     const [dates, setDates] = useState({
//         startDate: '',
//         endDate: ''
//     });
//     const [totalPointsTarget, setTotalPointsTarget] = useState(0);

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setDates(prevDates => ({
//             ...prevDates,
//             [name]: value
//         }));
//     }

//     function handlePointsChange(event) {
//         setTotalPointsTarget(event.target.value);
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         const startDate = moment(dates.startDate).format('YYYY-MM-DD');
//         const endDate = moment(dates.endDate).format('YYYY-MM-DD');
//         const dateDiff = moment(endDate).diff(moment(startDate), 'days');
//         let pointsPerDay = 0;
//         if (dateDiff > 0) {
//             pointsPerDay = parseFloat((totalPointsTarget / dateDiff).toFixed(2));
//         }
//         console.log(`Start Date: ${startDate}, End Date: ${endDate}, Date Difference: ${dateDiff}, Points per Day: ${pointsPerDay}`);
//         // Here you can proceed to save the formatted dates and points per day as needed
//     }
    

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="date"
//                     name="startDate"
//                     value={dates.startDate}
//                     onChange={handleChange}
//                     placeholder="Start Date"
//                 />
//                 <input
//                     type="date"
//                     name="endDate"
//                     value={dates.endDate}
//                     onChange={handleChange}
//                     placeholder="End Date"
//                 />
//                 <input
//                     type="number"
//                     value={totalPointsTarget}
//                     onChange={handlePointsChange}
//                     placeholder="Total Points Target"
//                 />
//                 <button type="submit">Set Pace</button>
//             </form>
//         </div>
//     );
// }

import React, { useState, useContext } from 'react';
import moment from 'moment';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function SetPaceForm({ onPaceSet }) {
    const { token } = useContext(UserContext);
    const [dates, setDates] = useState({
        startDate: '',
        endDate: ''
    });
    const [totalPointsTarget, setTotalPointsTarget] = useState(0);
    const [errMsg, setErrMsg] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        setDates(prevDates => ({
            ...prevDates,
            [name]: value
        }));
    }

    function handlePointsChange(event) {
        setTotalPointsTarget(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const startDate = moment(dates.startDate).format('YYYY-MM-DD');
        const endDate = moment(dates.endDate).format('YYYY-MM-DD');
        const dateDiff = moment(endDate).diff(moment(startDate), 'days');
        let pointsPerDay = 0;
        if (dateDiff > 0) {
            pointsPerDay = parseFloat((totalPointsTarget / dateDiff).toFixed(2));
        }

        const paceData = {
            startDate,
            finishDate: endDate,
            totalPointsTarget: parseFloat(totalPointsTarget),
            pointsPerDay
        };

        axios.post('/api/main/pace', paceData, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            onPaceSet(response.data); // Pass the data back to the parent component
        })
        .catch(error => {
            setErrMsg(error.response?.data?.errMsg || 'Error saving pace data');
            console.error('There was an error saving the pace data:', error);
        });
    }

    return (
        <div className='welcome-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    name="startDate"
                    value={dates.startDate}
                    onChange={handleChange}
                    placeholder="Start Date"
                />
                <input
                    type="date"
                    name="endDate"
                    value={dates.endDate}
                    onChange={handleChange}
                    placeholder="End Date"
                />
                <input
                    type="number"
                    value={totalPointsTarget}
                    onChange={handlePointsChange}
                    placeholder="Total Points Target"
                />
                <button type="submit">Set Pace</button>
            </form>
            {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
        </div>
    );
}
