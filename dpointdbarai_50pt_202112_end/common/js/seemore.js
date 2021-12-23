/****************************
* seemore.js
* version:2.00
* jQuery plugin:Supports jQuery v3 or above.
* Release:2018.08
* License:To use under the terms of the MIT License.
* Copyright 2018 m.t
****************************/
(function($){
	$.fn.seemore = function(options){
		var defaults = {
			flag_fade: true,	// true or false
			speed_fade: 0.3,	// second
            plus_num: 3         // int
		};
		var setting = $.extend(defaults, options);
		var callSlctr = '#' + $(this)[0].id;
        var flagFade = setting.flag_fade;
        var speedFade = setting.speed_fade;
        var plusNum = setting.plus_num;
        var displayItem = function(saveNo, dispNo){
            for (var i = saveNo; i < dispNo; i++) {
				var tgtObj = $(callSlctr + ' .moreitem:eq(' + i + ')');
                if(flagFade){
					$(tgtObj).removeClass('nodisp');
					$(tgtObj).animate({
						'opacity': 1
					}, speedFade * 1000, function(){
					});
                }else{
					$(tgtObj).removeClass('nodisp').css('opacity', 1);
                }
            }
        };
        if(plusNum > 0){
            var itemNum = $(callSlctr + ' .moreitem').length;
			$(callSlctr + ' .moreitem').addClass('nodisp');
            var saveNum = 0;
            displayItem(saveNum, plusNum);
            saveNum = plusNum;
            if(saveNum >= itemNum){
                $(callSlctr + ' .btn_more').remove();
            }
            $(callSlctr + ' .btn_more').on('click', function(){
                var dispNum = saveNum + plusNum;
                if(saveNum < itemNum){
                    displayItem(saveNum, dispNum);
                    saveNum = dispNum;
                }
                if(dispNum >= itemNum){
                    $(this).remove();
                }
                // tanabe add start
                dataLayer.push(
                    {'click_id': 'dpc_common_btnmore'}
                );
                // tanabe add end
            });
        }
		return(this);
	};
})(jQuery);
////////////////////
