$(document).ready(function(){
	//toggle sidebar 

   $('html,body').animate({scrollTop:0},10);
$(".bar").click(function(){
$(".sidebar").css("width","250px");
$(".closebutton").show();
});
$(".closebutton").click(function(){
$(".sidebar").css("width","0px");
$(".closebutton").hide('fast');

})
$("html").click(function(){
$(".sidebar").css("width","0px");
$(".closebutton").hide(200);
});
$(".bar,.sidebar").click(function(e){
e.stopPropagation();
});
//animating navbar based on scroll position

var lastScrollTop=300;
var scrollOffset=300;
function navbar(){
	$(".nav-wrapper").css({"position":"fixed","width":"100%"});
  	$(".mediaicons").hide();
  	$(".topbar").css("background","transparent");
}

$(window).scroll(function(event){
  var scrollPos=$(this).scrollTop();
  //navbar animate code
if(scrollPos >200 && scrollPos <300 ){
navbar();
}
  else if(scrollPos > lastScrollTop && scrollPos > scrollOffset ){
  	navbar();
  	$(".nav-wrapper").addClass('nav-up');
    $(".nav-wrapper").addClass('transition-effect');
  }
  else if(scrollPos < scrollOffset ){
    $(".nav-wrapper").css({"position":"relative","width":"90%"});
  	$(".mediaicons").show();
  	$(".topbar").css("background","rgba(0,0,0,0.4)");
    $(".nav-wrapper").removeClass('transition-effect');
  }
  else{
   if(scrollPos + $(window).height() < $(document).height()){
     $(".nav-wrapper").removeClass('nav-up');
   }
  }
  lastScrollTop=scrollPos;
});
$(window).resize(function(){
var width=$(this).width();
if(width>=992 ){
$(".nav-wrapper").css({"position":"relative","width":"90%"});
$(".mediaicons").show();
$(".topbar").css("background","rgba(0,0,0,0.4)");
  }
});     
});

$(document).ready(function(){
var posst1=$("#background1").css("position","static");
var posst2=$("#background2").css("position","static");
var posst3=$("#background3").css("position","static");
var posst4=$("#background4").css("position","static");
if(posst1 && posst2 && posst3 && posst4){
var offsetA=$(".text-wrap1").offset().top;
var offsetB=$(".text-wrap2").offset().top;
var offsetC=$(".text-wrap3").offset().top;
var offsetD=$(".text-wrap4").offset().top;
}  

$(window).scroll(function(){
  var scrollPos=$(this).scrollTop();
if(scrollPos>offsetA-100 && scrollPos<=offsetD+400){
$(".vertical-dots").fadeIn(300);
}else{
 $(".vertical-dots").fadeOut(300);
}
if(scrollPos<offsetA+100 || scrollPos>offsetD+300){
  $("#background1,#background2,#background3,#background4").css({"position":"static","height":"790px"});

}

 if(scrollPos>offsetA && scrollPos<offsetB){
$(".vertical-dots>ul>li>a").removeClass("style");
$(".vertical-dots>ul>li:nth-child(1)>a").addClass("style");
$("#background1").css({"position":"fixed","opacity":"1"});
$("#background2,#background3,#background4").css({"position":"static","opacity":"0"});

}
else if(scrollPos>offsetB && scrollPos<offsetC){
$(".vertical-dots>ul>li>a").removeClass("style");
$(".vertical-dots>ul>li:nth-child(2)>a").addClass("style");
$("#background2").css({"position":"fixed","opacity":"1"});
$("#background1,#background3,#background4").css({"position":"static","opacity":"0"});

}else if(scrollPos>offsetC && scrollPos<offsetD){
$(".vertical-dots>ul>li>a").removeClass("style");
$(".vertical-dots>ul>li:nth-child(3)>a").addClass("style");
$("#background3").css({"position":"fixed","opacity":"1"});
$("#background1,#background2,#background4").css({"position":"static","opacity":"0"});
}
else{
  if(scrollPos>offsetD && scrollPos<offsetD+400){
$(".vertical-dots>ul>li>a").removeClass("style");
$(".vertical-dots>ul>li:nth-child(4)>a").addClass("style");
$("#background4").css({"position":"fixed","opacity":"1"});
$("#background1,#background2,background3").css({"position":"static","opacity":"0"});  
}
}
});
$(".vertical-dots > ul > li > a").click(function(){
    $(".vertical-dots > ul > li > a").removeClass("style");
    $(this).addClass("style");
  });
  
$(".vertical-dots > ul > li:nth-child(1) > a").click(function(){
$("html,body").animate({scrollTop:offsetA},500);
  });

$(".vertical-dots > ul > li:nth-child(2) > a").click(function(){
$("html,body").animate({scrollTop:offsetB+100},500);
  });

$(".vertical-dots > ul > li:nth-child(3) > a").click(function(){
$("html,body").animate({scrollTop:offsetC+100},500);
  });

$(".vertical-dots > ul > li:nth-child(4) > a").click(function(){
$("html,body").animate({scrollTop:offsetD+60},500);
  });


});