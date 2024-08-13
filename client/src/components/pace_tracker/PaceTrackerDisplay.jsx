


import React from 'react';
import moment from 'moment';
import './Tracker.css'

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
