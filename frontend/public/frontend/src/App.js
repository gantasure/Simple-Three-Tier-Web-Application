import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message') // Fetch from the backend
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div className="App">
            <h1>Three-Tier Application</h1>
            <p>Message from the backend: {message}</p>
        </div>
    );
}

export default App;
