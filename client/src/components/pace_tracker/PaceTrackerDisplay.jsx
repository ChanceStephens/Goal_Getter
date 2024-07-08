// import React from 'react';
// import moment from 'moment';

// export default function PaceTrackerDisplay({ paceData }) {
//     // Destructure the paceData object to extract relevant fields
//     const { startDate, finishDate, totalPointsTarget } = paceData;

//     // Format the start and finish dates to MM-DD-YYYY
//     const formattedStartDate = moment(startDate).format('MM-DD-YYYY');
//     const formattedFinishDate = moment(finishDate).format('MM-DD-YYYY');

//     // Calculate the difference in days between the start and finish dates
//     const dateDiff = moment(finishDate).diff(moment(startDate), 'days');
    
//     // Calculate the points needed per day
//     const pointsPerDay = dateDiff > 0 ? (totalPointsTarget / dateDiff).toFixed(2) : 0;

//     return (
//         <div>
//             <h2>Pace Tracker Summary</h2>
//             <p><strong>Start Date:</strong> {formattedStartDate}</p> {/* Render the formatted start date */}
//             <p><strong>Finish Date:</strong> {formattedFinishDate}</p> {/* Render the formatted finish date */}
//             <p><strong>Total Points to Complete:</strong> {totalPointsTarget}</p> {/* Render the total points target */}
//             <p><strong>Daily Points Needed:</strong> {pointsPerDay}</p> {/* Render the calculated points per day */}
//         </div>
//     );
// }


// import React from 'react';

// export default function PaceTrackerDisplay() {
//     return (
//         <div>

//         </div>
//     )
// }

// import React from 'react';
// import moment from 'moment';

// export default function PaceTrackerDisplay({ paceData }) {
//     const { startDate, finishDate, totalPointsTarget, pointsPerDay } = paceData;

//     const formattedStartDate = moment(startDate).format('MM-DD-YYYY');
//     const formattedFinishDate = moment(finishDate).format('MM-DD-YYYY');

//     return (
//         <div>
//             <h2>Pace Tracker Summary</h2>
//             <p><strong>Start Date:</strong> {formattedStartDate}</p>
//             <p><strong>Finish Date:</strong> {formattedFinishDate}</p>
//             <p><strong>Total Points to Complete:</strong> {totalPointsTarget}</p>
//             <p><strong>Daily Points Needed:</strong> {pointsPerDay}</p>
//         </div>
//     );
// }


// import React from 'react';
// import moment from 'moment';

// export default function PaceTrackerDisplay({ paceData }) {
//     const { startDate, finishDate, totalPointsTarget } = paceData;

//     const formattedStartDate = moment(startDate).format('MM-DD-YYYY');
//     const formattedFinishDate = moment(finishDate).format('MM-DD-YYYY');

//     const dateDiff = moment(finishDate).diff(moment(startDate), 'days');
//     const pointsPerDay = dateDiff > 0 ? (totalPointsTarget / dateDiff).toFixed(2) : 0;

//     return (
//         <div>
//             <h2>Pace Tracker Summary</h2>
//             <p><strong>Start Date:</strong> {formattedStartDate}</p>
//             <p><strong>Finish Date:</strong> {formattedFinishDate}</p>
//             <p><strong>Total Points to Complete:</strong> {totalPointsTarget}</p>
//             <p><strong>Daily Points Needed:</strong> {pointsPerDay}</p>
//         </div>
//     );
// }



import React from 'react';
import moment from 'moment';

export default function PaceTrackerDisplay({ paceData }) {
    if (!paceData) {
        return <div>Loading...</div>;
    }

    const { startDate, finishDate, totalPointsTarget } = paceData;

    const formattedStartDate = moment(startDate).format('MM-DD-YYYY');
    const formattedFinishDate = moment(finishDate).format('MM-DD-YYYY');

    const dateDiff = moment(finishDate).diff(moment(startDate), 'days');
    const pointsPerDay = dateDiff > 0 ? (totalPointsTarget / dateDiff).toFixed(2) : 0;

    return (
        <div className="pace-tracker-summary">
            <h2>Pace Tracker Summary</h2>
            <p><strong>Start Date:</strong> {formattedStartDate}</p>
            <p><strong>Finish Date:</strong> {formattedFinishDate}</p>
            <p><strong>Total Points to Complete:</strong> {totalPointsTarget}</p>
            <p><strong>Daily Points Needed:</strong> {pointsPerDay}</p>
        </div>
    );
}
