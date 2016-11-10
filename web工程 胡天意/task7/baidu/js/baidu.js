// 为更多产品模块绑定事件
$("#pc-product").hover(function(){
     $(".more-product").fadeIn(100);
})
$(".more-product").mouseleave(function(){
     $(".more-product").fadeOut(100);
})
// 为导航栏天气模块绑定事件
$("#pc-weather").hover(function(){
  $("#wea").fadeIn(100);
})
$("#wea").mouseleave(function(){
  $("#wea").fadeOut(100);
})
