$(function() { 
	var $mt = $('.btn-menu');
	var $menu = $('nav .nav-list');

	$(window).resize(function(){
		if ($menu.css('display')=='none' && window.innerWidth>1066){
			$menu.show();
		}
	});

	$mt.click(function(){
		$menu.slideToggle(500);
		$(this).toggleClass('btn-menu_active');
	});
});