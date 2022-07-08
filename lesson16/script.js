function Cau1(){
    let numberN = parseInt(document.getElementById("numberN").value);
    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2");

    let str1 = "", str2 = "";
    for(let i=0; i<=numberN; i++){
        str1 += i.toString() + " ";
    }
    for(let i=0; i<=numberN; i+=2){
        str2 += i.toString() + " ";
    }

    result1.innerHTML = str1;
    result2.innerHTML = str2;
}

function Cau2(){
    let numberN2 = parseInt(document.getElementById("numberN2").value);
    let result3 = document.getElementById("result3");

    let i = 0, sum = 0;
    while(sum <= numberN2){
        i++;
        sum += i;
    }
    result3.innerHTML = i-1;
}

function Cau3(){
    let numberN3 = document.getElementById("numberN3").value;
    let result4 = document.getElementById("result4");

    let str = numberN3;
    let arr = numberN3.split('').map(i=>parseInt(i));
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    
    result4.innerHTML = "Số chữ số: " + arr.length + "<br/>Tổng các chữ số: " + sum + "<br/>Dãy số đảo ngược: " + str.split('').reverse().join('');
}

function Cau4(){
    let numberN4 = document.getElementById("numberN4").value;
    let result5 = document.getElementById("result5");

    let arr = numberN4.split(' ').map(i=>parseInt(i));
    let am = 0, duong = 0;
    let min = arr[0];
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 0){
            duong++;
        }
        else{
            am++;
        }
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
    }
    result5.innerHTML = "Số phần tử âm: " + am + "<br/>" + "Số phần tử dương: " +  duong + "<br/>Phần tử nhỏ nhất: " + min + "<br/>Phần tử lớn nhất: " + max;
}

function Cau5(){
    let isPrime = parseInt(document.getElementById("isPrime").value);
    let checkPrime = document.getElementById("checkPrime");

    let check = true;
    check = isPrimeFunction(isPrime);

    if(check == true){
        checkPrime.innerHTML = "Đây là số nguyên tố";
    }
    else{
        checkPrime.innerHTML = "Đây không là số nguyên tố";
    }
}

function isPrimeFunction(number){
    let check = true;
    if(number >= 2){
        for(let j=2; j<number/2; j++){
            if(number % j == 0){
                check = false;
                break;
            }
        }
    }
    else{
        check = false;
    }
    return check;
}

function perfectNumber(number){
    let sum = 0;
    for(let i=0; i<=number/2; i++){
        if(number % i == 0){
            sum += i;
        }
    }
    if(sum == number){
        return true;
    }
    else{
        return false;
    }
}


function Cau6(){
    let isArrayPrime = document.getElementById("isArrayPrime").value;
    let checkArrayPrime = document.getElementById("checkArrayPrime");

    let arrayPrime = isArrayPrime.split(' ').map(i=>parseInt(i));
    let str = "";
    let count = 0;

    for(let i=0; i<arrayPrime.length; i++){
        if(isPrimeFunction(arrayPrime[i])){
            str += arrayPrime[i].toString() + " ";
            count++;
        }
    }

    checkArrayPrime.innerHTML = "Số lượng các số nguyên tố: " + count + "<br/>Dãy các số nguyên tố: " + str;
}

function Cau7(){
    let isPerfectNumber = parseInt(document.getElementById("isPerfectNumber").value);
    let checkPerfectNumber = document.getElementById("checkPerfectNumber");

    if(perfectNumber(isPerfectNumber)){
        checkPerfectNumber.innerHTML = "YES";
    }
    else{
        checkPerfectNumber.innerHTML = "NO";
    }
}

function Cau8(){
    let fibonacci = parseInt(document.getElementById("fibonacci").value);
    let fibonacciArray = document.getElementById("fibonacciArray");

    let array = new Array();
    array[0] = 1;
    array[1] = 1;
    for(let i=2; i<fibonacci; i++){        
        array[i] = array[i-1] + array[i-2];
    }
    fibonacciArray.innerHTML = "Số fibonacci thứ " + fibonacci + " là: " + array[fibonacci-1];
}

