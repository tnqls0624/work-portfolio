var dpoint = dpoint || {};
dpoint.common = dpoint.common || {};
dpoint.common.module = dpoint.common.module || {};
dpoint.common.module.defineCode = dpoint.common.module.defineCode || {};
// 正常終了
dpoint.common.module.defineCode.success = "1000";
dpoint.common.module.defineCode.successReturn = "0100";
// バックアップセンタ折り返し
dpoint.common.module.defineCode.buckupCenter = "1005";
dpoint.common.module.defineCode.buckupCenterReturn = "0200";
// ユーザ認証失敗
dpoint.common.module.defineCode.authenticationFailure = "10A1";
dpoint.common.module.defineCode.authenticationFailureReturn = "0300";
// 未認証
dpoint.common.module.defineCode.unauthenticated = "10A3";
dpoint.common.module.defineCode.unauthenticatedReturn = "0301";
// ポイント情報取得不可(ユーザエラー)
dpoint.common.module.defineCode.pointInfoAcquisitionUser = "10EN";
dpoint.common.module.defineCode.pointInfoAcquisitionUserReturn = "0400";
// ポイント情報取得不可(システムエラー)
dpoint.common.module.defineCode.pointInfoAcquisitionSystem = "10EO";
dpoint.common.module.defineCode.pointInfoAcquisitionSystemReturn = "0401";
// dポイントクラブ非会員(BPC以外)アクセスエラー
dpoint.common.module.defineCode.nonMemberAccess = "10EP";
dpoint.common.module.defineCode.nonMemberAccessReturn = "0500";
// dポイントクラブ非会員（ビジプレ会員）エラー
dpoint.common.module.defineCode.nonMemberBpAccess = "10EZ";
dpoint.common.module.defineCode.nonMemberBpAccessReturn = "0501";
// MoBillsメンテ中エラー
dpoint.common.module.defineCode.mobills = "10EQ";
dpoint.common.module.defineCode.mobillsReturn = "0600";
// ユーザ情報取得エラー
dpoint.common.module.defineCode.userInfoAcquisition = "10ES";
dpoint.common.module.defineCode.userInfoAcquisitionReturn = "0700";
// パラメータエラー
dpoint.common.module.defineCode.parameter = "8013";
dpoint.common.module.defineCode.parameterReturn = "0701";
// タイムアウト
dpoint.common.module.defineCode.timeout = "";
dpoint.common.module.defineCode.timeoutReturn = "0800";
// タイムアウト以外
dpoint.common.module.defineCode.notTimeout = "";
dpoint.common.module.defineCode.notTimeoutReturn = "0801";
// 不正APIレスポンス
dpoint.common.module.defineCode.fraudApiResponse = "";
dpoint.common.module.defineCode.fraudApiResponseReturn = "0900";

// リファラエラー
dpoint.common.module.defineCode.referer = "9901";
dpoint.common.module.defineCode.refererReturn = "0302";

// パラメータエラー(認証情報取得)
dpoint.common.module.defineCode.authparameter = "9903";
// ユーザ認証失敗(認証情報取得)
dpoint.common.module.defineCode.authenticationFailureAuth = "5010";

dpoint.common.module.defineCode.authSuccess = "0000";
dpoint.common.module.defineCode.authStatusThreeG = "5";
dpoint.common.module.defineCode.lineStatusLineAuth = "1";
dpoint.common.module.defineCode.lineStatusDocomoIDAuth = "2";
dpoint.common.module.defineCode.lineStatusPersonFirst = "3";
dpoint.common.module.defineCode.lineStatusPerson = "4";
dpoint.common.module.defineCode.lineStatusNotAuthThreeG = "5";

// 認証状態取得APIリトライ
dpoint.common.module.defineCode.authStatusRetry = "retry";
dpoint.common.module.defineCode.authStatusMaxRetry = 1;

// 回線契約判定
dpoint.common.module.defineCode.lineDivDocomo = "1";

dpoint.common.module.mapping = dpoint.common.module.mapping || {};

//ポイント詳細の日本語名
dpoint.common.module.mapping.stageInfoName = {
	'001':'1stステージ',
	'002':'2ndステージ',
	'003':'3rdステージ',
	'004':'4thステージ',
	'005':'プラチナステージ'
};

//ポイント詳細の日本語略名
dpoint.common.module.mapping.stageInfoShortName = {
	'001':'1st',
	'002':'2nd',
	'003':'3rd',
	'004':'4th',
	'005':'プラチナ'
};

//ポイント詳細の日本語略名
dpoint.common.module.mapping.stageInfoImageName = {
	'001':'first',
	'002':'second',
	'003':'third',
	'004':'fourth',
	'005':'platinum'
};

//ポイント詳細の日本語略名
dpoint.common.module.mapping.stageInfoClassName = {
	'001':'st_1st',
	'002':'st_2nd',
	'003':'st_3rd',
	'004':'st_4th',
	'005':'st_pt'
};

