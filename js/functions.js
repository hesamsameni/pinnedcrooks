$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	$('.logo').css({
		'transform' : 'translate(0px , '+ wScroll /4 +'%)'
	});
	
	$('.instrument1').css({
		'transform' : 'translate(0px , -'+ wScroll /2 +'%)'
	});
	
	$('.instrument2').css({
		'transform' : 'translate(0px , -'+ wScroll /2 +'%)'
	});
	
});