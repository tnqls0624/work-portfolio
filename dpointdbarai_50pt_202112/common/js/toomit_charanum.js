// JavaScript Document
/****************************
* toomit_charanum.js
* version:2.00
* jQuery plugin:Supports jQuery v3 or above.
* Release:2019.01
* License:To use under the terms of the MIT License.
* Copyright 2018 m.t
****************************/

(function($){
	$.fn.toomitCharanum = function(options){
		var defaults = {
			speed_fade: 0.5,		// second
			target_slctr: '.lmtchara',	// selector
			replace_text: '...',	// str
			maxtext_num: 12			// int(str)
		};
		var setting = $.extend(defaults, options);
		var callSlctr = '#' + $(this)[0].id;
		var speedFade = setting.speed_fade;
		var targetSlctr = setting.target_slctr;
		var replaceText = setting.replace_text;
		var maxtextNum = setting.maxtext_num;
		var ary_slctr = targetSlctr.replace(/ |\s/g, '').split(',');
		var ary_repText = replaceText.replace(/ |\s/g, '').split(',');
		var ary_maxNum = maxtextNum.replace(/ |\s/g, '').split(',');
		var setAryNum = function(aryOpt){
			var countNum = 0;
			for (var i = 0; i < aryOpt.length; i++) {
				if(aryOpt[i] !== ''){
					countNum = countNum + 1;
				}
			}
			return countNum;
		};
		var slctrNum = setAryNum(ary_slctr);
		var setAryOption = function(aryOpt){
			var tempAry = [];
			for (var i = 0; i < aryOpt.length; i++) {
				if(aryOpt[i] !== ''){
					if(aryOpt[i].indexOf('com') !== -1){
						aryOpt[i] = aryOpt[i].replace(/com/g, ',');
					}
					if(aryOpt[i].indexOf('apo') !== -1){
						aryOpt[i] = aryOpt[i].replace(/apo/g, '\'');
					}
					tempAry.push(aryOpt[i]);
				}
			}
			var rtnAry = [];
			var tempVal = '';
			for (var i = 0; i < tempAry.length; i++) {
				tempVal = tempAry[i];
				rtnAry.push(tempAry[i]);
			}
			if(rtnAry.length < slctrNum){
				var loopNum = slctrNum - rtnAry.length;
				for (var i = 0; i < loopNum; i++) {
					rtnAry.push(tempVal);
				}
			}else if(rtnAry.length > slctrNum){
				var loopNum = rtnAry.length - slctrNum;
				for (var i = 0; i < loopNum; i++) {
					rtnAry.pop();
				}
			}
			return rtnAry;
		};
		ary_slctr = setAryOption(ary_slctr);
		ary_repText = setAryOption(ary_repText);
		ary_maxNum = setAryOption(ary_maxNum);
		var executeSetLmtchara = function(){
			for (var i = 0; i < ary_slctr.length; i++) {
				var tgtSlctrObj = $(ary_slctr[i], callSlctr);
				$(tgtSlctrObj).each(function(){
					setLmtchara($(this), i);
				});
			}
		};
		var setLmtchara = function(obj, indNo){
			var prepText = $(obj).text().replace(/\t|\n/g,'');
			var prepHtml = $(obj).html().replace(/\t|\n/g,'').replace(/<br \/>/g,/<br>/);
			var maxNum_ind = Number(ary_maxNum[indNo]);
			var repText_ind = ary_repText[indNo];
			if(prepText.length > maxNum_ind){
				var ary_phrase = prepHtml.split(/<br>/);
				var count_str = 0;
				var surplusAryNo = 0;
				for (var i = 0; i < ary_phrase.length; i++) {
					var check_str = count_str + ary_phrase[i].length;
					if(check_str <= maxNum_ind){
						count_str = check_str;
					}else{
						surplusAryNo = i;
						break;
					}
				}
				var surplusStrNum = 0;
				if(surplusAryNo > 0){
					surplusStrNum = maxNum_ind - count_str;
				}
				var beforeHtml = '';
				for (var i = 0; i < ary_phrase.length; i++) {
					if(surplusAryNo === 0 && i === 0){
						beforeHtml = ary_phrase[i].slice(0, maxNum_ind) + repText_ind;
					}else{
						if(surplusAryNo > i){
							beforeHtml = beforeHtml + ary_phrase[i] + '<br />';
						}else if(surplusAryNo === i){
							beforeHtml = beforeHtml + ary_phrase[i].slice(0, surplusStrNum) + repText_ind;
						}
					}
				}
				$(obj).html(beforeHtml);
			}else{
				$(obj).html(prepHtml);
			}
			$(obj).fadeIn(speedFade * 1000);
		};
		executeSetLmtchara();
		return(this);
	};
})(jQuery);

////////////////////