dpoint.common.module.dpcCommon = dpoint.common.module.dpcCommon || {};

// UA情報よりPC/スマートホン(タブレット)を判定しスクリプト側にbool値を返す
// (trueであればスマートフォン(タブレット))
dpoint.common.module.dpcCommon.uaJudge = function(u) {
	if (u.indexOf("Android") != -1 || u.indexOf("iPhone") != -1 ||
			u.indexOf("iPad") != -1 || u.indexOf("Windows Phone") != -1 || 
			u.indexOf("BlackBerry") != -1) {
		return true;
	} else {
		return false;
	};
}(window.navigator.userAgent);

// UA情報よりPC(タブレット)/スマートホンを判定しスクリプト側にbool値を返す
// (trueであればスマートフォン)
dpoint.common.module.dpcCommon.uaJudgeOnlySP = function(u) {
	if (u.indexOf("Android") != -1 || u.indexOf("iPhone") != -1) {
		return true;
	} else {
		return false;
	};
}(window.navigator.userAgent);

dpoint.common.cookie = dpoint.common.cookie || {};
dpoint.common.cookie.key = dpoint.common.cookie.key || {};
// dpoint.common.cookie.key.use_select_item_order = "ORDER";
// dpoint.common.cookie.key.use_select_item_pointsum = "POINT_SUM";
dpoint.common.cookie.key.COOKIE_INFO = {
	path: "/", 
	domain: ".dpoint.jp"
};

dpoint.common.userdata = dpoint.common.userdata || {};
dpoint.common.userdata.callbacks = [];
dpoint.common.userdata.data = null;
dpoint.common.userdata.isApi = false;

dpoint.common.module = dpoint.common.module || {};
dpoint.common.module.dpcCommon = dpoint.common.module.dpcCommon || {};
dpoint.common.module.dpcCommon.callback = null;
dpoint.common.module.dpcCommon.authCheckResult = "";

dpoint.common.Const = dpoint.common.Const || {};
// dポイントクラブアプリのUA判定情報
dpoint.common.Const.appUA = 'dpointApp(';
// 認証状態のデフォルト値
dpoint.common.Const.defaultAuthStatus = '9';


// --------------------------------
// API 分岐
// --------------------------------
var auth_Check_Path = '',
	auth_Redirect_Path = '',
	dpoint_info_Path = '',
	daccount_info_Path = '',
	ptnCode = '0028';

if (location.hostname == 'dpoint.jp') {
//商用 本番　dpoint.common.Const.GET_AUTH_CHECK_URL
	auth_Check_Path = 'https://cfg.smt.docomo.ne.jp/authx/cgi/authstatus';
//商用 本番　dpoint.common.Const.GET_AUTH_REDIRECT
	auth_Redirect_Path = 'https://service.smt.docomo.ne.jp/cgi7/rl/redirect';
//商用 本番　dpoint.common.Const.GET_D_POINT_INFO_URL
	dpoint_info_Path = 'https://dpoint.jp/cgi7m/v2_0/getdpointinf';
	ptnCode = '0028';
//商用 本番　dpoint.common.Const.GET_D_ACCOUNT_INFO_URL
	daccount_info_Path = 'https://dpoint.jp/cgi7m/getdaccountinf';

} else if (location.hostname == 'stg.dpoint.jp') {
//商用 STG　dpoint.common.Const.GET_AUTH_CHECK_URL
	auth_Check_Path = 'https://cfg.smt.docomo.ne.jp/authx/cgi/authstatus';
//商用 STG　dpoint.common.Const.GET_AUTH_REDIRECT
	auth_Redirect_Path = 'https://service.smt.docomo.ne.jp/cgi7/rl/redirect';
//商用 STG　dpoint.common.Const.GET_D_POINT_INFO_URL
	dpoint_info_Path = 'https://stg.dpoint.jp/cgi7m/v2_0/getdpointinf';
	ptnCode = '0028';
//商用 STG　dpoint.common.Const.GET_D_ACCOUNT_INFO_URL
	daccount_info_Path = 'https://stg.dpoint.jp/cgi7m/getdaccountinf';

} else if (location.hostname == 've.m.dpoint.jp') {
//検証 本番　dpoint.common.Const.GET_AUTH_CHECK_URL
	auth_Check_Path = 'https://ve.m.cfg.smt.docomo.ne.jp/authx/cgi/authstatus';
//検証 本番　dpoint.common.Const.GET_AUTH_REDIRECT
	auth_Redirect_Path = 'https://ve.m.service.smt.docomo.ne.jp/cgi7/rl/redirect';
//検証 本番　dpoint.common.Const.GET_D_POINT_INFO_URL
	dpoint_info_Path = 'https://ve.m.dpoint.jp/cgi7m/v2_0/getdpointinf';
	ptnCode = '0028';
//検証 本番 dpoint.common.Const.GET_D_ACCOUNT_INFO_URL
	daccount_info_Path = 'https://dpoint.jp/cgi7m/getdaccountinf';

} else {
// 検証 STG　dpoint.common.Const.GET_AUTH_CHECK_URL
	auth_Check_Path = 'https://ve.m.cfg.smt.docomo.ne.jp/authx/cgi/authstatus';
// 検証 STG　dpoint.common.Const.GET_AUTH_REDIRECT
	auth_Redirect_Path = 'https://ve.m.service.smt.docomo.ne.jp/cgi7/rl/redirect';
// 検証 STG　dpoint.common.Const.GET_D_POINT_INFO_URL
	dpoint_info_Path = 'https://ve.m.stg.dpoint.jp/cgi7m/v2_0/getdpointinf';
	ptnCode = '0028';
// 検証 STG　dpoint.common.Const.GET_D_ACCOUNT_INFO_URL
	daccount_info_Path = 'https://stg.dpoint.jp/cgi7m/getdaccountinf';
	
}

