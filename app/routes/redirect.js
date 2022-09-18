const express = require('express');
const router = express.Router();
const Url = require('../api/models/url-schhema-model');

router.get('/:code', async(req, res)=>{
    try{
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if(url){
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No URL Found')
        }
    }
    catch(e){
        console.log(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router 