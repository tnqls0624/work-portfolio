var smallsize_max = 640;
//パラメーター取得
var locationPRM = location.search;
var urlPRM = locationPRM.slice(1);
// 日付変換
//checkDate_displayと連携
var changeType_date = function(datestr){
    var year = Number(datestr.slice(0, 4));
    var month  = Number(datestr.slice(5, 7)) - 1;
    var day = Number(datestr.slice(8, 10));
    var date = new Date(year, month, day, 0, 0);
    return date;
};
// 開始日終了日を判定
//home
var checkDate_display = function(startdate, enddate){
    var toDay = new Date();
    var startDay = changeType_date(startdate);
    var endDay = changeType_date(enddate);
    var rtn = true;
    if(!(startDay.getTime() <= toDay.getTime())){
        rtn = false;
    }
    if(enddate !== ''){
        if(!(toDay.getTime() <= endDay.getTime())){
            rtn = false;
        }
    }
    return rtn;
};

//日付形式に変換
//acc
var replace_date = function(redate){
  if(redate){
    var cutYear = redate.substr( 0, 8 ).slice(0,4);
    var cutMonth = redate.substr( 0, 8 ).slice(4,6);
    var cutDate = redate.substr( 0, 8 ).slice(6,8);
    var rdat = ''+ cutYear +'/'+ cutMonth + '/'+ cutDate +'';
    return rdat;
  }else{
    rdat = '';
    return rdat;
  }
};
//パラメーター取得
//home.acc.use
var getParam = function(key){
   var searchPrm = location.search;
   var checkKey = key + '=';
   var rtnVal = '';
   if(searchPrm.indexOf(checkKey) !== -1){
       rtnVal = searchPrm.split(checkKey)[1].split('&')[0];
   }
   return rtnVal;
};

//画像代用　正方形
//home.use.coupon
var squareSwitcher = function(squareimg){
 squareimg.onerror = null;
    squareimg.src = './img/decoration/brock_1.png';
    return true;
};

//画像代用　長方形
//home.acc.use.coupon
var rectangleSwitcher = function(rectangleimg){
 rectangleimg.onerror = null;
    rectangleimg.src = './img/decoration/brock_2.png';
    return true;
};

//画像代用　DマークLogo
//home.acc.use.coupon
var logoSwitcher = function(logoimg){
 logoimg.onerror = null;
    logoimg.src = '/common/img/icon/icon_dlogo.png';
    return true;
};


