$(".radio").hover(
    function(){
        // Hover
        var elmt = $(this).children(".description");
        elmt.fadeIn();
        elmt.show();
    },
    function(){
        // Out
        var elmt = $(this).children(".description");
        elmt.fadeOut();
        elmt.hide();
    }
);

$(".type.nb-parts").children("input").keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        var elmt = $(this).parent().children(".pizza-pict");
        alert();
        return false;
    }
});