function Cau9(){
    let giaiThua = parseInt(document.getElementById("giaiThua").value);
    let ketQua = document.getElementById("ketQua");

    let mul = 1;
    for(let i=1; i<=giaiThua; i++){
        mul *= i;
    }

    ketQua.innerHTML = "Giai thua cua " + giaiThua + " là: " + mul;
}

function Cau10(){
    let isDateArray = document.getElementById("isDateArray").value;
    let checkDateArray = document.getElementById("checkDateArray");

    let dateArrayString = isDateArray.split(" ");
    let dateArray = new Array();
    for(let i=0; i<dateArrayString.length; i++){
        dateArray[i] = new Date(dateArrayString[i]);
    }
    
    let dateMin = dateArray[0];
    let dateMax = dateArray[0];
    for(let i=0; i<dateArray.length; i++){
        dateArray[i] = dateArray[i].toLocaleDateString();
        if(dateMin > dateArray[i]){
            dateMin = dateArray[i];
        }
        if(dateMax < dateArray[i]){
            dateMax = dateArray[i];
        }
    }
    dateArray.sort(dateComparison);
    checkDateArray.innerHTML = "Date lớn nhất: " + dateMax.toLocaleDateString() + "<br/>Date nhỏ nhất: " + dateMin.toLocaleDateString() + "<br/>Sắp xếp date giảm dần: " + dateArray;
}

function dateComparison(a, b){
    let date1 = new Date(a);
    let date2 = new Date(b);
    return date2 - date1;
}

function Cau11Triangle(){
    let line = parseInt(document.getElementById("line").value);
    let shape1 = document.getElementById("shape1");

    for(let i=0; i<line; i++){
        if(i<line-1)
        {
            for(let j=0; j<=i; j++){
                if((j==0 || j==i) && i<line-1){
                    shape1.innerHTML += "*&#160";
                }
                else{
                    shape1.innerHTML += "&#160 &#160";
                }
            }
        }
        else{
            for(let j=0; j<=i; j++){
                shape1.innerHTML += "*&#160";
            }
        }
        
        shape1.innerHTML += "<br\>";
    }
}

function Cau11Triangle1(){
    let line = parseInt(document.getElementById("line").value);
    let shape2 = document.getElementById("shape2");

    let q = 0;
    for(let i=line; i>0; i--){
        if(i != 1){
            for(let j=1; j<i; j++){
                shape2.innerHTML += "&#160 &#160";
            }
            for(let k=0; k<=q; k++){
                if(k==0 || k==q){
                    shape2.innerHTML += "*&#160";
                }
                else{
                    shape2.innerHTML += "&#160 &#160";
                }
            }
        }
        else{
            for(let j=0; j<q+1; j++){
                shape2.innerHTML += "*&#160";
            }
        }
        q+=2;
        shape2.innerHTML += "<br\>";
    }
}

function Cau11Triangle2(){
    let line = parseInt(document.getElementById("line").value);
    let shape3 = document.getElementById("shape3");

    for(let i=0; i<line; i++){
        for(let j=0; j<line; j++){
            if(i==0 || i==line-1){
                shape3.innerHTML += "*&#160";
            }
            else{
                if(j==0 || j==line-1){
                    shape3.innerHTML += "*&#160";
                }
                else{
                    shape3.innerHTML += "&#160 &#160";
                }
            }
        }
        shape3.innerHTML += "<br\>";
    }
}

function Cau11Triangle2(){
    let line = parseInt(document.getElementById("line").value);
    let shape4 = document.getElementById("shape4");


    let q = 0;
    for(let i=0; i<line; i++){
        if(i==0){
            for(let j=0; j<line; j++){
                shape4.innerHTML += "*&#160";
            }
        }
        else{
            
        }
    }

    for(let i=line; i>0; i--){
        if(i != 1){
            for(let j=1; j<i; j++){
                shape4.innerHTML += "&#160 &#160";
            }
            for(let k=0; k<=q; k++){
                if(k==0 || k==q){
                    shape4.innerHTML += "*&#160";
                }
                else{
                    shape4.innerHTML += "&#160 &#160";
                }
            }
        }
        else{
            for(let j=0; j<q+1; j++){
                shape4.innerHTML += "*&#160";
            }
        }
        q+=2;
        shape4.innerHTML += "<br\>";
    }
}