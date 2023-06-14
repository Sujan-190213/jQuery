$("document").ready(function(){
$(".btn1").click(function(){
$("p").addClass("class1");
});


$(".btn2").click(function(){
$("p").addClass("class2");
});
    

$(".btn3").click(function(){
$("p").addClass("class1 class2");
 });

 $(".btn4").click(function(){
    $("div").addClass("class3");
     });

$(".btn5").click(function(){
        $("div").removeClass("class3");
         }); 
  
        
});