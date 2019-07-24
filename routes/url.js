const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortId = require("shortid");
const config = require("config");

const Url = require("../models/Url");

// @route   POST /api/url/shorten
// @des     Creating short URL
router.post('/shorten', async (req, res) => {
    const { urlLong } = req.body;
    const baseUrl = config.get('baseUrl');

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    if (validUrl.isUri(urlLong)) {
        try {
            let url = await Url.findOne({ urlLong })

            if (url) {
                url.urlShort = baseUrl + url.urlCode;
                return res.json(url);
            } else {
                const urlCode = shortId.generate();
                const urlShort = baseUrl + urlCode;

                url = new Url({
                    urlCode,
                    urlLong,
                    urlShort,
                    date: new Date()
                });

                await url.save();
                return res.json(url);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json('Server error');
        }
    } else {
        return res.status(401).json('Invalid url');
    }

})

module.exports = router;
