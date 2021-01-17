const io = require("socket.io-client");
const spotifyClient = require("./SpotifyClient");

const socket = io("http://localhost:5000");

socket.on('connect', (data) => {
    console.log('Conectado a TwitchChat');
});


socket.on("handshake", () =>{
    socket.emit("handshake","spotify");
});

socket.on("playlist", (data) =>{

    var user = data.user; 

    spotifyClient.getMyCurrentPlayingTrack()
        .then((songData) => {
            
            songData = songData.body.context;
            var url = "SpotifyBot - @" + user + " " + songData.external_urls.spotify;
            socket.emit("response",url);

        })
        .catch((err) => {

            console.log(err);
            let msg = "SpotifyBot - Hubo un error al conectarse con Spotify";
            socket.emit("response",msg);

        });

});

socket.on("actualSong", (data) => {

    var user = data.user;

    spotifyClient.getMyCurrentPlayingTrack()
        .then((data) => {

            if(data.statusCode == 204){
                socket.emit("response","SpotifyBot - @" + user + " no estoy escuchando ninguna canción");
            } 

            //var progress = data.body.progress_ms;
            var song = data.body.item;

            var artistas = song.artists;
            var nombre = song.name;

            let msg = "SpotifyBot - @" + user + ", la canción que esta sonando es: " + nombre + " de "

            artistas.forEach((x) => {
                msg = msg + x.name + ",";
            });
            msg = msg.slice(0, -1);            

            socket.emit("response",msg);

        }).catch((err) => {

            console.log(err);
            let msg = "SpotifyBot - Hubo un error al conectarse con Spotify";
            socket.emit("response",msg);

        });

});

module.exports = io;

