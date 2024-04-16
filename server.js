const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));
const filePath = path.join(__dirname, 'albums.json');

app.get('/', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading albums.json:', err);
            return res.status(500).json({ error: 'Internal server error occurred.' });
        }
        try {
            const albums = JSON.parse(data);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Error parsing JSON data.');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
