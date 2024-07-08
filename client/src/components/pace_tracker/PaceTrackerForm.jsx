import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext.jsx';
import './PaceTrackerForm.css';

export default function PaceTrackerForm({ paceData, onNewStandup }) {
    const { user, token } = useContext(UserContext);
    const [pointsReported, setPointsReported] = useState(0);
    const [errMsg, setErrMsg] = useState('');

    function handlePointsChange(event) {
        setPointsReported(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const standupData = {
            date: new Date(),
            pointsReported: parseFloat(pointsReported),
            userId: user._id,
        };

        console.log('Submitting standupData:', standupData);

        axios.put(`/api/main/pace/standup`, standupData, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log('Standup data saved:', response.data);
                onNewStandup(response.data.newStandup); // Call the callback with the new standup data
                setPointsReported(0); // Reset points input after successful submission
            })
            .catch(error => {
                setErrMsg(error.response?.data?.errMsg || 'Error saving standup data');
                console.error('There was an error saving the standup data:', error);
            });
    }

    return (
        <div className='pace-tracker-form'>
            <form onSubmit={handleSubmit}>
                <label>Story Points Completed:</label>
                <input
                    type="number"
                    value={pointsReported}
                    onChange={handlePointsChange}
                    placeholder="Story Points"
                />
                <button type="submit">Submit Points</button>
            </form>
            {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
        </div>
    );
}
