import React from 'react';
import PaceTrackerInstance from './PaceTrackerInstance';
import './PaceTrackerList.css'

export default function PaceTrackerList({ paceData, standups, onDelete, onEdit }) {
    const totalPointsSubmitted = standups.reduce((total, standup) => total + standup.pointsReported, 0);
    const remainingPoints = paceData.totalPointsTarget - totalPointsSubmitted;
    const daysRemaining = (new Date(paceData.finishDate) - new Date()) / (1000 * 60 * 60 * 24);
    const status = daysRemaining > 0 ? remainingPoints / daysRemaining : remainingPoints;
    const roundedStatus = Math.abs(status.toFixed(2));
    const statusText = status < paceData.dailyPointsTarget ? 'Ahead of Schedule' : 'Behind Schedule';

    return (
        <div className='tracker-list'>
            <div className='pace-status'>
            <h2>Standup Submissions</h2>
                <p><strong>Total Points Target:</strong> {paceData.totalPointsTarget}</p>
                <p><strong>Total Points Submitted:</strong> {totalPointsSubmitted}</p>
                <p><strong>Remaining Points:</strong> {remainingPoints}</p>
                <p><strong>Status:</strong> {statusText} ({roundedStatus} points)</p>
            </div>
            <div className='pace-submission'>
                <ul>
                    {standups.map(standup => (
                        <PaceTrackerInstance 
                            key={standup._id} 
                            standup={standup} 
                            onDelete={onDelete} 
                            onEdit={onEdit} 
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
