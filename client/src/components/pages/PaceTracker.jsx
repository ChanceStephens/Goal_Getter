import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext.jsx';
import SetPaceForm from '../pace_tracker/SetPaceForm';
import PaceTrackerForm from '../pace_tracker/PaceTrackerForm';
import PaceTrackerList from '../pace_tracker/PaceTrackerList';
import PaceTrackerDisplay from '../pace_tracker/PaceTrackerDisplay';
import './pages-styles/PaceTracker.css';

export default function PaceTrackerPage() {
    const { token } = useContext(UserContext);
    const [isPaceSet, setIsPaceSet] = useState(false);
    const [paceData, setPaceData] = useState(null);
    const [standups, setStandups] = useState([]);

    const handlePaceSet = (data) => {
        setIsPaceSet(true);
        setPaceData(data);
    };

    useEffect(() => {
        if (token) {
            axios.get('/api/main/pace', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    if (response.data.length > 0) {
                        setPaceData(response.data[0]);
                        setIsPaceSet(true);
                    }
                })
                .catch(error => {
                    console.error('Error fetching pace data:', error);
                });
        }
    }, [token]);

    useEffect(() => {
        if (paceData) {
            axios.get('/api/main/pace/standup', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    setStandups(response.data);
                })
                .catch(error => {
                    console.error('Error fetching standup data:', error);
                });
        }
    }, [paceData, token]);

    const handleDeleteStandup = (id) => {
        axios.delete(`/api/main/pace/standup/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(() => {
                setStandups(prevStandups => prevStandups.filter(standup => standup._id !== id));
            })
            .catch(error => {
                console.error('Error deleting standup:', error);
            });
    };

    const handleNewStandup = (newStandup) => {
        setStandups(prevStandups => [...prevStandups, newStandup]);
    };

    return (
        <div className='tracker-container'>
            <div className='pace-tracker'>
                {!isPaceSet ? (
                    <SetPaceForm onPaceSet={handlePaceSet} />
                ) : (
                    <>
                        <PaceTrackerDisplay paceData={paceData} />
                        <PaceTrackerForm paceData={paceData} onNewStandup={handleNewStandup} />
                        <PaceTrackerList 
                            paceData={paceData} 
                            standups={standups} 
                            onDelete={handleDeleteStandup} 
                        />
                    </>
                )}
            </div>
        </div>
    );
}
