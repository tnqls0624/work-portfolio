var SEARCH_REC_REQUEST_URL = ''; //コンテンツリクエスト用URL
var SEARCH_REC_REGISTER_URL = ''; //クリックとインプレッション登録用URL
		
if (location.hostname == 'dpoint.jp') {
	// 	商用環境
	SEARCH_REC_REQUEST_URL = "https://dpoint.jp/dmpf/tagereco/owdrmd/recommendAccept/index.do";
	SEARCH_REC_REGISTER_URL = "https://direct.target-recommend.com/dmpf/dcm/tagereco/owdrmd/recommendAccept/index.do";
}else if (location.hostname == 'stg.dpoint.jp') {
	// 	商用STG
	SEARCH_REC_REQUEST_URL = "https://dpoint.jp/dmpf/tagereco/owdrmd/recommendAccept/index.do";
	SEARCH_REC_REGISTER_URL = "https://direct.target-recommend.com/dmpf/dcm/tagereco/owdrmd/recommendAccept/index.do";
}else if (location.hostname == 've.m.dpoint.jp') {
	// 	検証環境
	SEARCH_REC_REQUEST_URL = "https://ve.m.dpoint.jp/dmpf/tagereco/owdrmd/recommendAccept/index.do";
	SEARCH_REC_REGISTER_URL = "https://direct.stg.target-recommend.com/dmpf/dcm/tagereco/owdrmd/recommendAccept/index.do";
}else{
	// 	検証STG
	// 	その他の環境
	SEARCH_REC_REQUEST_URL = "https://ve.m.dpoint.jp/dmpf/tagereco/owdrmd/recommendAccept/index.do";
	SEARCH_REC_REGISTER_URL = "https://direct.stg.target-recommend.com/dmpf/dcm/tagereco/owdrmd/recommendAccept/index.do";
}


var TIMEOUT_GET_SEARCHRECH_VALUE = 5000;
var RESULT_STATUS_SUCCESS = 'ok';
var RESULT_STATUS_NG = 'ng';
var RESULT_REQUEST_ERROR = 'ERMD08001';	
var RESULT_SYSTEM_ERROR = 'ERMD08002';
var CURRENT_URL = location.href.replace(/\?.*$/,'');
var REFERRER_URL = document.referrer.replace(/\?.*$/,'');
var DEF_MEDIA_ID = '02';
var DEF_OPERATE_KIND = '301';

var generateRequestData = function(requestKind, inputData) {
    // リクエストオブジェクトを生成
    var reqObject = {
        requestKind : requestKind,
        inputData : inputData
    };
    // JSONに変換して返却する
    return JSON.stringify(reqObject);
};

var failedSeachRecInfo = function(errorId, errorCause) {
	var retInfo = {
		'status' : RESULT_STATUS_NG,
		'error_id' : errorId,
		'error_cause' : errorCause
	};
    return retInfo;
};

//コンテンツリクエスト用の関数
var doRequestSearchRecommend = function(requestKind, inputData, callback) {
	var sendBodyData = generateRequestData(requestKind, inputData);
	return $.ajax({
		async: true,
		url: SEARCH_REC_REQUEST_URL, 
		type: 'GET', 
		contentType: 'text/plain',
		data: {'params' : sendBodyData},
		dataType: 'jsonp', 
		jsonpCallback: callback, 
		timeout: TIMEOUT_GET_SEARCHRECH_VALUE
	}).fail(function(data, xhr, status, errorThrown) {
		failedSeachRecInfo(RESULT_SYSTEM_ERROR, 'システムエラー (オウンドメディアレコメンド要求受付WebAPIとの通信エラー)');
	});
};

//クリックとインプレッション登録用の関数
var doRegisterSearchRecommend = function(requestKind, inputData, callback , recommendResponseId) {
	var sendBodyData = generateRequestData(requestKind, inputData);
	return $.ajax({
		async: true,
		url: SEARCH_REC_REGISTER_URL, 
		type: 'GET', 
		contentType: 'text/plain',
		data: { 'recommendResponseId' : recommendResponseId , 'params' : sendBodyData},
		dataType: 'jsonp', 
		jsonpCallback: callback, 
		timeout: TIMEOUT_GET_SEARCHRECH_VALUE
	}).fail(function(data, xhr, status, errorThrown) {
		failedSeachRecInfo(RESULT_SYSTEM_ERROR, 'システムエラー (オウンドメディアレコメンド要求受付WebAPIとの通信エラー)');
	});
};

var sendClickSearchRecLink = function(_measureId, _recommendOrder, _serviceId, _cid, _frameId, _groupId, _altFlg, _recommendMethodId, _optOutUserFlg, _timerId, _recommendResponseId) {
	var clickSearchRecParam = {
		'param' : [
			{ 
				'measureId' : _measureId,
				'recommendOrder' : _recommendOrder,
				'mediaId': DEF_MEDIA_ID,
				'serviceId' : _serviceId,
				'cid' : _cid,
				'frameId' : _frameId,
				'url' : CURRENT_URL,
				'operateKind' : DEF_OPERATE_KIND,
				'groupId' : _groupId,
				'altFlg' : _altFlg,
				'recommendMethodId' : _recommendMethodId,
				'optOutUserFlg' : _optOutUserFlg,
				'timerId' : _timerId,
				'referrer' : REFERRER_URL
			}
		]
	};
	doRegisterSearchRecommend(3, clickSearchRecParam, 'clickSearchRecLink' ,_recommendResponseId);
};

// 高さ調節
var alignHeight = function(parentElem, childrenElems) {
	$(parentElem).each(function (i, box) {
		$(box).find(childrenElems).height('');
	});
	$(parentElem).each(function (i, box) {
		var maxHeight = 0;
		$(box).find(childrenElems).each(function() {
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		});
		$(box).find(childrenElems).height(maxHeight);
	});
};
