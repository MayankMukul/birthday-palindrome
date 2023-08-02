var dob = document.querySelector("#dob");
var string = document.querySelector("#string");
var btn = document.querySelector("#submit");
var message = document.querySelector("#output");
var datebtn = document.querySelector("#date");

function reverseStr (str) {
    var chrlst=str.split('');
    var rev = chrlst.reverse();
    return (rev.join(''));
}

function ispalindrome (string){
    var revStr = reverseStr(string);
 for (var i=0 ; i<string.length/2 ; i++) {
        if (string[i]===revStr[i]) {
        } else {
            return false; 
        }
    }
    return true;
}

function datetostring (date) {
   var datetostr = {day : '', month : '', year : ''};
    if (date.day<10){
        datetostr.day = '0' + date.day;
    } else {
        datetostr.day = date.day.toString();
    }

    if (date.month<10){
        datetostr.month = '0' + date.month;
    } else {
        datetostr.month = date.month.toString();
    }
    datetostr.year = date.year.toString() ;

    console.log(datetostr);
}

//return date in different format
function returndate(date){
    var ddmmyyyy = (date.day+date.month+date.year);
    var mmddyyyy = (date.month+date.day+date.year);
    var yyyymmdd = (date.year+date.month+date.day);
    var ddmmyy = (date.day+date.month+date.year.slice(-2));
    var mmddyy = (date.month+date.day+date.year.slice(-2));
    var yymmdd = (date.year.slice(-2)+date.month+date.day);
    return(ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd);
}

var date = {
    day: 1,
    month: 2,
    year : 2012
}

function checkPalindromForAllDateFormats (date){
    var listDate = (returndate(date));
    var flag = false ;
    for (var i=0;i< listDate.length;i++) {
        if (ispalindrome(listDate[i])){
            flag=true;
        }
    }
    return flag;
}

function nxtpalindrome(){
    
}

// datebtn.addEventListener("click",returndate)
// btn.addEventListener("click",ispalindrome);