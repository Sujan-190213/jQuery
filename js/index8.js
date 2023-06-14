$("document").ready(function(){
$(".btn1").click(function(){
alert("Text : "+$("p").text());   
});

$(".btn2").click(function(){
    alert("Text : "+$("p").html());   
    });

    $(".btn3").click(function(){
        alert("Value is : "+$("input").val());   
    }); 
        
        
 $(".btn4").click(function(){
     alert("Link is : "+$("a").attr("href"));   
});       

});