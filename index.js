const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res) => {
//     console.log('new request received');
//     res.send({ name: 'axel', age: 2 })
// });

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the home page</h1>');
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h3>Browsing the ${subreddit} subreddit</h3>`);
});

app.get('/r/:subreddit/comments/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h3>Now viewing Comment id #${postId} in the ${subreddit} subreddit</h3>`);
});

app.get('/search', (req, res) => {
    const {q} = req.query;
    if (!q) {
        res.send('<h1>NOTHING FOUND IF NOTHING SEARCHED!</h1>');
    }
    res.send(`<h3>Searching for: ${q}</h3>`);
});

// app.get('/', (req, res) => {
//     res.send(`What do these animals say?`);
// });

// app.get('/dogs', (req, res) => {
//     res.send('Wan! Wan!');
// });

// app.get('/cats', (req, res) => {
//     res.send('Meooowwww');
// });

// app.get('/pigs', (req, res) => {
//     res.send('oink! oink!');
// });

app.get('*', (req, res) => {
    res.send('Could not find that page.');
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});