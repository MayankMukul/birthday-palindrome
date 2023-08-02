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

function ispalindrome (){
    var revStr = reverseStr(string.value);
    console.log(`Original String: ${string.value}`);
    console.log(`Reverse of the given string is :${revStr}`) ;
    for (var i=0 ; i<string.value.length/2 ; i++) {
        if (string.value[i]===revStr[i]) {
        } else {
            message.innerText ="String is Not Palindrome";
            return  ; 
        }
    }
    message.innerText = "String is Palindrome";
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
    day:"01",
    month: "02",
    year : "2012"
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

// datebtn.addEventListener("click",returndate)
// btn.addEventListener("click",ispalindrome);