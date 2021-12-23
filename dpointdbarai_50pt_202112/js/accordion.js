$(function(){
	$(".ap_ac").click(function() {
		$(this).next("dd").slideToggle();
		$(this).toggleClass("ap_open");
	});
});
