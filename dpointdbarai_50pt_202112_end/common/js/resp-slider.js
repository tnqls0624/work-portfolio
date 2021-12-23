/****************************
* resp-slider.js
* version:5.00
* jQuery plugin
* Release:2018.08
* License:To use under the terms of the MIT License.
* Copyright 2016 m.t
****************************/

var setItems;
var carItem_w;
(function($){
	$.fn.respSlider = function(options){
		var defaults = {
			retry_sec: 3,			// second
			retry_num: 4,			// int
			retry_height: 70,		// px
			side_eft: 'slide',		// 'fade' or 'slide'
			slide_eft: 'loop',		// 'loop' or 'fade' or 'slide'
	        slide_repeat: true,		// true or false
			slide_spd: 0.5,			// second
			wait_sec: 5				// second
		};
		var setting = $.extend(defaults, options);
		var callSlctr = '#' + $(this)[0].id;
		var retrySec = setting.retry_sec;
		var retryNum = setting.retry_num;
		var retryHeight = setting.retry_height;
		var sideEft = setting.side_eft;
		var slideEft = setting.slide_eft;
		var slideRepeat = setting.slide_repeat;
		var slideSpd = setting.slide_spd;
		var waitSec = setting.wait_sec;
		var carItemNum;
		var actualItemNum;
		var crntNum = 0;
		var count_slideNum = 1;
		var push_sliderBtn = 'auto';
		var touchEventBool;
		// var strDevice;
		var stopCarouselFlg = false;
		var setCarousel = function(){
			stopCarouselFlg = true;
			carItem_w = Math.ceil($('.slider-area').outerWidth(false));
			// $(callSlctr + ' .slider-item img').not(callSlctr + '.slider-item div img').width(carItem_w);
			var carBox_h = 0;
			$(callSlctr + ' .slider-item img').each(function(){
				if($(this).css('display') !== 'none' && carBox_h < $(this).height()){
					carBox_h = Math.ceil($(this).height());
				}
			});
			var carBox_w;
			if(slideEft === 'slide'){
				carBox_w = carItem_w * carItemNum;
			}else if(slideEft === 'fade'){
				carBox_w = carItem_w;
				$(callSlctr + ' .slider-item').css({'position':'absolute','opacity':0,'z-index':0});
				$(callSlctr + ' .slider-item:eq(0)').css({'opacity':1,'z-index':1});
			}else if(slideEft === 'loop'){
				carBox_w = carItem_w;
				$(callSlctr + ' .slider-item').css({'position':'absolute'});
				$(callSlctr + ' .slider-item').css({'left':'0px'});
				$(callSlctr + ' .slider-item:gt(4)').remove();
				$(callSlctr + ' .slider-box .slider-item:eq(0)').html(setItems[carItemNum - 2]).attr('id', 'additem_prev2');
				$(callSlctr + ' .slider-box .slider-item:eq(1)').html(setItems[carItemNum - 1]).attr('id', 'additem_prev');
				$(callSlctr + ' .slider-box .slider-item:eq(2)').html(setItems[0]).attr('id', 'additem_center');
				$(callSlctr + ' .slider-box .slider-item:eq(3)').html(setItems[1]).attr('id', 'additem_next');
				$(callSlctr + ' .slider-box .slider-item:eq(4)').html(setItems[2]).attr('id', 'additem_next2');
				// $(callSlctr + ' .slider-box .slider-item img').not(callSlctr + ' .slider-box .slider-item div img').css('width', carItem_w + 'px');
				$(callSlctr + ' .slider-box .slider-item#additem_prev2').css('left', - (carItem_w * 2) + 'px');
				$(callSlctr + ' .slider-box .slider-item#additem_prev').css('left', - carItem_w + 'px');
				$(callSlctr + ' .slider-box .slider-item#additem_center').css('left', '0px');
				$(callSlctr + ' .slider-box .slider-item#additem_next').css('left', carItem_w + 'px');
				$(callSlctr + ' .slider-box .slider-item#additem_next2').css('left', (carItem_w * 2) + 'px');
			}
			$(callSlctr + ' .slider-box').css('height', carBox_h + 'px');
			$(callSlctr + ' .slider-box').css('width', carBox_w + 'px');
			var carArea_h = $('.slider-area').outerHeight(true);
			var carBtn_top = Math.ceil((carArea_h / 2) - ($(callSlctr + ' .slider-btn').outerHeight(true) / 2));
			$(callSlctr + ' .slider-btn').css('top', carBtn_top + 'px');
			$(callSlctr + ' .slider-box').css('margin-left', '0px');
			changeItemIcon(0);
			stopCarouselFlg = false;
		};
		var setItemIcon = function(){
			var addHtml = '';
			for (var i = 0; i < actualItemNum; i++) {
				addHtml = addHtml + '<li class="icon-item ro_css"></li>';
			}
			$(callSlctr + ' .icon-area').html(addHtml);
		};
		var changeItemIcon = function(no){
			no = no % actualItemNum;
			$(callSlctr + ' .icon-item').removeClass('nowhere');
			$(callSlctr + ' .icon-item:eq(' + no + ')').addClass('nowhere');
		};
		var changeSliderBtn = function(){
			$(callSlctr + ' .slider-btn').css('display', 'block');
			if(crntNum === 0){
				$(callSlctr + ' .slider-btn-prev').css('display', 'none');
			}
			if(crntNum === carItemNum - 1){
				$(callSlctr + ' .slider-btn-next').css('display', 'none');
			}
		};
		var changeItem_iconBtn = function(tgtObj, itemNum) {
			$(tgtObj).animate({
				'opacity': 0
			}, slideSpd * 1000, function(){
				$(this).html(setItems[itemNum]);
				// $('img', this).not(callSlctr + ' .slider-box .slider-item div img').css('width', carItem_w + 'px');
				$(this).animate({
					'opacity': 1
				}, slideSpd * 1000);
			});
		};
		var moveCarousel_slide = function(tgtCar) {
			var moveDist = carItem_w * crntNum;
			$(tgtCar).stop();
			$(tgtCar).animate({
				'marginLeft': - moveDist + 'px',
			}, slideSpd * 1000, function(){
			});
			changeItemIcon(crntNum);
		};
		var moveCarousel_fade = function(tgtCar) {
			$(callSlctr + ' .slider-item').stop();
			$(callSlctr + ' .slider-item').not('.slider-item:eq(' + crntNum + ')').animate({
				'opacity':0,
				'z-index':0
			}, slideSpd * 1000, function(){
			});
			tgtCar = $('.slider-item:eq(' + crntNum + ')', tgtCar);
			$(tgtCar).stop();
			$(tgtCar).animate({
				'opacity':1,
				'z-index':1
			}, slideSpd * 1000, function(){
			});
			changeItemIcon(crntNum);
		};
		var moveCarousel_loop = function(tgtCar) {
			// 処理落ちを防ぐため、処理中は再実行しない
			if (!stopCarouselFlg) {
				stopCarouselFlg = true;
				var moveDist = carItem_w;
				$(callSlctr + ' .slider-item#additem_center').finish();
				$(callSlctr + ' .slider-item#additem_prev').finish();
				$(callSlctr + ' .slider-item#additem_next').finish();
				$(callSlctr + ' .slider-item#additem_prev2').finish();
				$(callSlctr + ' .slider-item#additem_next2').finish();

				// 広告コンテンツを受信した場合
				if ($('#home_slider #ad-item').has('img').length !== 0) {
					// 右クリック（フリック）かautoplayの場合
					if (push_sliderBtn === 'nextBtn' || push_sliderBtn === 'auto') {
				        dataLayer.push({
				        	'event': 'allox_slider',
				        	'allox_slider_result': 'allox_2ndView'
				    	});
						// nextの要素を取得
						var $nextHtml = $(callSlctr + ' .slider-box .slider-item#additem_next');
						var nextInnerHtml = $nextHtml.html();
						// next2に複製
						$(callSlctr + ' .slider-box .slider-item#additem_next2').html(nextInnerHtml);
		                // 広告用JSを削除
		                $('#ad-item script').remove();
		                // Imp計測画像を削除
		                $('#ad-item>div>img').remove();
		                // 広告枠をnextに移動
		                var adSliderHtml = $('#home_slider #ad-item').html();
						// nextの要素を削除
						$nextHtml[0].innerHTML = adSliderHtml;
		                // 元の広告枠を削除
		                $('#home_slider #ad-item')[0].innerHTML = '';
		                $('#home_slider #ad-item').remove();
		                // 配列に追加
		                var insertAdindex = setItems.indexOf(nextInnerHtml);
		                // nextの要素が検索できなかった場合
		                if (insertAdindex === -1) {
		                	// 現在の場所に追加
		                	setItems.splice(crntNum, 0, adSliderHtml);
		                // nextの要素が先頭だった場合
		                } else if (insertAdindex === 0) {
		                	// 先頭に追加
		                	setItems.unshift(adSliderHtml);
		                } else {
		                	// nextの1つ前に追加
		                	setItems.splice(insertAdindex, 0, adSliderHtml);
		                }
						carItemNum = setItems.length;
					}
				}
				var prevNum = crntNum - 1;
				var nextNum = crntNum + 1;
				if(crntNum === 0){
					prevNum = carItemNum - 1;
				}else if(crntNum === carItemNum - 1){
					nextNum = 0;
				}
				var prev2Num = prevNum - 1;
				var next2Num = nextNum + 1;
				if(prevNum === 0){
					prev2Num = carItemNum - 1;
				}
				if(nextNum === carItemNum - 1){
					next2Num = 0;
				}
				if(push_sliderBtn === 'nextBtn' || push_sliderBtn === 'auto'){
					$(callSlctr + ' .slider-item#additem_prev2').attr('id', 'tempitem_prev2');
					$(callSlctr + ' .slider-item#tempitem_prev2').animate({
						'left': - (moveDist * 3) + 'px'
					}, slideSpd * 1000, function(){
						$(this).css({
							'left': (moveDist * 2) + 'px',
							'display': 'none'
						});
						$(this).html(setItems[next2Num]).fadeIn(slideSpd * 1000);
					});
					$(callSlctr + ' .slider-item#additem_prev').animate({
						'left': - (moveDist * 2) + 'px'
					}, slideSpd * 1000, function(){
						$(this).html(setItems[prev2Num]);
						$(this).attr('id', 'additem_prev2');
					});
					$(callSlctr + ' .slider-item#additem_center').animate({
						'left': - moveDist + 'px'
					}, slideSpd * 1000, function(){
						$(this).attr('id', 'additem_prev');
					});
					$(callSlctr + ' .slider-item#additem_next').animate({
						'left': '0px'
					}, slideSpd * 1000, function(){
						$(this).attr('id', 'additem_center');
					});
					if(sideEft === 'fade'){
						$(callSlctr + ' .slider-item#additem_next2').css('display', 'none');
						$(callSlctr + ' .slider-item#additem_next2').animate({
							'left': moveDist + 'px'
						}, slideSpd * 1000, function(){
							$(this).attr('id', 'additem_next');
							$(callSlctr + ' .slider-item#tempitem_prev2').attr('id', 'additem_next2');
							$(this).fadeIn(slideSpd * 1000);
						});
					}else if(sideEft === 'slide'){
						$(callSlctr + ' .slider-item#additem_next2').animate({
							'left': moveDist + 'px'
						}, slideSpd * 1000, function(){
							$(this).attr('id', 'additem_next');
							$(callSlctr + ' .slider-item#tempitem_prev2').attr('id', 'additem_next2');
						});
					}
					// 処理が間に合わなかった場合リセット
					if ($('#tempitem_prev2').length > 1 || $('#additem_prev2').length > 1 || $('#additem_prev').length > 1 || $('#additem_center').length > 1 || $('#additem_next').length > 1 ||  $('#additem_next2').length > 1) {
						setCarousel();
						resetCarousel();
					}

				}else if(push_sliderBtn === 'prevBtn'){
					$(callSlctr + ' .slider-item#additem_next2').attr('id', 'tempitem_next2');
					$(callSlctr + ' .slider-item#tempitem_next2').animate({
						'left': (moveDist * 3) + 'px'
					}, slideSpd * 1000, function(){
						$(this).css({
							'left': - (moveDist * 2) + 'px',
							'display': 'none'
						});
						$(this).html(setItems[prev2Num]).fadeIn(slideSpd * 1000);
					});
					$(callSlctr + ' .slider-item#additem_next').animate({
						'left': (moveDist * 2) + 'px'
					}, slideSpd * 1000, function(){
						$(this).html(setItems[next2Num]);
						$(this).attr('id', 'additem_next2');
					});
					$(callSlctr + ' .slider-item#additem_center').animate({
						'left': moveDist + 'px'
					}, slideSpd * 1000, function(){
						$(this).attr('id', 'additem_next');
					});
					$(callSlctr + ' .slider-item#additem_prev').animate({
						'left': '0px'
					}, slideSpd * 1000, function(){
						$(this).attr('id', 'additem_center');
					});
					if(sideEft === 'fade'){
						$(callSlctr + ' .slider-item#additem_prev2').css('display', 'none');
						$(callSlctr + ' .slider-item#additem_prev2').animate({
							'left': - moveDist + 'px'
						}, slideSpd * 1000, function(){
							$(this).attr('id', 'additem_prev');
							$(callSlctr + ' .slider-item#tempitem_next2').attr('id', 'additem_prev2');
							$(this).fadeIn(slideSpd * 1000);
						});
					}else if(sideEft === 'slide'){
						$(callSlctr + ' .slider-item#additem_prev2').animate({
							'left': - moveDist + 'px'
						}, slideSpd * 1000, function(){
							$(this).attr('id', 'additem_prev');
							$(callSlctr + ' .slider-item#tempitem_next2').attr('id', 'additem_prev2');
						});
					}
					// 処理が間に合わなかった場合リセット
					if ($('#tempitem_next2').length > 1 || $('#additem_prev2').length > 1 || $('#additem_prev').length > 1 || $('#additem_center').length > 1 || $('#additem_next').length > 1 ||  $('#additem_next2').length > 1) {
						setCarousel();
						resetCarousel();
					}
				}else if(push_sliderBtn === 'iconBtn'){
					changeItem_iconBtn($(callSlctr + ' .slider-item#additem_center'), crntNum);
					changeItem_iconBtn($(callSlctr + ' .slider-item#additem_prev'), prevNum);
					changeItem_iconBtn($(callSlctr + ' .slider-item#additem_next'), nextNum);
					changeItem_iconBtn($(callSlctr + ' .slider-item#additem_prev2'), prev2Num);
					changeItem_iconBtn($(callSlctr + ' .slider-item#additem_next2'), next2Num);
				}
				// $(callSlctr + ' .slider-box .slider-item img').not(callSlctr + ' .slider-box .slider-item div img').css('width', carItem_w + 'px');
				changeItemIcon(crntNum);
				stopCarouselFlg = false;
			}
		};
		var moveCarousel = function(tgtCar) {
			if(slideEft === 'slide'){
				changeSliderBtn();
				moveCarousel_slide(tgtCar);
			}else if(slideEft === 'fade'){
				moveCarousel_fade(tgtCar);
			}else if(slideEft === 'loop'){
				moveCarousel_loop(tgtCar);
			}
		};
		var timer_startCarousel = false;
		var startCarousel = function(tgtCar) {
			if(carItemNum > 1){
				if (timer_startCarousel !== false) {
					clearTimeout(timer_startCarousel);
				}
				timer_startCarousel = setTimeout(function() {
					var startFlag = true;
					if(!slideRepeat && count_slideNum >= carItemNum){
						startFlag = false;
					}
					if(startFlag){
						if(crntNum === (carItemNum - 1)){
							crntNum = 0;
						}else{
							crntNum = crntNum + 1;
						}
						push_sliderBtn = 'auto';
						count_slideNum = count_slideNum + 1;
						moveCarousel(tgtCar);
						startCarousel($(callSlctr + ' .slider-box'));
					}
				}, waitSec * 1000);
			}
		};
		var flickSlide = function(obj, sttX, stpX){
			if(startX != 0 && stopX != 0){
				if(sttX < stpX){
					if(slideEft === 'slide'){
						if(crntNum !== 0){$(callSlctr + ' .slider-btn-prev').click();}
					}else{
						$(callSlctr + ' .slider-btn-prev').click();
					}
				}else{
					if(slideEft === 'slide'){
						if(crntNum < carItemNum - 1){$(callSlctr + ' .slider-btn-next').click();}
					}else{
						$(callSlctr + ' .slider-btn-next').click();
					}
				}
			}
			startX = 0;
			stopX = 0;
		};
		var startX = 0;
		var stopX = 0;
		var touchHandler = function(thisObj, e){
			var eObj = e;
			var eType = eObj.type;
			var touch = eObj.originalEvent.changedTouches[0];
			if(eType === 'touchstart'){
				startX = Math.ceil(touch.pageX);
			}
			if(eType === 'touchmove' || eType === 'touchend'){
				stopX = Math.ceil(touch.pageX);
			}
			if(eType === 'touchend'){
				if(Math.abs(startX - stopX) > 30){
					flickSlide(thisObj, startX, stopX);
					return false;
				}
			}
		};
		var setTouchHandler = function(tgtObj){
			$(tgtObj).each(function() {
				$(this).on('touchstart', function(e){
					touchHandler($(this), e);
				});
				$(this).on('touchmove', function(e){
					touchHandler($(this), e);
				});
				$(this).on('touchend', function(e){
					touchHandler($(this), e);
				});
			});
		};
		var setItem_ary = function(){
			setItems = new Array();
			$(callSlctr + ' .slider-item').each(function() {
				var itemHtml = $(this).html();
				setItems.push(itemHtml);
			});
		};
		var judgeTouchEvent = function(){
			return ('ontouchstart' in window);
		};
		/*
		var searchDV_rtn = function(){
			var thisUA = navigator.userAgent.toLowerCase();
			var strDev = 'DV_pc';
			if(thisUA.indexOf("ipod") != -1){strDev = 'DV_spn';
			}else if(thisUA.indexOf("iphone") != -1){strDev = 'DV_spn';
			}
			if(thisUA.indexOf("ipad") != -1){strDev = 'DV_tab';
			}else if(thisUA.indexOf("android") != -1){
				if(thisUA.indexOf("mobile") != -1){strDev = 'DV_spn';
				}else{strDev = 'DV_tab';
				}
			}
			return strDev;
		};
		*/
		var prepareLoop_LessThan5sheets = function(){
			if((5 / actualItemNum) > 1){
				var loopNum = Math.floor(5/actualItemNum);
				var aryAddObj = new Array();
				for (var i = 0; i < loopNum; i++) {
					for (var j = 0; j < actualItemNum; j++) {
						var cloneObj = $(callSlctr + ' .slider-item:eq(' + j + ')').clone();
						aryAddObj.push(cloneObj);
					}
				}
				for (var i = 0; i < aryAddObj.length; i++) {
					var addObj = aryAddObj[i];
					$(callSlctr + ' .slider-box').append(addObj);
				}
			}
		};
		var resetCarousel = function(){
			stopCarouselFlg = true;
			if(carItemNum <= 1){
				$(callSlctr + ' .slider-item').css('left', '0px');
				$(callSlctr + ' .icon-area').css('display', 'none');
				$(callSlctr + ' .slider-btn').css('display', 'none');
			}else if(carItemNum >= 2){
				crntNum = 0;
				count_slideNum = 1;
				if(slideEft === 'slide'){
					changeSliderBtn();
				}
				$(callSlctr + ' .slider-box').finish();
				$(callSlctr + ' .slider-item').finish();
				startCarousel($(callSlctr + ' .slider-box'));
			}
			stopCarouselFlg = false;
		};
		var loadFunc = function(){
			touchEventBool = judgeTouchEvent();
			// strDevice = searchDV_rtn();
		};
		var timer_slider = false;
		var resizeFunc = function(){
			if (timer_slider !== false) {
				clearTimeout(timer_slider);
			}
			timer_slider = setTimeout(function() {
				setCarousel();
				resetCarousel();
			}, 200);
		};
		var sliderBox_h = 0;
		var count_retry = 0;
		var timer_retryFunc = false;
		var retryFunc = function(){
			if (timer_retryFunc !== false) {
				clearTimeout(timer_retryFunc);
			}
			timer_retryFunc = setTimeout(function() {
				setCarousel();
				sliderBox_h = $(callSlctr + ' .slider-box').height();
				if(sliderBox_h > retryHeight){
					$(callSlctr + ' .slider-nolist').css('display', 'none');
					setCarousel();
					$(callSlctr + ' .slider-wrap').animate({
						'opacity': 1
					}, slideSpd * 1000);
					resetCarousel();
				}else{
					if(count_retry < retryNum){
						retryFunc();
						count_retry = count_retry + 1;
					}else{
						$(callSlctr + ' .slider-wrap').css('display', 'none');
						$(callSlctr + ' .slider-nolist').animate({
							'opacity': 1
						}, slideSpd * 1000);
					}
				}
			}, retrySec * 1000);
		};
		actualItemNum = $(callSlctr + ' .slider-item').length;
		if(slideEft === 'loop' && actualItemNum < 5 && actualItemNum > 1){
			prepareLoop_LessThan5sheets();
		}

		setItemIcon();
		setItem_ary();
		carItemNum = setItems.length;
		loadFunc();
		setCarousel();

		sliderBox_h = $(callSlctr + ' .slider-box').height();
		if(sliderBox_h > retryHeight){
			$(callSlctr + ' .slider-wrap').animate({
				'opacity': 1
			}, slideSpd * 1000);
			resetCarousel();
		}else{
			$(callSlctr + ' .slider-nolist').css({
				'opacity': 0,
				'display': 'block'
			});
			retryFunc();
		}
		$(callSlctr + ' .slider-btn-prev').on('click', function(){
			if(crntNum === 0){
				crntNum = carItemNum - 1;
			}else{
				crntNum = crntNum - 1;
			}
			$(callSlctr + ' .slider-box').finish();
			$(callSlctr + ' .slider-item').finish();
			push_sliderBtn = 'prevBtn';
			count_slideNum = crntNum + 1;
			moveCarousel($(callSlctr + ' .slider-box'));
			startCarousel($(callSlctr + ' .slider-box'));
		});
		$(callSlctr + ' .slider-btn-next').on('click', function(){
			if(crntNum === (carItemNum - 1)){
				crntNum = 0;
			}else{
				crntNum = crntNum + 1;
			}
			$(callSlctr + ' .slider-box').finish();
			$(callSlctr + ' .slider-item').finish();
			push_sliderBtn = 'nextBtn';
			count_slideNum = crntNum + 1;
			moveCarousel($(callSlctr + ' .slider-box'));
			startCarousel($(callSlctr + ' .slider-box'));
		});
		$(callSlctr + ' .icon-item').on('click', function(){
			crntNum = $(this).index(callSlctr + ' .icon-item');
			$(callSlctr + ' .slider-box').finish();
			$(callSlctr + ' .slider-item').finish();
			push_sliderBtn = 'iconBtn';
			count_slideNum = crntNum + 1;
			moveCarousel($(callSlctr + ' .slider-box'));
			startCarousel($(callSlctr + ' .slider-box'));
		});
		document.addEventListener('visibilitychange', function(){
			if(document.visibilityState === 'visible'){
				startCarousel($(callSlctr + ' .slider-box'));
			}else{
				clearTimeout(timer_startCarousel);
			}
		}, false);
		if(touchEventBool){
			if(carItemNum > 1){setTouchHandler('.slider-area');}
			/*if(strDevice === 'DV_pc'){
				$(window).on('resize',function(){resizeFunc();});
			}else{
				$(window).on('orientationchange',function(){resizeFunc();});
			}
	    }else{
	        $(window).on('resize',function(){resizeFunc();});*/
	    }
	    var currentWidth = window.innerWidth;
	    $(window).on('resize', function() {
	    	if (currentWidth !== window.innerWidth) {
	    		currentWidth = window.innerWidth;
	    		resizeFunc();
	    	}
	    });

		if(typeof rollOverCss !== 'function' && touchEventBool === false){
			$(callSlctr).on('mouseover', '.ro_css', function(){
				$.listCommonFnc.rollOverCss($(this),'mouseover');
			});
			$(callSlctr).on('mouseout', '.ro_css', function(){
				$.listCommonFnc.rollOverCss($(this),'mouseout');
			});
		}
		if(typeof rollOverImg !== 'function' && touchEventBool === false){
			$(callSlctr).on('mouseover', 'img.ro_img', function(){
				$.listCommonFnc.rollOverImg($(this),'mouseover');
			});
			$(callSlctr).on('mouseout', 'img.ro_img', function(){
				$.listCommonFnc.rollOverImg($(this),'mouseout');
			});
		}
		return(this);
	};
	$.fn.listCommonFnc = function(options){
		var defaults = {
		};
		var setting = $.extend(defaults, options);
		$.listCommonFnc = {};
		$.listCommonFnc.rollOverCss = function(thisObj,act){
			if(act === 'mouseover'){
				$(thisObj).addClass('rollover');
			}else if(act === 'mouseout'){
				$(thisObj).removeClass('rollover');
			}
		};
		$.listCommonFnc.rollOverImg = function(thisObj,act){
			if(act === 'mouseover'){
				$(thisObj).attr("src",$(thisObj).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
			}else if(act === 'mouseout'){
				$(thisObj).attr("src",$(thisObj).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
			}
		};
		return(this);
	};
	$('body').listCommonFnc({
	});
})(jQuery);

////////////////////
