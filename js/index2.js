$("document").ready(function(){
$("#show").click(function(){
$("#a").show();
});
$("#hide").click(function(){
    $("#a").hide();
});



$("#Show").click(function(){
    $("#b").show("slow");
    });
    $("#Hide").click(function(){
        $("#b").hide("slow");
    });


$("#toggle").click(function(){
$("#c").toggle(1500);

});

});