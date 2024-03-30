const express = require('express');
const app = express();
const port = 8080;

// Pull files from 'public' directory
app.use(express.static('public'));

// Routes for each page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/2.html');
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/3.html');
});

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/public/4.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/5.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
