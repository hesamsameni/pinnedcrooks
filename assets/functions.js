$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	$('.logo').css({
		'transform' : 'translate(0px , '+ wScroll /10 +'%)'
	});
	
	$('.instrument1').css({
		'transform' : 'translate(0px , -'+ wScroll /2 +'%)'
	});
	
	$('.instrument2').css({
		'transform' : 'translate(0px , -'+ wScroll /2 +'%)'
	});
	
	if(wScroll > $('h2').offset().top){
		
		$('.bandMembers figure').each(function(i){
			
		setTimeout(function(){
			$('.bandMembers figure').eq(i).addClass('is-showing');
		}, 400 * (i+1));
		});
		
		
	}
	
});