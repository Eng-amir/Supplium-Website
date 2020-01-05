
$(document).ready(function () {
  $("#faq-btn").click(function(){
    var form=$("#faq-form");
    $.ajax({type:'POST',data: $("#faq-form input").serialize(),url: "https://hooks.zapier.com/hooks/catch/4095092/po5bri/", success: function(result){
      console.log(result);
    }});
  })
  $("#blog-btn").click(function(){
    var form=$("#blog-form");
    $.ajax({type:'POST',data: $("#blog-form input").serialize(),url: "https://hooks.zapier.com/hooks/catch/4095092/pos0cs/", success: function(result){
      console.log(result);
    }});
  })
  $("#contact-btn").click(function(){
    var form=$("#contact-form");
    $.ajax({type:'POST',data: $("#contact-form input").serialize(),url: "https://hooks.zapier.com/hooks/catch/4095092/po86vg/", success: function(result){
      console.log(result);
    }});
  })
  $(".footer form button").click(function(){
    var form=$("#footer form");
    $.ajax({type:'POST',data: $("#footer form input").serialize(),url: "https://hooks.zapier.com/hooks/catch/4095092/poszjh/", success: function(result){
      console.log(result);
    }});
  })

});


//Scroll top top
var $scroll_obj = $('#btn-scrollup');
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $scroll_obj.fadeIn();
    } else {
        $scroll_obj.fadeOut();
    }
});

$scroll_obj.on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});
