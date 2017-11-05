/**
 * Created by jramamoorthy on 05/11/17.
 */

const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send({hi: 'I am right there'});
});

// read dynamic port value from environment variable
const PORT = process.env.port || 5555;

app.listen(5555);
