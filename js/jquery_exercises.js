
"use strict";

// $(document).ready(function() {
//     console.log("fully loaded and ready to go!")
//     $('#title1').html("Hello, and welcome to this test site")
//     var contents = $('#title1').html(); alert(contents);
//     $('.list').css('border', 'red');
//     $('.list').css('border', 'solid');
//     $('.ul-items').css({'background-color': 'yellow', 'font-size': '14px'});
//     $('#nav2b').html("this is ")
//     $('.ul').html('this is a list');
//     $('.media-body').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
//         'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
//         'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
//         'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
//         'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
// });

$(document).ready(function() {
    console.log("fully loaded and ready to go!")

    $('h1').click(function (e){
        $('h1').html('This is now clicked')
        $('h1').css({'background-color': 'blue'})

    })

    $('p').dblclick(function (e){
        $('p').html('Stop clicking me')
        $('p').css({'font-weight': '18px'})
        $('p').css({'background-color': 'red'})
    })

    $('li').hover(function (e) {
        $(e.target).css({'background-color': 'red'});
        $(e.target).html('you are hovering');
    }, function (e) {
        $(e.target).css({'background-color': 'tan'});
        $(e.target).html('thank you for the space');
    })


    $('#title1').html("Hello, and welcome to this test site")
    var contents = $('#title1').html(); alert(contents);
    $('.list').css('border', 'solid');
    $('.ul-items').css({'background-color': 'yellow', 'font-size': '14px'});
    $('#nav2b').html("this is ")
    $('.ul').html('this is a list');
    $('.media-body').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
});