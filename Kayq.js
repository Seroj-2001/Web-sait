$('#logo').click(function(){
    window.location="Kayq.html";
});
$('#top').click(function(){
    $('html,body').animate({scrollTop:0},1000);
});
$('header span').click(function(){
    $('header span').css({color:"white"});
    $(this).css({color:"lime"});
    var i = $(this).index()-1;
    var t = $('h2').eq(i).offset().top-70;
    $('html,body').stop().animate({scrollTop:t},1000);
});
var x1=0,x2=0,x3=0,x4=0,x5=0,x6=0,x7=0,x8=0,x9=0;
var o1=0,o2=0,o3=0,o4=0,o5=0,o6=0,o7=0,o8=0,o9=0;
var h ="x";
var pop = 0;
$('.xo div').click(function(){
    var k =$(this);
    d(k);
});
function d(k){
     if(k.html()==""){
     pop++;
     var ind = k.index()+1;
    if(h=="x"){
        if(ind==1){x1=1;}
        if(ind==2){x2=1;}
        if(ind==3){x3=1;}
        if(ind==4){x4=1;}
        if(ind==5){x5=1;}
        if(ind==6){x6=1;}
        if(ind==7){x7=1;}
        if(ind==8){x8=1;}
        if(ind==9){x9=1;}
    k.html('<img src="x.png">');
    h = "o";    
    }else{
        if(ind==1){o1=1;}
        if(ind==2){o2=1;}
        if(ind==3){o3=1;}
        if(ind==4){o4=1;}
        if(ind==5){o5=1;}
        if(ind==6){o6=1;}
        if(ind==7){o7=1;}
        if(ind==8){o8=1;}
        if(ind==9){o9=1;}
        k.html('<img src="o.png">');
        h ="x";
    }
     winner();
     }
}
    

function winner(){
    if(
        x1+x2+x3==3||
        x4+x5+x6==3||
        x7+x8+x9==3||
        x1+x4+x7==3||
        x2+x5+x8==3||
        x3+x6+x9==3||
        x1+x5+x9==3||
        x3+x5+x7==3
        
    
    ){
       alert("x Win!");
        window.location="Kayq.html";
       }
    else if(
         o1+o2+o3==3||
        o4+o5+o6==3||
        o7+o8+o9==3||
        o1+o4+o7==3||
        o2+o5+o8==3||
        o3+o6+o9==3||
        o1+o5+o9==3||
        o3+o5+o7==3
    ){
        alert("O Win!");
        window.location="Kayq.html"; 
    }else if(pop==9){
             alert("Nobody wini")
             window.location="Kayq.html";
             }
}

$('.calculator div').click(function(){
    if($(this).index()!=0){
    var v= $(this).text();
    if(v=="="){
        var v2 = $("#text").val();
        v2=eval(v2);
        $("#text").val(v2);
    }else if(v=="C"){
        $("#text").val('');
    }else if(v=="<"){
        var v2 = $("#text").val();
        v2=v2.slice(0,v2.length-1);
        $("#text").val(v2);
    }else{
        var v2 = $("#text").val();
        v2+=v;
        $("#text").val(v2);
    }
}
});
$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});

