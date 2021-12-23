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

$(window).scroll(function(){

		if (matchMedia("screen and (max-width: 640px)").matches) {
			if($(window).scrollTop() > $(".s01Step1 .txt").offset().top){
						$('.entryBtnArea, .spEntryArea').addClass("fixBtn");
						$('.step1Head').css({paddingBottom:"18.2425%"});
			}else{
						$('.entryBtnArea, .spEntryArea').removeClass("fixBtn");
						$('.step1Head').css({paddingBottom:"5.625%"});
			}
		}else{
			if($(window).scrollTop() > $(".step1Head").offset().top){
								$('.floatPcBnr').css({opacity:"1"});
				}else{
								$('.floatPcBnr').css({opacity:"0"});
				}
			}

});