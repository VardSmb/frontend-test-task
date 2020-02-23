$(document).ready(function(){
 
$(".open-popup").click(function()
{
 
 var iddiv = $(this).attr("iddiv");
 $('#'+iddiv).fadeIn(300);
 $('.popup-overlay').attr('opendiv',iddiv);
 return false;
});
 
$('.close-popup, .popup-overlay').click(function()
{
 var iddiv = $(".open-popup").attr('opendiv');
 $('.popup-overlay').fadeOut(300);
 $('#'+iddiv).fadeOut(300);
});
 
});