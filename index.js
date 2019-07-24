const express = require('express');
const connectDbFunction = require('./config/db');

const app = express();

connectDbFunction();

app.use(express.json({extend: false}));

const PORT = 5000;

app.listen(PORT, () => console.log("Started appliaction on port: " + PORT));