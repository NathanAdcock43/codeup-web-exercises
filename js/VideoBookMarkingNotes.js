"use strict";

$(document).ready(function () {

    $('iframe').load(function(){
        $(this).contents().find("body").on('click', function(event) { alert('test'); });
    });

    const GetYoutubeVideoID = (youtubeURL) => {
        youtubeURL = youtubeURL.replace("?v=","?fakeparam=100&video=");
        let urlParam = new URLSearchParams(youtubeURL);
        let videoID = urlParam.get('video');
        return videoID;
    }

    $("#userURLSubmit").click(function (e) {
        e.preventDefault()
        let searchVid = $('#videoLink').val();
        let youtubeId = GetYoutubeVideoID(searchVid)
        $("#videoWindow").attr("src", `https://www.youtube.com/embed/${youtubeId}`);
    });
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