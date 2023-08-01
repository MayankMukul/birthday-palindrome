var dob = document.querySelector("#dob");
var string = document.querySelector("#string");
var btn = document.querySelector("#submit");

function reverseStr (str) {
    var chrlst=str.split('');
    var rev = chrlst.reverse();
    return (rev.join(''));
}

function process (){
    var revStr = reverseStr(string.value);
    console.log(`Original String: ${string.value}`);
    console.log(`Reverse of the given string is :${revStr}`) ;
    // var j = string.length;
    // for (var i=0;i<j;i++) {
    //     if (string.value[i]===revStr[i]) {
    //         console.log(string.value[i]);
    //     } else {
    //         console.log("failed");
    //     }
    // }
}

btn.addEventListener("click",process);