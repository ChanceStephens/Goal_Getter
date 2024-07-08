import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Jokes() {
    const [randomJoke, setRandomJoke] = useState(''); // State to store the fetched random joke

    useEffect(() => {
        getRandomJoke(); // Fetch a random joke when the component mounts
    }, []);

    // Function to fetch a random joke from the server
    function getRandomJoke() {
        axios.get('/api/jokes')
            .then(res => {
                const jokes = res.data;
                const randomIndex = Math.floor(Math.random() * jokes.length); // Generate a random index
                const randomJoke = jokes[randomIndex].joke; // Get the joke at the random index
                setRandomJoke(randomJoke); // Update the state with the random joke
            })
            .catch(err => {
                console.log('Error Fetching Random Joke', err); // Log any errors
            });
    }

    return (
        <div className="joke">
            <p className='title'>Funnies:</p>
            <p className='text'>"{randomJoke}"</p> {/* Render the fetched random joke */}
        </div>
    );
}
