const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Oh hiiii Mark!</h1>');
});

app.get('/reply', (req, res) => {
    res.send(`<h2>Who's gonna reply to Johnny?</h2>`)
});

app.get('/reply/:person', (req, res) => {
    const {person} = req.params;
    res.send(`<h3>${person.toUpperCase()}: Oh hey Johnny what's up!</h3>`);
});

app.get('/answer', (req, res) => {
    const {person} = req.query;
    if (!person) {
        res.send(`<h3>Oh hi doggy!</h3>`);
    }
    switch (person) {
        case 'lisa':
            res.send(`<h3>Wow, you look so sexy, ${person}!</h3>`);
        case 'mark':
            res.send(`<h3>Hahahaha what a story ${person}!</h3>`);
        case 'denny':
            res.send(`<h3>Oh ${person}, Lisa loves you. as a person. As a human being!</h3>`);
        default:
            res.send(`<h3>CHEEP CHEEP CHEEEEEEEEP!</h3>`);
    }
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});


//! last commit
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to the home page</h1>');
// });

// app.get('/r/:subreddit', (req, res) => {
//     const {subreddit} = req.params;
//     res.send(`<h3>Browsing the ${subreddit} subreddit</h3>`);
// });

// app.get('/r/:subreddit/comments/:postId', (req, res) => {
//     const {subreddit, postId} = req.params;
//     res.send(`<h3>Now viewing Comment id #${postId} in the ${subreddit} subreddit</h3>`);
// });

// app.get('/search', (req, res) => {
//     const {q} = req.query;
//     if (!q) {
//         res.send('<h1>NOTHING FOUND IF NOTHING SEARCHED!</h1>');
//     }
//     res.send(`<h3>Searching for: ${q}</h3>`);
// });

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