$(document).ready(function() {
    $("#iconomenu").on("click", function(){
        $("#menu").animate({right: '0'}, 100);
        $("#menu").css("box-shadow", "0 0 0 100vmax rgba(0, 0, 0, 0.5)");
        $("#body").css("overflow-y", "hidden");
    });

    $("#iconocerrar").on("click", function(){
        $("#menu").animate({right: '-100%'}, 100);
        $("#menu").css("box-shadow", "none");
        $("#body").css("overflow-y", "scroll");
    })
});
