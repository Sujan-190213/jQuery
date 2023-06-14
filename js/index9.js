$("document").ready(function(){
$(".btn1").click(function(){
$(".lorem1").text("New text");

});

$(".btn2").click(function(){
 $(".lorem2").html("<h1>Hello</h1>")
   
    });
 
$(".btn2").click(function(){
   $(".lorem2").html("<h1>Hello</h1>")
          
});   


 $(".btn3").click(function(){
 $("input").val("Sujan Dhali")
              
});

$(".btn4").click(function(){
    $(".btn4").text("Instagram!");
    $("a").text("Instagram!").attr("href","https://www.instagram.com");
                 
}); 


});