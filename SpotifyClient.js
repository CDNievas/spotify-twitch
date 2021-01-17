
const SpotifyWebApi = require('spotify-web-api-node');
const GLOBALS = require("./globals");

scopes = ['user-read-recently-played', 'user-top-read', 'user-read-playback-position', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing'];

var spotifyClient = new SpotifyWebApi({
  clientId: GLOBALS.SPOTIFY_CLIENT_ID,
  clientSecret: GLOBALS.SPOTIFY_CLIENT_SECRET,
  redirectUri: GLOBALS.SPOTIFY_REDIRECT_URL,
});

module.exports = spotifyClient;