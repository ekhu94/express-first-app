const express = require('express');
const app = express();
const port = 3000;

app.use((req, res) => {
    console.log('new request received');
    res.send({ name: 'axel', age: 2 })
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});