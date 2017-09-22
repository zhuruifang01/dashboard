

$(function(){
	$('.head h5 strong i,.ecl-tim-bts h3 strong i,.ecls ul li h3.top strong i').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	

	$('.main p').addClass('active');
	var myDate = new Date();
	year=myDate.getFullYear();
	month=myDate.getMonth()+1;
	day=myDate.getDate(); 
	$('.head h5 span').text(year+'/'+month+'/'+day)
	
	
	function SetWinHeight(obj) 
{ 
var win=obj; 
if (document.getElementById) 
{ 
if (win && !window.opera) 
{ 
if (win.contentDocument && win.contentDocument.body.offsetHeight) 
win.height = win.contentDocument.body.offsetHeight; 
else if(win.Document && win.Document.body.scrollHeight) 
win.height = win.Document.body.scrollHeight; 
} 
} 
} 
	
	$(window).resize(function(){
    location.reload();
	});
	
	
	
})

















