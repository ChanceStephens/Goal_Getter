import React from 'react';

export default function PaceTrackerInstance({ standup, onDelete, onEdit }) {
    return (
        <li>
            {new Date(standup.date).toLocaleDateString()} - {standup.pointsReported} points
            <button onClick={() => onDelete(standup._id)}>Delete</button>
            {/* Add onEdit function if needed */}
        </li>
    );
}
