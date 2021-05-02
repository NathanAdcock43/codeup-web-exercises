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

    function updateTimerDisplay(){
        $('#current-time').text(formatTime( videoPlayer.getCurrentTime() ));
        // $('#duration').text(formatTime( videoPlayer.getDuration() ));
    }

    function formatTime(time){
        time = Math.round(time);

        let minutes = Math.floor(time / 60),
            seconds = time - minutes * 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        return minutes + ":" + seconds;
    }
    updateTimerDisplay()
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