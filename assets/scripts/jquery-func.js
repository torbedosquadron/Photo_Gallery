$(document).ready(function(){

	new_layer("#gallery .image a");
		
	$("#gallery .image a").fancybox({
		
		'transitionIn'		:	'elastic',
		'transitionOut'		:	'elastic',
		'speedIn'			:	600, 
		'speedOut'			:	200, 
		'overlayShow'		:	true,		
		"showCloseButton"   :	true,
		"showNavArrows"     :   true
	});
		
});

function new_layer(div)
{
	$.each($(div),function(){
	original = $(this).html();
	$(this).html(original+"<span class='overlay'></span>");		
	});
}
