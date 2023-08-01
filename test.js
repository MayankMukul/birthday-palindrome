var dob = document.querySelector("#dob");
var string = document.querySelector("#string");
var btn = document.querySelector("#submit");
var message = document.querySelector("#output");

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

    console.log(dob.value);
}

function datetostring () {

}

btn.addEventListener("click",ispalindrome);