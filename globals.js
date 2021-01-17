require('dotenv').config();

PORT_WEB = process.env.PORT_WEB;

SPOTIFY_REDIRECT_URL = "http://" + process.env.SPOTIFY_REDIRECT_URL + ":" + PORT_WEB + "/logged";
SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

IP_WS = process.env.IP_WS;
PORT_WS = process.env.PORT_WS;

module.exports = {
    PORT_WEB: PORT_WEB,
    SPOTIFY_REDIRECT_URL: SPOTIFY_REDIRECT_URL,
    SPOTIFY_CLIENT_ID: SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: SPOTIFY_CLIENT_SECRET,
    IP_WS: IP_WS,
    PORT_WS: PORT_WS
}