window.onload = function () {
	$(".disN").removeClass("disN");
};

$(document).ready(function() {

 $(".MNareaBtn").bind("click",function(){$(".MNareaBtn img").attr("src", open);})
 $(".MNareaBtn").trigger("click");

 $('ul.tabBtn li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabBtn li').removeClass('open');
		$('.tabArea').removeClass('openTab');

		$(this).addClass('open');
		$("#"+tab_id).addClass('openTab');
	})

	var open = 'img/section03_page_open.png';
	var close = 'img/section03_page_close.png';

	var cnt = 1;
	$(document).on('click','.MNareaBtn',function(){
		if(cnt % 2 == 0){
			$(".MNareaBtn img").attr("src", open);
			$(".MNareaBtn").addClass('shadowJs');
		}else{
			$(".MNareaBtn img").attr("src", close);
			$(".MNareaBtn").removeClass('shadowJs');
		}
		$(".MNareaFlame").slideToggle(400);
		cnt = cnt + 1;
	})

});