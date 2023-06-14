$("document").ready(function(){
$(".btn1").click(function(){
$("p").prepend("<b>Start! </b>");
});

$(".btn2").click(function(){
    $("p").append("<b>End! </b>");
    });



 $(".btn3").click(function(){
        $("img").before("<b>Hi! </b>");
        });
        
$(".btn4").click(function(){
            $("img").after("<b>Bye! </b>");
     });


});