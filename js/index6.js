$("document").ready(function(){
$(".div1").click(function(){
$(".div2").slideDown("slow");
});

$(".stop").click(function(){
    $(".div2").stop();
    });


    $(".start").click(function(){
        $(".div2").slideDown("slow");
        });

});