const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Route to serve form.html
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/form.html'));
}); 

// Route to serve ekthesis.json
app.get('/ekthesis', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/ekthesis.json'));
});

// Route to serve links.json
app.get('/links', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/links.json'));
});

module.exports = app;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});