const GLOBALS = require("./globals")

const startWS = require("./ws");

const express = require('express')
const router = require("./routers/spotify");
const bodyParser = require("body-parser");

const io = require("./ws");

// WebServer
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/', router);

app.listen(GLOBALS.PORT_WEB, () => {
  console.log(`Web corriendo en http://localhost:${GLOBALS.PORT_WEB}`)
});