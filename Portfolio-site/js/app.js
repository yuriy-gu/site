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
    
    let $sideBar = $('#leftSideMenu'),
        $menuList = $('#menuList'),
        $content = $('#content');



     //$('#leftSideMenu').on('click', function(event) {
        //if (this === event.currentTarget)
    //          $sideBar.animate({
    //              width: '220'}, 1000);
    //          $menuList.css({
    //              display: 'block'});
    // });
    $("#leftSideMenu").click(function(){
    $("#menuList").toggleClass("show hide");
    });
});