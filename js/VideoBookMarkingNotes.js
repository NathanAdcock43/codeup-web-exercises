"use strict";



$("#userURLSubmit").click(function() {
    // var videoId = #userURL;
    let searchVid = $('#videoLink').val().toString();
    $("#videoWindow").setAttribute("src", "https://www.youtube.com/embed/" + searchVid);
})();



// function preg_match (regex, str) {
//     if (new RegExp(regex).test(str)){
//         return regex.exec(str);
//     }
//     return false;
// }
//
// function parseYouTubeTokenByUri(string $url): ?string
//     {
//         if (strncmp($url, 'user/', 5) === 0) { // 1.
//     return null;
// }
//
// if (preg_match('/^[a-zA-Z0-9\-\_]{11}$/', $url)) { // 2.
//     return $url;
// }
//
// if (preg_match('/(?:watch\?v=|v\/|embed\/|ytscreeningroom\?v=|\?v=|\?vi=|e\/|watch\?.*vi?=|\?feature=[a-z_]*&v=|vi\/)([a-zA-Z0-9\-\_]{11})/', $url, $regularMatch)) { // 3.
//     return $regularMatch[1];
// }
//
// if (preg_match('/([a-zA-Z0-9\-\_]{11})(?:\?[a-z]|\&[a-z])/', $url, $organicParametersMatch)) { // 4.
//     return $organicParametersMatch[1];
// }
//
// if (preg_match('/u\/1\/([a-zA-Z0-9\-\_]{11})(?:\?rel=0)?$/', $url)) { // 5.
//     return null; // 5. User channel without token.
// }
//
// if (preg_match('/(?:watch%3Fv%3D|watch\?v%3D)([a-zA-Z0-9\-\_]{11})[%&]/', $url, $urlEncoded)) { // 6.
//     return $urlEncoded[1];
// }
//
// // 7. Rules for special cases
// if (preg_match('/watchv=([a-zA-Z0-9\-\_]{11})&list=/', $url, $special1)) {
//     return $special1[1];
// }
//
// return null;
// }
//
