const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: String,
    urlLong: String,
    urlShort: String,
    date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url', urlSchema);