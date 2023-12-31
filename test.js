var dob = document.querySelector("#dob");
var btn = document.querySelector("#submit");
var message = document.querySelector("#output");

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

function nxtpalindromedate(date){
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

function prevday(date){
    var daysinmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    var day=date.day-1;
    var month = date.month;
    var year = date.year;

    if (month==3){
        if(checkleap(year)){
            if (day==0){
                day=29;
                month--;
            }
        } else {
            if (day==0 ){
                day=28;
                month--;
            }
        }
    } else if(day == 0 ){
            month-- ;
            if(month==0){
                month=12;
                year--;
            }
            day = daysinmonth[month - 1];   
     }
    if(month==0){
        month=12;
        year--;
    }

    return {
        day: day,
        month: month,
        year: year
    };
    
}

function prevpalindromedate(date) {
    var count = 0;
    var prevdate = prevday(date);

    while (1){
        count++;
        var ispalindrome = checkPalindromForAllDateFormats(prevdate);
        if (ispalindrome){
            break;            
        }
        prevdate = prevday(prevdate);
    }

    return [ count , prevdate];
}

function closedate(date){
    var nxtdate = nxtpalindromedate(date);
    var prevdate = prevpalindromedate(date);
    if (nxtdate[0]<prevdate[0]){
        return nxtdate;
    } else {
        return prevdate;
    }
}

function day(number){
    return number>1 ? " days." : " day." ; 
}

function output(){
    var dateStr = dob.value

    if (dateStr !== ''){
        var listofdate = dateStr.split('-');
        var date = {
            day : Number(listofdate[2]),
            month : Number(listofdate[1]),
            year : Number(listofdate[0])
        };

        if (checkPalindromForAllDateFormats(date) ) {
            message.innerText="Yoooo! Your Birthday is a Palindrome Number"
        } else {
            var result = closedate(date);
            message.innerText="The Nearest Palindrome Date is " + result[1].day+"/" +result[1].month +"/" +result[1].year + ", you missed it by " + result[0] + day(result[0]);           
        }
    } else {
        message.innerText="Enter your Birthday First !!...";
    }
}


btn.addEventListener("click",output);

