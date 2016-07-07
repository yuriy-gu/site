//http://tympanus.net/Tutorials/CreativeCSS3AnimationMenus/index10.html
//http://html5.by/blog/flexbox/

/*"use strict";
$(document).ready(function() {
    // hashchange event
    let currentLocation = void 0,
        url = void 0,
        baseUrl = "index.php",
        headerLinks = $(".header__nav__a");

    window.addEventListener("hashchange", function () {
        changepage();
    });

    // function change page
    let changepage = function changepage() {
        currentLocation = location.hash;
        url = currentLocation.length > 0 ? getHash(currentLocation) + ".php" : false;
        // generate content
        if (url != false) {
            $.get(url, function (d, s) {
                $("#contentTitle").html("<h2>" + JSON.parse(d).title + "</h2>");
                $("#contentText").html("<span>" + JSON.parse(d).content + "</span>");
                document.title = JSON.parse(d).title;
            }).fail(function () {
                    $("#contentTitle").html("<h2>404</h2>");
                    $("#contentText").html("<a href=\"#\">Go to home page</a>");
                });
        } else {
            $.get(baseUrl, function (d, s) {
                $("#contentTitle").html("<h2>" + JSON.parse(d).title + "</h2>");
                $("#contentText").html("<span>" + JSON.parse(d).content + "</span>");
                document.title = JSON.parse(d).title;
            }).fail(function () {
                    $("#contentTitle").html("<h2>404</h2>");
                    $("#contentText").html("<a href=\"#\">Go to home page</a>");
                });
        }
    };

    // extract letters from hash
    let patt = /\w+/i;
    let getHash = function getHash(location) {
        return patt.exec(location)[0];
    };

    changepage();
}*/

$(document).ready(function() {
    
    let $navList = $('#nav_list'),
        $pushMenu = $('#push_menu');
        $main = $('.main');

        $('#nav_list').on('click', function() {
            $pushMenu.css({left: '0'});
            $navList.css({display: 'none'});
            $main.animate ({marginLeft: '300px'}, '500');
        });
        $('#close').on('click', function() {
            $pushMenu.css({left: '-300px'});
            $navList.css({display: 'block'});
            $main.animate ({marginLeft: '0'}, '500');
        });

    // let $sideBar = $('#leftSideMenu'),
    //     $menuList = $('#menuList'),
    //     $aboutMe = $('#aboutMe'),
    //     i = 0;



    //  $('#leftSideMenu').on('click', function(event) {
    //     if (i === 0) {
    //         $menuList.css({
    //             display: 'block'})
    //           // $menuList.animate ({display: 'block'}, 'slow');
    //           i = 1
    //       } else {
    //         $menuList.css({
    //               display: 'none'});
    //         $sideBar.animate({
    //             width: '60px'}, 500);
    //         i = 0;
    //         console.log(false);
    //       }
    //  });
});