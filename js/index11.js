$("document").ready(function(){
$(".btn1").click(function(){
 $(".div1").remove();
});

$(".btn2").click(function(){
    $(".div2").empty();

});

$("button").click(function(){
    $("p").remove(".test");
  });

});