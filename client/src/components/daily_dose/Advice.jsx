import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LifeAdvice() {
    const [advice, setAdvice] = useState(''); // State to store the fetched advice

    useEffect(() => {
        // Fetch advice from the API when the component mounts
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                const slip = res.data.slip;
                setAdvice(slip.advice); // Update the state with the fetched advice
            })
            .catch(err => {
                console.log('Error fetching advice', err); // Log any errors
            });
    }, []); // Empty dependency array to ensure this effect runs only once when the component mounts

    return (
        <div className='advice'>
            <p className="title">Life Advice:</p>
            <p className="text">"{advice}"</p> {/* Render the fetched advice */}
        </div>
    );
}
