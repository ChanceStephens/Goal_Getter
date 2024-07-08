import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Quotes() {
    const [randomQuote, setRandomQuote] = useState(''); // State to store the fetched random quote
    const [author, setAuthor] = useState(''); // State to store the author of the quote

    useEffect(() => {
        getRandomQuote(); // Fetch a random quote when the component mounts
    }, []);

    // Function to fetch a random quote from the server
    function getRandomQuote() {
        axios.get('/api/quotes')
            .then(res => {
                const quotes = res.data;
                const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
                const randomQuote = quotes[randomIndex];
                setRandomQuote(randomQuote.q); // Update the state with the random quote text
                setAuthor(randomQuote.a); // Update the state with the author of the quote
            })
            .catch(err => {
                console.log('Error Fetching Random Quote', err); // Log any errors
            });
    }

    return (
        <div className="quote">
            <p className="title">Inspiration:</p>
            <p className="text">"{randomQuote}"</p> {/* Render the fetched random quote */}
            <p className="text">~ {author}</p> {/* Render the author of the quote */}
        </div>
    );
}
