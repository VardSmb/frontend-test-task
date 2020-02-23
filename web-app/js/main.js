$(document).ready(function(){
	$('.menu-btn').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('menu-btn_active');
		$('.main').toggleClass('show');
        $('.logo').toggleClass('hidden');
	});
	$('.menu-item a').click(function(){
		$('.main.show').removeClass('show');
		$('.menu-btn.menu-btn_active').removeClass('menu-btn_active');
        $('.logo.hidden').removeClass('hidden');
        $('.menu-btn.menu-btn_active').removeClass('menu-btn_active');
	});
	
});