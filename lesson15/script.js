function Cau1(){
    let checkNumber = parseInt(document.getElementById("checkNumber").value);
    let textCheckNumber = document.getElementById("textCheckNumber");
    console.log(checkNumber);
    if (checkNumber < 0){
        textCheckNumber.innerHTML = "Đây là số nguyên âm";
    }
    else{
        textCheckNumber.innerHTML = "Đây là số nguyên dương";
    }
}

function Cau2(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let max2Number = document.getElementById("max2Number");

    let max = (number1>number2)?number1:number2;
    max2Number.innerHTML = max;
}

function Cau3(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let number3 = parseInt(document.getElementById("number3").value);
    let max3Number = document.getElementById("max3Number");

    let max = (number1>number2)?number1:number2;
    max = (max>number3)?max:number3;

    max3Number.innerHTML = max;
}

function Cau4(){
    let text = document.getElementById("textBefore").value;
    let textAfter = document.getElementById("textAfter");

    while(text.includes("  ")){
        text = text.replace("  ", " ");
    }

    textAfter.innerHTML = text;
}

function Cau5(){
    let string = document.getElementById("stringBefore").value;
    let stringAfter = document.getElementById("stringAfter");

    while(string.includes("  ")){
        string = string.replace("  ", " ");
    }

    string = string.trim();

    let str = string.split(" ");
    string = "";

    for(let i=0; i<str.length; i++)
    {
        let first = str[i].substring(0,1);
        let last = str[i].substring(1);
        str[i] = first.toUpperCase() + last.toLowerCase();
        string += str[i] + " ";
    }
    
    stringAfter.innerHTML = string;

    string = string
}

function Cau6() {
    let stringA = document.getElementById("stringA").value;
    let stringB = document.getElementById("stringB").value;
    let stringC = document.getElementById("stringC").value;

    let stringResult = document.getElementById("stringResult");

    if(stringA.includes(stringB) == false){
        stringResult.innerHTML = "NO";
    }
    else{
        let indexFirst = stringA.indexOf(stringB);
        let indexLast = indexFirst + stringB.length - 1;
        let stringD = stringC.split('').reverse().join('');
        stringD = stringD.bold();
        stringA =  stringA.replace(stringB,stringD);
        stringResult.innerHTML = "YES<br/>Vị trí đầu tiên: " + indexFirst + "<br/>Vị trí cuối cùng: " + indexLast + "<br/>Chuỗi mới:" + stringA;
    }
}

function Cau7(){
    let phoneNumber = document.getElementById("phoneNumber").value;
    let decodePhoneNumber = document.getElementById("decodePhoneNumber");
    
    let array = phoneNumber.split('');

    for(let i=0; i<array.length; i++){
        if(array[i] == "3"){
            array.splice(i+1, 0, "1", "4", "5");
        }
    }

    if(array[0] == "0"){
        array.shift();
    }
    array.reverse();
    console.log(array);
    array.splice(0,4,"****");
    let str = array.join('');
    
    decodePhoneNumber.innerHTML = str;
}

function Cau8(){
    let isPhoneNumber = document.getElementById("isPhoneNumber").value;
    let checkPhoneNumber = document.getElementById("checkPhoneNumber");

    let regex = /^0\d{9}$/;
    if(isPhoneNumber.match(regex)){
        checkPhoneNumber.innerHTML = "True";
    }
    else{
        checkPhoneNumber.innerHTML = "False";
    }
}