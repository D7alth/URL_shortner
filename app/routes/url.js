const express = require('express');
const validUrl = require('valid-url');
const shortId = require('short-id');

const router = express.Router();
const Url = require('../api/models/url-schhema-model');
const baseUrl = 'http://localhost:3000/';

router.post('/shoten', async (req, res) => {
    const {
        longUrl
    } = req.body 
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base URL');
    }
    const urlCode = shortId.generate()
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({
                longUrl
            })
            if(url){
                res.json(url)
            }else{
                const shortUrl = baseUrl + '/' + urlCode
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }
        catch(e){
            console.log(e);
            res.status(500).json('Server Error');
        }
    }else {
        res.status(401).json('Invalid LongUrl');
    }
})

module.exports = router;