const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res) => {
//     console.log('new request received');
//     res.send({ name: 'axel', age: 2 })
// });

app.get('/', (req, res) => {
    res.send(`What do these animals say?`);
});

app.get('/dogs', (req, res) => {
    res.send('Wan! Wan!');
});

app.get('/cats', (req, res) => {
    res.send('Meooowwww');
});

app.get('/pigs', (req, res) => {
    res.send('oink! oink!');
});

app.get('*', (req, res) => {
    res.send('Could not find that page.');
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});