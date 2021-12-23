$(window).on('load',function () {
	//フローティングバナー対応
	// アプリの場合
	if (window.navigator.userAgent.indexOf('dpointApp') != -1) {
		$('footer').removeClass('pb150pApp');
		$('#load_back_button_poinko').addClass('pb150pApp');
	// アプリ以外の場合
	} else {
		$('footer').addClass('pb150pApp');
		$('#load_back_button_poinko').removeClass('pb150pApp');
	}
});