"use strict";

$(document).ready(function () {

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

