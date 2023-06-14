$(document).ready(function(){
    $(".btn1").click(function(){
      $(".div1").animate({
          left: '150px',
          opacity: '1',
          height:'200px',
          width:'200px'
        },'slow');
    });


    $(".btn2").click(function(){
        $(".div2").animate({
            left: '150px',
            opacity: '1',
            height:'toggle',
            width:'toggle'
          },'slow');
      });


     $(".btn3").click(function(){
        $(".div3").animate({
            left: '150px',
            opacity: '1',
            height:'200px',
            width:'200px'
          },2000);
      });


  });