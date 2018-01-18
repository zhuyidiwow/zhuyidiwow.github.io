$(document).ready(function(){
    
    
    select($("#featured"));
    $(".featured").fadeIn();

    $("#current").click(function() {
        select($("#current"));
        $(".current").fadeIn();
    });

    $("#featured").click(function() {
        select($("#featured"));
        $(".featured").fadeIn();
    });

    $("#all").click(function() {
        select($("#all"));
        $(".item-wrapper").fadeIn();
    });

    $("#vr").click(function() {
        select($("#vr"));
        $(".vr").fadeIn();
    });

    $("#pc").click(function() {
        select($("#pc"));
        $(".pc").fadeIn();
    });

    $("#mobile").click(function() {
        select($("#mobile"));
        $(".mobile").fadeIn();
    });
});


var select = function(e) {
    resetAll();
    
    $(e).css("background", "#3dbee2");
    $(e).css("border", "1px solid #3dbee2");
    $(e).css("color", "snow");

    $(".item-wrapper").hide();
}

var reset = function(e) {
    
    $(e).css("background", "white");
    $(e).css("border", "1px solid #9a9a9a");
    $(e).css("color", "#7a7a7a");
}

var resetAll = function() {
    reset($("#all"));
    reset($("#current"));
    reset($("#featured"));
    reset($("#vr"));
    reset($("#pc"));
    reset($("#mobile"));
}