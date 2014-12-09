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
var prix=0;
var tmp = 0;
var tmp2 = 0;
var tmp3 = 0;
var tmp4 = 0;

$(".type.nb-parts").children("input").keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        var input_value = $(this).val();
        var val_part = tmp;
        var elmt = $(this).parent().children(".pizza-pict");

        switch (input_value){
          case "1" :
            elmt.replaceWith('<span class="pizza-1 pizza-pict"></span>');
            tmp4 = val_part * input_value;
            break;
          case "2" :
            elmt.replaceWith('<span class="pizza-2 pizza-pict"></span>');
            tmp4 = val_part * input_value;
            break;
          case "3" :
            elmt.replaceWith('<span class="pizza-3 pizza-pict"></span>');
            tmp4 = val_part * input_value;
            break;
          case "4" :
            elmt.replaceWith('<span class="pizza-4 pizza-pict"></span>');
            tmp4 = val_part * input_value;
            break;
          case "5" :
            elmt.replaceWith('<span class="pizza-5 pizza-pict"></span>');
            tmp4 = val_part * input_value;
            break;
          case "6" :
            elmt.replaceWith('<span class="pizza-6 pizza-pict"></span>');
            tmp4 = val_part * input_value;
            break;
          default :
            alert('Le nombre de parts maximum est 6');
            break;
          }

          $("p").text(tmp2+tmp3+tmp4+"$");
    }
});

$( ".next-step" ).click(function() {
  $(this).hide();
  var elmt = $(".infos-client");
  elmt.show();
});

$( ".add" ).click(function() {
  var elmt = $(this).parent().children("input");
  elmt.clone().insertBefore($(".add"));
});

$( ".done" ).click(function() {
  $(".container").hide();
  $(".stick-right").hide();
  var $div = $('<div />').appendTo('body');
  $div.attr('class', 'congrats');
  $( "<p>Merci d'avoir choisi notre site pour commander votre pizza.</p>" ).appendTo( ".congrats" );
});

$(".radio").click(
  function(){
    var price_pizza = $(this).children("input[name='type']");
    var price_pate = $(this).children("input[name='pate']");
    var val_pizza = parseInt(price_pizza.data('price'))/6;
    var val_pate = parseInt(price_pate.data('price'));


    if(isNaN(val_pizza)) {
      var val_pizza = 0;
    }
    else {
      tmp = val_pizza;
    }

    if(isNaN(val_pate)) {
      var val_pate = 0;
    }
    else tmp2 = val_pate;
    $("p").text(tmp2+tmp3+tmp4+"$");
  }
);

$(".type").children(".checkbox").click(
  function(){
  var price_extra = ($(this).children("input"));
  var val_extra = parseInt(price_extra.data('price'));
  if (price_extra.is(':checked')){
    tmp3 -= val_extra;
  }
  else tmp3 += val_extra;
  $("p").text(tmp2+tmp3+tmp4+"$");
  }
);