dpoint.common.Const.GET_AUTH_CHECK_URL = auth_Check_Path;
dpoint.common.Const.GET_AUTH_REDIRECT = auth_Redirect_Path + "?rl=" + encodeURIComponent(location.href.replace(/\#.*$/, '').replace(/\?.*$/, '')) + '&' + (new Date().getTime());
dpoint.common.Const.GET_D_POINT_INFO_URL = dpoint_info_Path;
dpoint.common.Const.GET_D_ACCOUNT_INFO_URL = daccount_info_Path;
dpoint.common.Const.DISPLAY_STRING_NO_VALUE = '---';
dpoint.common.Const.MAX_DISPLAY_POINT_VALUE_TOP_PAGE = 999999;
dpoint.common.Const.MIN_DISPLAY_POINT_VALUE_TOP_PAGE = -999999;
dpoint.common.Const.TIMEOUT_GET_D_ACCOUNT_INFO = 3000;
dpoint.common.accountdata = dpoint.common.accountdata || {};
dpoint.common.accountdata.data = null;
dpoint.common.accountdata.common = null;


// --------------------------------
// 普遍的な共通関数定義
// --------------------------------

// stringチェック
dpoint.common.module.dpcCommon.isString = function(data) {
	if (typeof data !== 'string') {
		return false;
	} else {
		return true;
	}
};

// 半角数チェック
dpoint.common.module.dpcCommon.isHalfNumber = function(data) {
	if (!dpoint.common.module.dpcCommon.isString(data)) {
		return false;
	} else if (data.match ( /[^-?0-9]+/ )) {
		return false;
	} else {
		return true;
	}
};

// 半角英数チェック
dpoint.common.module.dpcCommon.isAlphanumeric = function(data) {
	if (!dpoint.common.module.dpcCommon.isString(data)) {
		return false;
	} else if (data.match ( /[^0-9a-zA-Z_]+/ )) {
		return false;
	} else {
		return true;
	}
};

// YYYY-MM型チェック
dpoint.common.module.dpcCommon.isYyyyMm = function(data) {
	if (!dpoint.common.module.dpcCommon.isString(data)) {
		return false;
	} else if (data.match(/^\d{4}\-\d{2}$/)) {
		return true;
	} else {
		return false;
	}
};

// YYYY-MM-DD型チェック
dpoint.common.module.dpcCommon.isYyyyMmDd = function(data) {
	if (!dpoint.common.module.dpcCommon.isString(data)){
		return false;
	} else if (data.match (/^\d{4}\-\d{2}\-\d{2}$/)) {
		return true;
	} else {
		return false;
	}
};

// 数値かどうかを判定する関数
var isNumber = function(value) {
	if (typeof(value) != 'number' && typeof(value) != 'string') {
		return false;
	} else {
		return (value == parseFloat(value) && isFinite(value));
	}
};

// ゼロではないかを判定する関数
var isNotZero = function(value) {
	if (isNumber(value)) {
		var dummy = parseInt(value);
		return (dummy != 0);
	}
	return false;
};

// 数値をフォーマットする関数
var formatNumberDPoint = function(number) {
	var theRetValue = dpoint.common.Const.DISPLAY_STRING_NO_VALUE;
	if (isNumber(number)) {
		// ポイントが MAX_DISPLAY_POINT_VALUE_TOP_PAGE よりも大きい場合は丸める
		var value = number;
		if (number > dpoint.common.Const.MAX_DISPLAY_POINT_VALUE_TOP_PAGE) {
			value = dpoint.common.Const.MAX_DISPLAY_POINT_VALUE_TOP_PAGE;
		}
		// ポイントが MIN_DISPLAY_POINT_VALUE_TOP_PAGE よりも小さい場合は丸める
		if (number < dpoint.common.Const.MIN_DISPLAY_POINT_VALUE_TOP_PAGE) {
			value = dpoint.common.Const.MIN_DISPLAY_POINT_VALUE_TOP_PAGE;
		}
		theRetValue = String(value).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	}
	return theRetValue;
};


// *********************************
// ポイント情報取得 実行関数
// *********************************
// dポイント取得時に認証状態を取得しないUAの正規表現定義（必ず()で囲う）
// ・iPhone、iPad、iPod touchのiOS12以上
// ・version12以上のMac OS
var _noneAuthUA = [
	'((iPod touch|iPhone|iPad))',
	'(Macintosh)'
].join('|');

// 認証情報取得成功フラグ	
var succeedResponseAuthCheckFlg = false;

dpoint.common.module.dpcCommon.getPointInfo = function(callback) {
	dpoint.common.module.dpcCommon.callback = callback;
	// dポイントクラブアプリ、iOS12以上・・・などからの特定アクセスの場合はポイント情報取得を行う
	if(window.navigator.userAgent.indexOf(dpoint.common.Const.appUA) >= 0 ||
		window.navigator.userAgent.match(new RegExp(_noneAuthUA, 'i'))) {
		// ポイント情報の取得を行う
		dpoint.common.module.dpcCommon.getPointInfoMain(dpoint.common.Const.defaultAuthStatus);
	} else {
		// 認証状態取得APIを行う
		dpoint.common.module.dpcCommon.authCheck();
	}
};

// *********************************
// 認証情報 取得関数
// @param authdomain 認証情報取得ドメイン
// @param lineauth_flg 回線認証フラグ
// *********************************
dpoint.common.module.dpcCommon.authCheck = function() {

	$.ajax({
		url: dpoint.common.Const.GET_AUTH_CHECK_URL,
		data: {
			authdomain: 2,
			lineauth_flg: 1
		},
		timeout: 10000,
		cache: false,
		jsonpCallback: 'authCheckCallback',
		dataType: 'JSONP'
	}).done(function(data, status, xhr) {
		// 認証状態の取得に失敗した場合
		if (!succeedResponseAuthCheckFlg) {
			// エラー
			dpoint.common.module.dpcCommon.errorResponse(xhr,dpoint.common.module.dpcCommon.authCheckResult);
		}
	}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
		// 認証状態取得APIのリトライ回数を初期化
		$.removeCookie(dpoint.common.module.defineCode.authStatusRetry, dpoint.common.cookie.key.COOKIE_INFO);
		// HTTPエラー
		dpoint.common.module.dpcCommon.errorResponse(XMLHttpRequest,dpoint.common.module.defineCode.notTimeoutReturn);
	});
};

// *********************************
// 認証情報 コールバック関数
// @data 認証情報
// *********************************
function authCheckCallback(data) {
	if (!!data) {
		// 認証情報取得 成功時
		if (data["result_code"] === dpoint.common.module.defineCode.authSuccess && !!data["response"]) {
			// 3G回線の場合
			if (!!data["response"]["auth_info"] && data["response"]["auth_info"]["auth_status"] == dpoint.common.module.defineCode.authStatusThreeG) {
				// 認証状態取得APIのリトライ回数を取得
				var retry = $.cookie(dpoint.common.module.defineCode.authStatusRetry);;
				var retryCount = -1;
				if (typeof retry === "undefined") {
					retryCount = 0;
				} else {
					retryCount = Number(retry);
					// 認証状態取得APIのリトライ回数をインクリメント
					retryCount++;
				}

				// 認証状態取得APIのリトライ回数が、最大リトライ回数よりも小さい場合
				if (retryCount < dpoint.common.module.defineCode.authStatusMaxRetry) {
					// 認証状態取得APIのリトライ回数を設定
					$.cookie(dpoint.common.module.defineCode.authStatusRetry, String(retryCount), dpoint.common.cookie.key.COOKIE_INFO);
					// リダイレクト
					succeedResponseAuthCheckFlg = true;
					location.replace(dpoint.common.Const.GET_AUTH_REDIRECT);

				// 最大リトライ回数を超えた場合
				} else {
					// 認証状態取得APIのリトライ回数を初期化
					$.removeCookie(dpoint.common.module.defineCode.authStatusRetry, dpoint.common.cookie.key.COOKIE_INFO);
					// 未認証エラー 認証状態のデフォルト値でポイント情報の取得を行う
					succeedResponseAuthCheckFlg = true;
					dpoint.common.module.dpcCommon.getPointInfoMain(dpoint.common.Const.defaultAuthStatus);
				}
				return;

			// 3G回線以外の場合
			} else {
				// 認証状態取得APIのリトライ回数を初期化
				$.removeCookie(dpoint.common.module.defineCode.authStatusRetry, dpoint.common.cookie.key.COOKIE_INFO);

				// リダイレクトURLがある場合
				if (!!data["response"]["redirect_url"]) {
					var authRedirectUrl = data["response"]["redirect_url"];
					// 返却値：書き換え	
					authRedirectUrl = authRedirectUrl.replace(/^https:\/\/dpoint.jp/, '');
					// 回線認証 取得関数を実行
					succeedResponseAuthCheckFlg = true;
					dpoint.common.module.dpcCommon.lineCheck(authRedirectUrl);

				// リダイレクトURLがない場合
				} else {
					// 認証失敗
					dpoint.common.module.dpcCommon.authCheckResult = dpoint.common.module.defineCode.unauthenticatedReturn;
				}
			}

		// 認証情報取得 失敗時
		} else {
			// 認証状態取得APIのリトライ回数を初期化
			$.removeCookie(dpoint.common.module.defineCode.authStatusRetry, dpoint.common.cookie.key.COOKIE_INFO);

			if (data["result_code"] === dpoint.common.module.defineCode.referer) {
				// リファラエラー
				dpoint.common.module.dpcCommon.authCheckResult = dpoint.common.module.defineCode.refererReturn;

			} else if (data["result_code"] === dpoint.common.module.defineCode.authparameter) {
				// パラメータエラー
				dpoint.common.module.dpcCommon.authCheckResult = dpoint.common.module.defineCode.parameterReturn;

			} else if (data["result_code"] === dpoint.common.module.defineCode.authenticationFailureAuth) {
				// ユーザ認証失敗
				dpoint.common.module.dpcCommon.authCheckResult = dpoint.common.module.defineCode.authenticationFailureReturn;
			} else {
				// 認証失敗
				dpoint.common.module.dpcCommon.authCheckResult = dpoint.common.module.defineCode.unauthenticatedReturn;
			}
		}
	}
}

// *********************************
// 回線認証情報 取得関数
// @param redirectUrl 認証情報リダイレクトURL
// *********************************
dpoint.common.module.dpcCommon.lineCheck = function(redirectUrl) {

	// 引数で受け取った認証状態取得(コーポレートサイト Mydocomo)URLをドメインに応じて変更する
	// stgの場合
	if(location.hostname == 'stg.dpoint.jp'){
		// パラメータを削除する
		redirectUrl = redirectUrl.replace(/^https:\/\/dpoint.jp/, '');
	}

	$.ajax({
		url: redirectUrl,
		dataType: 'JSON',
		cache: false,
		timeout: 10000
	}).done(function(data, status, xhr){
		var authStatus = "";

		if (!!data) {

			// 結果コード成功の場合
			if (data["result_code"] === dpoint.common.module.defineCode.authSuccess &&
			   !!data["response"] &&
			   !!data["response"]["auth_info"] &&
			   data["response"]["auth_info"]["auth_status"]) {

				authStatus = data["response"]["auth_info"]["auth_status"];

				// 認証済の場合
				if (authStatus == dpoint.common.module.defineCode.lineStatusLineAuth || 
				   authStatus == dpoint.common.module.defineCode.lineStatusDocomoIDAuth || 
				   authStatus == dpoint.common.module.defineCode.lineStatusPersonFirst || 
				   authStatus == dpoint.common.module.defineCode.lineStatusPerson ||
				   authStatus == dpoint.common.module.defineCode.lineStatusNotAuthThreeG) {

					// ポイント情報の取得を行う
					dpoint.common.module.dpcCommon.getPointInfoMain(authStatus);

				// 認証失敗の場合	
				} else {
					dpoint.common.module.dpcCommon.errorResponse(xhr,dpoint.common.module.defineCode.unauthenticatedReturn);
				}

			// 結果コード失敗の場合
			} else if (data["result_code"] === dpoint.common.module.defineCode.authparameter) {
				// パラメータエラー
				dpoint.common.module.dpcCommon.errorResponse(xhr,dpoint.common.module.defineCode.parameterReturn);		
			} else if (data["result_code"] === dpoint.common.module.defineCode.authenticationFailureAuth) {
				// ユーザ認証失敗
				dpoint.common.module.dpcCommon.errorResponse(xhr,dpoint.common.module.defineCode.authenticationFailureReturn);
			} else {
				// 認証失敗
				dpoint.common.module.dpcCommon.errorResponse(xhr,dpoint.common.module.defineCode.unauthenticatedReturn);
			}
		}

	}).fail(function(XMLHttpRequest, textStatus, errorThrown){
		// HTTPエラー
		dpoint.common.module.dpcCommon.errorResponse(XMLHttpRequest,dpoint.common.module.defineCode.notTimeoutReturn);
		
	});
};

// *********************************
// エラー時コールバック関数
// @param xhr
// @param resultCode
// *********************************
dpoint.common.module.dpcCommon.errorResponse = function(xhr,resultCode) {
	var isAfterTransitionPeriod = true;
	var responseData = null;
	responseData = {
		"common": {
			"http_status":String(xhr.status),
			"result_code":resultCode,
			"transition_status":String(isAfterTransitionPeriod),
			"server_date":new Date(xhr.getResponseHeader('Date'))
		}
	};
	dpoint.common.module.dpcCommon.callback(responseData);
};


// *********************************
// ポイント情報 取得・表示関数
// @param authStatus
// *********************************
dpoint.common.module.dpcCommon.getPointInfoMain = function(authStatus) {
	$url = dpoint.common.Const.GET_D_POINT_INFO_URL;
	var responseData = null;
	var d_pt_memb_div = "";

	try{
		$.ajax({
				url: $url,
				data: {
					ptn_code: ptnCode
				},		
				timeout: 10000,
				cache: false,
				dataType: 'JSON'
			}).done(function(data, status, xhr){

				var isAfterTransitionPeriod = true;
				// サーバー時刻
				var serverDate = new Date(xhr.getResponseHeader('Date'));
				if (data.common.result_code == dpoint.common.module.defineCode.success) {
					// 正常終了の場合
					// listデータを先に取得する
					var invalidDPtInfoList = [];
					var dStgHstInfoList = [];
					var lmtDPtInfoList = [];
					var ptInfoList = [];
					var stgInfoList = [];

					// 共通dポイント情報リスト
					for (var ptdiv = 0; ptdiv < 2; ptdiv++) {
						for (var i = 0; i < data.data.d_pt_info.com_d_pt_info_list.length; i++) {
							var ptInfo = null;
							ptInfo = data.data.d_pt_info.com_d_pt_info_list[i];
							if (ptdiv == ptInfo.d_pt_div) {
								ptInfoList.push(ptInfo);
								break;
							}
						}
						if (ptdiv != ptInfoList.length - 1) {
							ptInfoList.push({"d_pt_div":"","total_value_d_pt":"","d_pt_num":"","rep_d_pt_info_type_list":[{"d_pt": "","limit_d_pt": ""}]});
						}
					}

					// 共通ステージ情報リスト
					for (var stgdiv = 0; stgdiv < 3; stgdiv++) {
						for (var i = 0; i < data.data.stg_info.com_stg_info_list.length; i++) {
							var stgInfo = null;
							stgInfo = data.data.stg_info.com_stg_info_list[i];
							if (stgdiv == stgInfo.stg_div) {
								stgInfoList.push(stgInfo);
								break;
							}
						}
						if (stgdiv != stgInfoList.length - 1) {
							stgInfoList.push({"stg_div":stgdiv,"stg_code":"","stg_get_pt":"","stg_duration_month":"","stg_start_date":"","stg_start_judge":"","stg_end_judge":"","up_stg_code":"","up_stg_pt":""});
						}
					}

					// 失効dポイント情報リスト（48か月）
					var crnt_invalid_d_pt = "";
					var crnt_invalid_d_pt_period = "";
					for (var i = 0; i < Number(ptInfoList[0].d_pt_num); i++) {
						var array = {"invalid_d_pt":ptInfoList[0].rep_d_pt_info_type_list[i].d_pt,
									"invalid_d_pt_period":ptInfoList[0].rep_d_pt_info_type_list[i].limit_d_pt
						};

						if (i==0) {
							// 直近
							crnt_invalid_d_pt = ptInfoList[0].rep_d_pt_info_type_list[i].d_pt;
							crnt_invalid_d_pt_period = ptInfoList[0].rep_d_pt_info_type_list[i].limit_d_pt;
						}
						invalidDPtInfoList.push(array);
					}

					// dステージ履歴情報リスト（直近１年間） 
					for (var i = 0; i < Number(data.data.stg_info.d_stg_hist_info_cnt); i++) {
						var array = {"d_stg_code":data.data.stg_info.d_stg_hist_info_list[i].d_stg_code,
									"d_stg_start_date":data.data.stg_info.d_stg_hist_info_list[i].d_stg_star_date,
									"d_stg_end_date":data.data.stg_info.d_stg_hist_info_list[i].d_stg_end_date
						};
						dStgHstInfoList.push(array);
					}

					// 期間限定dポイント情報リスト
					var first_lmt_d_pt = "";
					var first_lmt_d_pt_end_date = "";
					for (var i = 0; i < Number(ptInfoList[1].d_pt_num); i++) {
						var array = {"lmt_d_pt_num":ptInfoList[1].rep_d_pt_info_type_list[i].d_pt,
									"lmt_d_pt_period":ptInfoList[1].rep_d_pt_info_type_list[i].limit_d_pt
						};

						if (i==0) {
							// 直近
							first_lmt_d_pt = ptInfoList[1].rep_d_pt_info_type_list[i].d_pt;
							first_lmt_d_pt_end_date = ptInfoList[1].rep_d_pt_info_type_list[i].limit_d_pt;
						}
						lmtDPtInfoList.push(array);
					}

					// d_pt_memb_div廃止に伴う整合性調整
					d_pt_memb_div = "1";

					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.successReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						},
						"data": {
							"myd_nickname": data.data.myd_nickname,
							"user_pt_info": {
								"avail_pt": data.data.d_pt_info.total_d_pt,
								"pt_period": data.data.d_pt_info.invalidate_pt_period
							},
							"d_pt_info": {
								"avail_d_pt": ptInfoList[0].total_value_d_pt,
								"crnt_get_d_pt": stgInfoList[0].stg_get_pt,
								"total_d_pt": data.data.d_pt_info.total_d_pt,
								"rankup_need_d_pt": stgInfoList[0].stg_code,
								"crnt_invalid_d_pt_period": crnt_invalid_d_pt_period,
								"crnt_invalid_d_pt": crnt_invalid_d_pt,
								"invalid_d_pt_info_cnt": ptInfoList[0].d_pt_num,
								"invalid_d_pt_info_list": invalidDPtInfoList,
								"d_pt_club_no": data.data.d_pt_club_info.d_pt_club_no,
								"dur_mnth": stgInfoList[0].stg_duration_month,
								"d_stg_hst_info_cnt": data.data.stg_info.d_stg_hist_info_cnt,
								"d_stg_hst_info_list": dStgHstInfoList,
								"total_lmt_d_pt": ptInfoList[1].total_value_d_pt,
								"first_lmt_d_pt": first_lmt_d_pt,
								"first_lmt_d_pt_end_date": first_lmt_d_pt_end_date,
								"lmt_d_pt_info_cnt": ptInfoList[1].d_pt_num,
								"lmt_d_pt_info_list": lmtDPtInfoList,
								"pt_share_flag": data.data.d_pt_info.pt_share_flag
							},
							"stg_info": {
								"line_div": data.data.line_info.line_div,
								"crnt_d_stg_code": stgInfoList[0].stg_code,
								"crnt_d_stg_start_date": stgInfoList[0].stg_start_judge,
								"crnt_d_stg_end_date": stgInfoList[0].stg_end_judge,
								"d_pt_memb_div": d_pt_memb_div,
								"next_d_stg_code": stgInfoList[1].stg_code,
								"next_d_stg_start_date": stgInfoList[1].stg_start_judge,
								"next_d_stg_end_date": stgInfoList[1].stg_end_judge,

								"crnt_stg_code": stgInfoList[0].stg_code,
								"crnt_stg_get_pt": stgInfoList[0].stg_get_pt,
								"crnt_stg_duration_month": stgInfoList[0].stg_duration_month,
								"crnt_stg_start_date": stgInfoList[0].stg_start_date,
								"crnt_stg_start_judge": stgInfoList[0].stg_start_judge,
								"crnt_stg_end_judge": stgInfoList[0].stg_end_judge,
								"crnt_up_stg_code": stgInfoList[0].up_stg_code,
								"crnt_up_stg_pt": stgInfoList[0].up_stg_pt,

								"next_stg_code": stgInfoList[1].stg_code,
								"next_stg_get_pt": stgInfoList[1].stg_get_pt,
								"next_stg_duration_month": stgInfoList[1].stg_duration_month,
								"next_stg_start_date": stgInfoList[1].stg_start_date,
								"next_stg_start_judge": stgInfoList[1].stg_start_judge,
								"next_stg_end_judge": stgInfoList[1].stg_end_judge,
								"next_up_stg_code": stgInfoList[1].up_stg_code,
								"next_up_stg_pt": stgInfoList[1].up_stg_pt,

								"next_stg_code2": stgInfoList[2].stg_code,
								"next_stg_get_pt2": stgInfoList[2].stg_get_pt,
								"next_stg_duration_month2": stgInfoList[2].stg_duration_month,
								"next_stg_start_date2": stgInfoList[2].stg_start_date,
								"next_stg_start_judge2": stgInfoList[2].stg_start_judge,
								"next_stg_end_judge2": stgInfoList[2].stg_end_judge,
								"next_up_stg_code2": stgInfoList[2].up_stg_code,
								"next_up_stg_pt2": stgInfoList[2].up_stg_pt
							},
							"user_info_disp_flg": data.data.user_info_disp_flg,
							"auth_status_for_soapi": authStatus,
							"auth_status": authStatus
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.buckupCenter) {
					// バックアップセンタ折り返しの場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.buckupCenterReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.authenticationFailure) {
					// ユーザ認証失敗の場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.authenticationFailureReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.unauthenticated) {
					// 未認証エラーの場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.unauthenticatedReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.pointInfoAcquisitionUser) {
					// ポイント情報取得不可（ユーザエラー）の場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.pointInfoAcquisitionUserReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						},
						"data": {
							"myd_nickname": data.data.myd_nickname,
							"user_info_disp_flg": data.data.user_info_disp_flg
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.pointInfoAcquisitionSystem) {
					// ポイント情報取得不可（システムエラー）の場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.pointInfoAcquisitionSystemReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						},
						"data": {
							"myd_nickname": data.data.myd_nickname,
							"user_info_disp_flg": data.data.user_info_disp_flg
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.nonMemberAccess) {
					// dポイントクラブ非会員（BPC以外）アクセスエラーの場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.nonMemberAccessReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						},
						"data": {
							"myd_nickname": data.data.myd_nickname,
							"user_info_disp_flg": data.data.user_info_disp_flg,
							"auth_status_for_soapi": authStatus
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.nonMemberBpAccess) {
					// dポイントクラブ非会員（ビジプレ）アクセスエラーの場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.nonMemberBpAccessReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						},
						"data": {
							"myd_nickname": data.data.myd_nickname,
							"user_info_disp_flg": data.data.user_info_disp_flg,
							"auth_status_for_soapi": authStatus
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.mobills) {
					// MoBillsメンテ中エラーの場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.mobillsReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						},
						"data":{
							"myd_nickname": data.data.myd_nickname,
							"user_info_disp_flg": data.data.user_info_disp_flg
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.userInfoAcquisition) {
					// ユーザ情報取得の場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.userInfoAcquisitionReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						}
					};
				} else if (data.common.result_code == dpoint.common.module.defineCode.parameter) {
					// パラメータエラーの場合
					responseData = {
						"common": {
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.parameterReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						}
					};

				} else {
					// その他の値が入ってきた時(基本的にはあり得ない)
					// result_codeに0900を入れて返す
					responseData = {
						"common":{
							"http_status": String(xhr.status),
							"result_code": dpoint.common.module.defineCode.fraudApiResponseReturn,
							"transition_status": String(isAfterTransitionPeriod),
							"server_date": serverDate
						}
					};
				};
				dpoint.common.module.dpcCommon.callback(responseData);
			}).fail(function (XMLHttpRequest, textStatus, errorThrown) {
				// タイムアウトかどうか判定
				if (textStatus == 'timeout') {
					// result_codeに0800を入れて返す
					responseData = {
						"common": {
							"http_status": String(XMLHttpRequest.status),
							"result_code": dpoint.common.module.defineCode.timeoutReturn,
							"transition_status": "true",
							"server_date": null
						}
					};
				} else {
					// result_codeに0801を入れて返す
					responseData = {
						"common": {
							"http_status": String(XMLHttpRequest.status),
							"result_code": dpoint.common.module.defineCode.notTimeoutReturn,
							"transition_status": "true",
							"server_date": null
						}
					};
				};
			dpoint.common.module.dpcCommon.callback(responseData);
			});
		} catch(e) {
			// result_codeに0400を入れて返す
			responseData = {
				"common": {
					"http_status": String(XMLHttpRequest.status),
					"result_code": dpoint.common.module.defineCode.pointInfoAcquisitionUserReturn,
							"transition_status": "true",
							"server_date": null
				}
			};
			dpoint.common.module.dpcCommon.callback(responseData);
		}
	};

dpoint.common.userdata.setDataGetFunc = function(callback) {
	if (dpoint.common.userdata.data == null) {
		dpoint.common.userdata.callbacks.push(callback);
		
		if (!dpoint.common.userdata.isApi) {
			dpoint.common.userdata.isApi = true;
			dpoint.common.module.dpcCommon.getPointInfo(dpoint.common.userdata.dataGetCallback);
		}
	} else {
		callback(dpoint.common.userdata.data);
	}
};

dpoint.common.userdata.dataGetCallback = function(data) {
	dpoint.common.userdata.data = data;
	
	for (var i = 0;i < dpoint.common.userdata.callbacks.length;i++) {
		if (dpoint.common.userdata.callbacks[i] != null) {
			dpoint.common.userdata.callbacks[i](data);
		}
	}
	// dポイント 表示の実行関数
	displayPointParts();
};

// ********************************
// dアカウント　リクエスト実行関数
// ********************************
var doRequestUW1007 = function() {
	// UW1007のリクエストを実行する
	return $.ajax({
		type: 'POST', 
		url: dpoint.common.Const.GET_D_ACCOUNT_INFO_URL, 
		dataType: 'jsonp',
		jsonpCallback: 'getAccountInfo',
		timeout: dpoint.common.Const.TIMEOUT_GET_D_ACCOUNT_INFO,
		data: {'chk_mask_flg': '1'}
	}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
		failedRequestUW1007(XMLHttpRequest, textStatus, errorThrown);
	});
};

// ********************************
// dアカウント取得時のcallback関数
// ********************************
var getAccountInfo = function(resultData) {
	// dアカウント情報
	dpoint.common.accountdata = resultData;
};

// *********************************
// dアカウント　エラー時実行関数
// @param XMLHttpRequest
// @param textStatus
// @param errorThrown
// *********************************
var failedRequestUW1007 = function(XMLHttpRequest, textStatus, errorThrown) {
	// エラー画面を表示
	displayErrorPointParts();
};

// ********************************
// dアカウント 表示の実行関数
// ********************************
var displayAccountInfo = function() {
	// dアカウント　取得の実行
	doRequestUW1007().done(function() {
		displayAccountParts();
	});
};
