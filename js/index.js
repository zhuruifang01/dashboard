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
// ================图表=========================
//初始化：
	//柱状图1；
		zhu1X=[1,2,3,4,5,6,7];
		zhu1Y1=[10,20,10,30,40,30,40];
		zhu1Y2=[10,30,40,50,70,80,30];
		createcharts.chart1(zhu1X,zhu1Y1,zhu1Y2);
    //柱状图2；
		zhu2X=[1,2,3,4,5,6,7];
		zhu2Y1=[10,20,10,30,40,30,40];
        zhu2color1=['#90cdf0','#90cdf0','#90cdf0','#90cdf0','#90cdf0','#90cdf0','#90cdf0'];
		zhu2color2=['#e49557','#e49557','#e49557','#e49557','#e49557','#e49557','#e49557'];
		zhu2color3=['#f3ce92','#f3ce92','#f3ce92','#f3ce92','#f3ce92','#f3ce92','#f3ce92'];
		createcharts.chart2(zhu2color1,'SQI',zhu1X,zhu1Y1);
    //折线图；
		zheX=[1,2,3,4,5,6,7];
		zheY1=[10,20,10,30,40,30,40];
		createcharts.chart3('#218be2','PAT',zheX,zheY1);

   var BG_height=$('.biaoge ul li').height();
   $('.biaoge ul li').css({'line-height':BG_height+'px'});

//自动切换：
	//柱状图2：
		var num1=0;
		function zhu2(){
			num1++;
			if(num1>=3){num1=0;}
			$(".xuanze li").removeClass("active").eq(num1).addClass('active');
			if(num1==1){
				createcharts.chart2(zhu2color2,'SeQI',zhu1X,zhu1Y1);
			}else if(num1==2){
				createcharts.chart2(zhu2color3,'HHS',zhu1X,zhu1Y1);
			}else{createcharts.chart2(zhu2color1,'SQI',zhu1X,zhu1Y1);}
		}
		var t1=setInterval(zhu2,5000);
		//鼠标停留停止轮播：
		$("#chart2").mouseover(function(){
			clearInterval(t1);
		}).mouseout(function(){
			t1=setInterval(zhu2,5000);
		});
		//点击切换:
		$(".xuanze1 li").click(function(){
			var index=$(this).index(".xuanze1 li");
			$(".xuanze1 li").removeClass("active").eq(index).addClass('active');
			if(index==1){
				createcharts.chart2(zhu2color2,'SeQI',zhu1X,zhu1Y1);
			}else if(index==2){
				createcharts.chart2(zhu2color3,'HHS',zhu1X,zhu1Y1);
			}else{
				createcharts.chart2(zhu2color1,'SQI',zhu1X,zhu1Y1);
			}

		});
    //折线图:
		var num2=0;
		function zhe(){
			num2++;
			if(num2>=3){num2=0;}
			$(".xuanze2 li").removeClass("active").eq(num2).addClass('active');
			if(num2==1){
				createcharts.chart3('#e49557','SA',zheX,zheY1);
			}else if(num2==2){
				createcharts.chart3('#f3ce92','FRA',zheX,zheY1);
			}else{createcharts.chart3('#218be2','PAT',zheX,zheY1);}
		}
		var t2=setInterval(zhe,5000);
		//鼠标停留停止轮播：
		$("#chart3").mouseover(function(){
			clearInterval(t2);
		}).mouseout(function(){
			t2=setInterval(zhe,5000);
		});
		//点击切换:
		$(".xuanze2 li").click(function(){
			var index=$(this).index(".xuanze2 li");
			$(".xuanze2 li").removeClass("active").eq(index).addClass('active');
			if(index==1){
                createcharts.chart3('#e49557','SA',zheX,zheY1);
			}else if(index==2){
                createcharts.chart3('#f3ce92','FRA',zheX,zheY1);
			}else{
                createcharts.chart3('#218be2','PAT',zheX,zheY1);
			}

		});
});
