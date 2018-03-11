
$(document).ready(function(){
  $('.class').text();
});



$(".button_hide").on('click',function(){
  $(".box1").css("background-color","blue");
})

$(".button_show").on('click',function(){
  $(".box1").css("background-color","red");
})

// 表示・非表示
$(".button_show2").on('click',function(){
  $(".box1").show(2000);
})

$(".button_hide2").on('click',function(){
  $(".box1").hide(2000);
})

// カウント
var countUpValue = 0;

$(".button_show").on('click',function(){
  countUpValue++;
  $(".box1").html(countUpValue);
})
