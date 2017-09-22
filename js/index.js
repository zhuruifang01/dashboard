$(function(){
	//一级导航点击
$('.nav-right-first').click(function(){
			$(this).css({'border-top-color':'#4d97e4'}).siblings().css({'border-top-color':'white'});
			$(this).children().eq(1).slideToggle();
			$(this).siblings().children('.nav-right-two').slideUp();

	})
//二级导航点击
$('.nav-right-two li').click(function(e){
     //阻止冒泡
     e.stopPropagation();
      $(this).css({'background-color':'#ececec','color':'#2b97eb'});
      $('.nav-right-three').css('color','#969696');
      $(this).children('i').css({'background-image':'url(img/right1.png)'});
      $(this).siblings().css({'background-color':'white','color':'#969696'});
      $(this).siblings().children('i').css({'background-image':'url(img/down1.png)'});
      $(this).siblings().children('.nav-right-three').hide();
      $(this).children('.nav-right-three').slideToggle();
   
})
//国家选择
$('.gq').click(function(){
	$('.chose-nation').slideToggle();
})
$(".chose-nation .nation").click(function(){
	var index=$(this).index(".chose-nation .nation");
	if(index==0){
		$(".gq").attr("src","img/shouye_06.png");
	}else if(index==1){
        $(".gq").attr("src","img/shouye_21.png");
	}else{
        $(".gq").attr("src","img/shouye_23.png");
	}
});

//点击content内容区，收起导航条
$('.conntent').click(function(){
	$('.nav-right-three').slideUp();
	$('.nav-right-two').slideUp();
})

//获取时间
var str;
function showTime(){
	var mydate = new Date();
	var year=mydate.getFullYear()+"/";
	var month=mydate.getMonth()+1+"/";
	var day=mydate.getDate();
	
	str=year+''+month+''+day;
	 return str;
}
showTime();
$('.chose .time').text(str);

})
