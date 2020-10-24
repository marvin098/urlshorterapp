const express = require('express');
const router = express.Router();

const Url = require("../models/Url");


// @route   GET /
// @des     Redirect to orginal URL
router.get('/:shortUrlId', async (req, res) => {
  console.log("Request on 5000 with req {}", req.headers)
  try {
        const url = await Url.findOne({urlCode: req.params.shortUrlId});
        
        if(url){
            return res.redirect(url.urlLong);
        } else {
            return res.status(404).json('No url found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error');
    }
});

module.exports = router;