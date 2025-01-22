const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data'); // Import the data

app.get('/api/message', (req, res) => {
    res.json({ message: data.message });
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});
