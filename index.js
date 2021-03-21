const express = require('express');
const app = express();
const port = 3000;

app.use(() => {
    console.log("new request received");
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});