$(window).on('load',function () {
	//ボタンアンカー
	$('a[href^="#"]').on('click',function(e){
		e.preventDefault();
		var thisHref = $(this).attr('href');
		var headerHight = 56;
		if( thisHref === "#"){
			return;
		}else{
			var anc = $(this).attr('href');
			var arriveID = anc.split('#')[1];
			var thisOstTop = $('#' + arriveID).offset().top - headerHight;
			scrollAnc(thisOstTop);
		}
	});

	function scrollAnc(num){
		$('html,body').animate({
			scrollTop: num
		},800);
	}

	//URLアンカー
	var ls = location.href;
	if(ls.indexOf('#') > -1){
		var ancParam = ls.split('#')[1];
		if(ancParam.indexOf('&') > -1){
			var ancParam = ancParam.split('&')[0];
		}
	}
	scrollFunc();
	function scrollFunc(){
		if($('#' + ancParam).length == 1){
			var ancTAG = $('#' + ancParam);
			var offTop = ancTAG.offset().top;
			$('html,body').scrollTop(offTop);
		}
	}

	//キャンペーン詳細とご注意事項（＋－画像）
	var open = '../common/img/notesbtn_m.png';
	var close = '../common/img/notesbtn_p.png';

	var cnt = 0;
	$(document).on('click','.cpNotesBtn',function(){
		if(cnt % 2 == 0){
			$(".cpNotesBtn img").attr("src", open);
			$(".cpNotesBtnWrap").addClass('shadowJs');
		}else{
			$(".cpNotesBtn img").attr("src", close);
			$(".cpNotesBtnWrap").removeClass('shadowJs');
		}
		$(".cpNotesFlame").slideToggle(400);
		cnt = cnt + 1;
	})

	//店舗一覧アコーディオン
	//** (複数個の時はhtmlに記述)
	$(".accordion").each(function() {
		var accordion = $(this);
		$(this).find(".switch").click(function() {
			//$("> .switch", this).click(function() { // 上段の別の書き方
			var targetContentWrap = $(this).next(".contentWrap");
			if ( targetContentWrap.css("display") === "none" ) {
				accordion.find(".contentWrap").slideUp();
				accordion.find(".switch.open").removeClass("open");
			}
			targetContentWrap.slideToggle();
			$(this).toggleClass("open");
		});
	});

});

