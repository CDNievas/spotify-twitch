const express = require("express");
var router = express.Router();

const spotifyClient = require("../SpotifyClient");

router.get('/', (req,res) => {
    var url = spotifyClient.createAuthorizeURL(scopes);
    res.redirect(url);
});

router.get('/logged', async (req,res) => {
    
    const { code } = req.query;

    try {
        
        var data = await spotifyClient.authorizationCodeGrant(code);
        const { access_token, refresh_token } = data.body;
        
        spotifyClient.setAccessToken(access_token);
        spotifyClient.setRefreshToken(refresh_token);
        
        res.send("Loggeado a Spotify");

    } catch(err) {
        res.send("Algo salio mal xd", err);
    }

});
  
module.exports = router;