$(document).ready(function(){
	$("#header-menu-btn").click(function() {
    $(".menu-wrapper").fadeIn("slow");
  });
	
  $(".menu-list-item").click(function() {
    $(".menu-wrapper").fadeOut("slow");
    var href = $(this).attr("href");
  });
	
	$(".menu-wrapper .logo").click(function() {
    $(".menu-wrapper").fadeOut();
    var href = $(this).attr("href");
  });
	
	$("#menu-wrapper-btn").click(function() {
    $(".menu-wrapper").fadeOut();
  });

  $('input[name="phone"]').mask('+7 (000) 000-00-00');
  $('input[name="phone_c"]').mask('+7 (000) 000-00-00');
	
$.each($('.radiobuttons-item'), function(index, val){
	if($(this).find('input').prop('checked')==true){
	   $(this).addClass('active');
	   }
});
$(document).on('click', '.radiobuttons-item', function(event){
	$(this).parents('.radiobuttons').find('.radiobuttons-item').removeClass('active');
	$(this).parents('.radiobauttons').find('.radiobuttons-item input').prop('checked',false);
	$(this).toggleClass('active');
	$(this).find('input').prop('checked',true);
	return false;
});

$(document).ready(function(){
$('#success-file').hide();
$('#file').on('change', function(){
if($('#file input[type="file"]').val() != ''){
  $('#success-file').show();  
}
});
});
 
$(".open-popup").click(function()
{
 var iddiv = $(this).attr("iddiv");
 $('#'+iddiv).fadeIn(300);
 $('.popup-overlay').attr('opendiv',iddiv);
 return false;
});
 
$('.close-popup, .popup-icon').click(function()
{
 var iddiv = $(".open-popup").attr('opendiv');
 $('.popup-overlay').fadeOut(300);
 $('#'+iddiv).fadeOut(300);
});

	$(".popup-btn").click(function() {
    $(".popup-overlay").fadeOut();
	$("#popup-form.popup-overlay").fadeIn();
	
  });
	
	
		
	$( window ).scroll(function(){ 
		if($(window).scrollTop() > $("#contacts").offset().top) {
			$( ".menu-container" ).css({ 
				   "display": "none"     
		   });
    	}else{
			$( ".menu-container" ).css({ 
				   "display": "block"      
		   }); 
		} 
		if ($(this).scrollTop() > 600){
	    $( ".menu-container" ).css({ 
	                 "height": "60px", 
	                 "transition": "0.2s linear", 
	                 "line-height": "60px"
	               });
			$( ".header-free-btn" ).css({ 
	                 "display": "none"
	               });
			$( ".menu .logo" ).css({ 
	                 "width": "60px"
	               });
			
	}else if ($(window).width() > 580){
		$( ".menu-container" ).css({ 
	                 "height": "120px", 
	                 "transition": "0.2s linear", 
	                 "line-height": "120px"
	               });
			$( ".header-free-btn" ).css({ 
	                 "display": "block"
	               });
			$( ".menu .logo" ).css({ 
	                 "width": "120px"
	               });
			}
		
		if($(window).scrollTop() > $("#contacts").offset().top) {
			$( ".menu-container" ).css({ 
				   "display": "none"     
		   });
    	}else{
			$( ".menu-container" ).css({ 
				   "display": "block"      
		   }); 
		} 
	});
});



