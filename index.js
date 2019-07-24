const express = require('express');
const connectDbFunction = require('./config/db');

const PORT = 5000;
const app = express();

connectDbFunction();

app.use(express.json({extend: false}));

app.use('/', require('./routes/index.js'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log("Started appliaction on port: " + PORT));