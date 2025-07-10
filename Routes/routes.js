import express from 'express';
import Url from '../Models/urlschema.js';
import { nanoid } from 'nanoid';
import validUrl from 'valid-url';
const router = express.Router();
const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';


const checkValid = (url) => validUrl.isUri(url);


router.post('/shorten', async (req, res) => {
  const { url } = req.body;


  if (!checkValid(url)) 
{
    return res.status(400).json({ error: 'Invalid URL' });
}

  try {
    const existURL = await Url.findOne(
        { 
            longUrl: url 
        });

    if (existURL) 
    {
      return res.json(
        { 
            shorten_Url: `${BASE_URL}/${existURL.short_code}`,

            //Bonus: Analytics: Track number of clicks
            clicks: existURL.clickCount 
        });
    }

    const short_code = nanoid(6);

    const newUrl = new Url(
    {
      longUrl: url,
      short_code,
      //Bonus: Expiration logic
      expired: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
    });

    console.log(' New URL object:', newUrl);

    await newUrl.save();

    res.status(201).json(
    {
        shortUrl: `${BASE_URL}/${short_code}`,
        clicks: newUrl.clickCount,
        createdAt: Date.now()
    });

  } catch (err) {
  res.status(500).json({ error: 'Server error' });
}

});


router.get('/:code', async (req, res) => {
  const { code } = req.params;

  try {
    const url = await Url.findOne({ short_code: code });

    if (!url) return res.status(404).json({ error: 'Short URL not found' });

    //Bonus: Expiration logic
    if (url.expired && url.expired < Date.now()) 
    {
      return res.status(410).json({ error: 'URL has expired' });
    }

    url.clickCount++;
    console.log("Redirecting to:", url.longUrl, "| Clicks:", url.clickCount);
    res.redirect(302, url.longUrl);

  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