// calculator
$(document).ready(function(){


	if(localStorage.getItem('items') === null){

	var container = {
			type: null,
			name: null,
			sposob: null,
			cargo: null,
			weight: null,
			size: null,
			amount: null,
			sum: null
	};
	    var serialItems = JSON.stringify(container);
        localStorage.setItem('items', serialItems);
    }
    const data = {
    	auto: {
    		weight: 0,
    		sbweight: 2,
    		prib: 0,
    		sv: 0,
    		sum: 0
    	},
    	sea: {
    		weight: 0,
    		sbweight: 35,
    		prib: 0,
    		sv: 0,
    		sum: 0
    	},
    	avia: {
    		weight: 0,
    		sbweight: 5,
    		prib: 0,
    		sv: 0,
    		sum: 0
    	},
    	express: {
    		weight: 0,
    		sbweight: 35,
    		prib: 0,
    		sv: 0,
    		sum: 0
    	}
    };




       
         $("#calculator-form .calculator-description input").on('change', function(){
        	let items = JSON.parse(localStorage.getItem('items'));
        	let cargo = $(this).val();
        	items.cargo = cargo;

        	localStorage.setItem('items', JSON.stringify(items));
        	
        });
          $("#calculator-form .calculator-weight input").on('change', function(){
        	let items = JSON.parse(localStorage.getItem('items'));
        	let weight = $(this).val();
//init weight
        	items.weight = weight;

        	data.auto.weight = weight;
        	data.sea.weight = weight;
        	data.avia.weight = weight;
        	data.express.weight = weight;
//end weight
        	data.express.prib = 25 * weight + 5;
        	data.auto.prib = 0.306122449 * weight + 140.8163265;
        	data.avia.prib = 0.306122449 * weight + 140.8163265;
        	const auto_sv_summ = parseInt(data.auto.weight) * parseInt(data.auto.sbweight);
        	const sv_sum = parseInt(data.express.weight) * parseInt(data.express.sbweight);
        	const avia_sv_sum = parseInt(data.avia.weight) * parseInt(data.avia.sbweight);
        	data.express.sv = sv_sum;
        	data.auto.sv = auto_sv_summ;
        	data.avia.sv = avia_sv_sum;
    		const summ = parseInt(data.express.sv) + parseInt(data.express.prib);
    		const summ_auto = parseInt(data.auto.sv) + parseInt(data.auto.prib);
    		const summ_avia = parseInt(data.avia.sv) + parseInt(data.avia.prib);

        	data.auto.sum = summ_auto;
        	data.express.sum = summ;
        	data.avia.sum = summ_avia;

            if(items.sposob == 1){
                items.sum = data.auto.sum;
            }else if(items.sposob == 3){
                items.sum = data.avia.sum;
            }else if(items.sposob == 4){
                items.sum = data.express.sum;
            }

        	localStorage.setItem('items', JSON.stringify(items));
        });
           $("#calculator-form .radiobuttons-item").on('click', function(){
        	let items = JSON.parse(localStorage.getItem('items'));
        	let service = $(this).find("input[type='radio']").val();
        	items.type = service;
        	items.sposob = service;

        	if(service == 1){
        		items.sum = data.auto.sum;
        	}else if(service == 3){
        		items.sum = data.avia.sum;
        	}else if(service == 4){
        		items.sum = data.express.sum;
        	}
        	localStorage.setItem('items', JSON.stringify(items));
        	$('#calculator-form input[name="size"]').val(items.size);
        	$('#calculator-form input[name="sposob"]').val(items.sposob);
        	$('#calculator-form input[name="summa"]').val(items.sum);
        });
           $("#calculator-form .calculator-volume input").on('change', function(){
        	let items = JSON.parse(localStorage.getItem('items'));
        	let size = $(this).val();

        	items.size = size;

        	localStorage.setItem('items', JSON.stringify(items));
        });
           $("#calculator-form .calculator-price input").on('change', function(){
        	let items = JSON.parse(localStorage.getItem('items'));
        	let amount = $(this).val();

        	items.amount = amount;

        	localStorage.setItem('items', JSON.stringify(items));
        });

});
// forms
$(document).ready(function(){
        $('.form').on('submit', function (e) {
            e.preventDefault();//отключаем событие при нажатии кнопки
            var forma = $(this).serialize();
            $.ajax({
                url: 'sendform.php',
                type: 'POST',
                data: forma,
                success: function (msg) {
                	$('#popup-footer-form').show();
                	$('#popup-footer-form').css({'visibility': 'visible', 'opacity': '1', 'transition': '500ms'});
                }
            });
        });
    });

// services
$(document).ready(function(){
    $('#popup-1 button').on('click', function(){
        let service = $(this).closest('#popup-1').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
    $('#popup-2 button').on('click', function(){
        let service = $(this).closest('#popup-2').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
    $('#popup-3 button').on('click', function(){
        let service = $(this).closest('#popup-3').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
    $('#popup-4 button').on('click', function(){
        let service = $(this).closest('#popup-4').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
    $('#popup-5 button').on('click', function(){
        let service = $(this).closest('#popup-5').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
    $('#popup-6 button').on('click', function(){
        let service = $(this).closest('#popup-6').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
    $('#popup-7 button').on('click', function(){
        let service = $(this).closest('#popup-7').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
    $('#popup-8 button').on('click', function(){
        let service = $(this).closest('#popup-8').find('h5').text();
        $('form#services-form input[name="services"]').val(service);
    });
});

// calculator
$(document).ready(function(){

        $('#calculator-form').on('submit', function (e) {
            e.preventDefault();
            let items = JSON.parse(localStorage.getItem('items'));
            // var forma = $(this).serialize();
            var formas = new FormData;
            formas.append('file', $('#file')[0].files[0]);
            formas.append('name_c', $(this).find('input[name="name_c"]').val());
            formas.append('calculator', $(this).find('input[name="calculator"]').val());
            formas.append('sposob', items.sposob);
            formas.append('tema', $(this).find('input[name="tema"]').val());
            formas.append('weight', $(this).find('input[name="weight"]').val());
            formas.append('size', $(this).find('input[name="size"]').val());
            formas.append('summa', $(this).find('input[name="summa"]').val());
            formas.append('email_c', $(this).find('input[name="email_c"]').val());
            formas.append('phone_c', $(this).find('input[name="phone_c"]').val());
            formas.append('cargo', $(this).find('input[name="description"]').val());
            formas.append('volume', $(this).find('input[name="volume"]').val());
            formas.append('price', $(this).find('input[name="price"]').val());
// client
            $.ajax({
                url: 'send.php',
                type: 'POST',       
                contentType: false,
                processData: false,
                data: formas,
                success: function (data) {
                	console.log(data);
                	$('#popup-calculator-form-calc').show();
                	$('#popup-calculator-form-calc').css({'visibility': 'visible', 'opacity': '1', 'transition': '500ms'});
                },
                error: function (jqXHR, textStatus, errorThrown) { errorFunction(); }
            });
            // site
            $.ajax({
                url: 'feedback.php',
                type: 'POST',       
                contentType: false,
                processData: false,
                data: formas,
                success: function (data) {
                    localStorage.removeItem("items");
                    setTimeout(function() {window.location.reload();}, 7000);

                },
                error: function (jqXHR, textStatus, errorThrown) { errorFunction(); }
            });

            
        });
    });