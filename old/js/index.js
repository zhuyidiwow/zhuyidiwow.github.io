$(document).ready(function () {
    $(".square").hover(
        function() {
            var bwPic = $(this).children().eq(1);
            var colorPic = $(this).children().eq(2);
            bwPic.fadeOut({ duration: 500, queue: false });
            colorPic.fadeIn({ duration: 500, queue: false });
        }, function () {
            var bwPic = $(this).children().eq(1);
            var colorPic = $(this).children().eq(2);
            bwPic.fadeIn({ duration: 500, queue: false });
            colorPic.fadeOut({ duration: 500, queue: false });
        });
    $(".square").click(function () {
        var loc = $(this).attr("id") + "/" + $(this).attr("id") + ".html";
        alert(loc);
        window.location = loc;
    });
});