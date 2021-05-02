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


let youtubeId = getYoutubeVideoID($('#userInputtedUrl').val());
let time_total;
let timeout_setter;
let player;
// var tag = document.createElement("script");//This code loads the IFrame Player API code asynchronously
//
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// //This function creates an <iframe> (and YouTube player) OR uses the iframe if it exists at the "player" element after the API code downloads
function onYouTubeIframeAPIReady()
{
    player = new playerjs.Player("videoPlayer",
        {
            width: "900px",
            height: "500px",
            videoId: youtubeId,
            events:
                {
                    "onReady": onPlayerReady,
                    "onStateChange": onPlayerStateChange
                }
        });
}

//
// //new code to help load the player
//The API will call this function when the video player is ready
function onPlayerReady(event)
{
    event.target.playVideo();
    time_total  = convert_to_mins_and_secs(player.getDuration(), 1);
    loopy();
}
//
function loopy()
{
    var current_time = convert_to_mins_and_secs(player.getCurrentTime(), 0);
    document.getElementById("progress-bar").style.width = (player.getCurrentTime()/player.getDuration())*100+"%";
    console.log( current_time + " / " + time_total);
    timeout_setter = setTimeout(loopy, 1000);
}
//
function convert_to_mins_and_secs(seconds, minus1)
{
    var mins    = (seconds>=60) ?Math.round(seconds/60):0;
    var secs    = (seconds%60!=0) ?Math.round(seconds%60):0;
    var secs    = (minus1==true) ?(secs-1):secs; //Youtube always displays 1 sec less than its duration time!!! Then we have to set minus1 flag to true for converting player.getDuration()
    var time    = mins + ":" + ((secs<10)?"0"+secs:secs);
    return time;
}
//
// 5. The API calls this function when the player's state changes
function onPlayerStateChange(event)
{
    if (event.data == playerjs.PlayerState.ENDED)
    {
        console.log("END!");
        clearTimeout(timeout_setter);
    }
    else
    {
        console.log(event.data);
    }
}

});

//// 5. TODO: The API calls this function when the player's state changes.

//       //    The function indicates that when playing a video (state=1),
//       //    the player should play for six seconds and then stop.
//       var done = false;
//       function onPlayerStateChange(event) {
//         if (event.data == YT.PlayerState.PLAYING && !done) {
//           setTimeout(stopVideo, 6000);
//           done = true;
//         }
//       }
//       function stopVideo() {
//         player.stopVideo();
//       }

