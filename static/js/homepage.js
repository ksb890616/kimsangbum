$(document).ready(function(){
	// $('.me, .project').mouseenter(function(){
	// 	$('.me, .project').fadeOut(2000);
		
	// });

	$('#test01').mouseenter(function(){
		$('#test01').fadeOut(2000);
		// $(this).hide();
		// alert('enter');
		
	});

	$('#test01').mouseleave(function(){
		$('#test01').fadeIn(2000);
		// $(this).show();
		// alert('leave');
	});

	// $('.me, project').mouseleave(function(){
	// 	$('.me, .project').fadeIn(2000);
	// });
});