"use strict";

$(document).ready(function () {

    const getYoutubeVideoID = (youtubeURL) => {
        youtubeURL = youtubeURL.replace("?v=","?fakeparam=100&video=");
        let urlParam = new URLSearchParams(youtubeURL);
        let videoID = urlParam.get('video');
        return videoID;
    }

    $("#userURLSubmit").click(function (e) {
        e.preventDefault()
        let searchVid = $('#userInputtedUrl').val();
        let youtubeId = getYoutubeVideoID(searchVid)
        $("#player").attr("src", `https://www.youtube.com/embed/${youtubeId}`);
    });


// let youtubeId = getYoutubeVideoID($('#userInputtedUrl').val());

    let videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.addEventListener("playing", pausing_function);
        let timer;
    var pausing_function_1 = function() {
        if (the video player is paused) {
            console.log(videoPlayer.getCurrentTime());


            // remove the event listener after you paused the playback
            yid.removeEventListener("playing", pausing_function);
        }
    };

});

// Use jQuery to find all the embedly iframes on the page.
// $('iframe.embedly-embed').each(function(){
//     // initialize the player.
//     var player = new playerjs.Player(this);
//
//     // Wait for the player to be ready.
//     player.on('ready', function(){
//
//         // Listen to the play event.
//         player.on('play', function(){
//             // Tell Google analytics that a video was played.
//             window.ga('send', 'event', 'Video', 'Play');
//         });
// //
//         //autoplay the video.
//         player.play();
//     });
//     player.getCurrentTime(function(seconds){
//         console.log('Current Time: '+seconds);
//     });
// });
//
//     var iframe = document.querySelector('iframe.embedly-embed');
//
//     var player = new playerjs.Player(iframe);
//