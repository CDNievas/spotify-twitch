const spotifyClient = require("./SpotifyClient");
const io = require('socket.io')();

io.listen(3000);

socketSpotifyScene = null;

io.on('connection', (socket) => {
    
    socket.emit("handshake","");

    socket.on('handshake', function (message) {

        if(message == "spotifyScene"){
            socketSpotifyScene = socket;
            sendSongBucle();
        }

    });  

});

function sendSong(){

    spotifyClient.getMyCurrentPlayingTrack()
        .then((songData) => {
            
            if(songData.statusCode  == 204 || songData.statusCode == 429){
                socketSpotifyScene.emit("song","");
                return;
            }

            songData = songData.body.item;
            socketSpotifyScene.emit("song",songData);

        })
        .catch((err) => {

            console.log(err);
            socketSpotifyScene.emit("song","");

        });
}

function sendSongBucle(){

    sendSong();
    setTimeout(sendSongBucle, 10000);

}

module.exports = io;