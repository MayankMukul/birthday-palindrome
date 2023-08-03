// var dob = document.querySelector("#dob");
// var string = document.querySelector("#string");
// var btn = document.querySelector("#submit");
// var message = document.querySelector("#output");
// var datebtn = document.querySelector("#date");

function reverseStr (str) {
    var chrlst=str.split('');
    var rev = chrlst.reverse();
    return (rev.join(''));
}

function ispalindrome (str){
    var revStr = reverseStr(str);
    if (str === revStr){
        return true ;
    } else return false ;
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

    return datetostr;
}

//return date in different format
function returndatelist(datenor){
    
    var date = datetostring(datenor);
    
    var ddmmyyyy = (date.day + date.month + date.year);
    var mmddyyyy = (date.month + date.day + date.year);
    var yyyymmdd = (date.year + date.month + date.day);
    var ddmmyy = (date.day + date.month + date.year.slice(-2));
    var mmddyy = (date.month + date.day + date.year.slice(-2));
    var yymmdd = (date.year.slice(-2) + date.month + date.day);

    return  [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

var date = {
    day: 5,
    month: 1,
    year : 2020
}

function checkPalindromForAllDateFormats (date){
    var listDate = (returndatelist(date));
    var flag = false ;
    for (var i=0; i < listDate.length;i++) {
        if (ispalindrome(listDate[i])){
            flag = true;
            break;
        }
    }
    return flag;
}

function checkleap(year){
    if(year %4 === 0) {
        return true;
    }
    if (year % 100 === 0 ){
        return false;
    }
    if (year %4 === 0){
        return true;
    }
}

function nxtday(date){
    var daysinmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    var day=date.day+1;
    var month = date.month;
    var year = date.year;

    if (month==2){
        if(checkleap(year)){
            if (day> 29){
                day=1;
                month++;
            }
        } else {
            if (day>28 ){
                day=1;
                month++;
            }
        }
    } else {
        if(day > daysinmonth[month - 1]){
            day = 1;
            month++ ;
        }
    }
    if(month>12){
        month=1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };

}

function nxtpalindromedate(){
    var cont = 0 ;
    var nxtdate = nxtday(date);

    while(1){
        cont++;
        var ispalindrome = checkPalindromForAllDateFormats(nxtdate);
        if(ispalindrome){
            break;
        }
        nxtdate = nxtday(nxtdate);
    }
    return [cont, nxtdate];
}

// datebtn.addEventListener("click",returndate)
// btn.addEventListener("click",ispalindrome);
//
nxtpalindromedate(date);
