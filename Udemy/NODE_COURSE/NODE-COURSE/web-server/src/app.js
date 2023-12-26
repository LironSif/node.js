import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectoryPath = path.join(__dirname, '../public');

console.log(publicDirectoryPath);

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(publicDirectoryPath));

app.get('/about', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'about.html'));
});

app.get('/help', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'help.html'));
});


app.get('', (req, res) => {
    res.send('hello express!');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
