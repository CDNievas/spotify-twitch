const GLOBALS = require("./globals")

const express = require('express')
const router = require("./routers/spotify");
const bodyParser = require("body-parser");

// Socket IO Client
const io = require("./io");

// Socket IO Server
const spotifyScene = require("./SpotifyScene");

// WebServer
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/', router);

app.listen(GLOBALS.PORT_WEB, () => {
  console.log(`Web corriendo en http://localhost:${GLOBALS.PORT_WEB}`)
});