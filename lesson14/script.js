function Cau1(){
    let tag_P1 = document.getElementById("tag_P1");
    tag_P1.innerHTML = "Đặng Văn Hỷ"
}

function Cau2(){
    let lastName = document.getElementById("lastName");
    let firstName = document.getElementById("firstName");
    let tag_P2 = document.getElementById("tag_P2");
    tag_P2.innerHTML = lastName.value + " " + firstName.value;
}

function Cau3(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let add = document.getElementById("add");
    let subtract = document.getElementById("subtract");
    let multiple = document.getElementById("multiple");
    let divide = document.getElementById("divide");
    add.innerHTML = number1 + number2;
    subtract.innerHTML = number1 - number2;
    multiple.innerHTML = number1 * number2;
    divide.innerHTML = Math.round(number1 / number2 * 100) / 100;
}

function Cau4(){
    let randomNumber = document.getElementById("randomNumber");
    let number = parseInt(Math.random(1, 100) * 100);
    randomNumber.innerHTML = number;
}

function Cau5(){
    let celsius = parseInt(document.getElementById("celsius").value);
    let F = celsius * 9 / 5 + 32;
    let C = (F - 32) * 5 / 9;
    let C2F = document.getElementById("C2F");
    let F2C = document.getElementById("F2C");
    C2F.innerHTML = celsius + "&#8451 là " + F + "&#8457";
    F2C.innerHTML = F + "&#8457 là " + celsius + "&#8451";
}

function Cau6(){
    let fahrenheit = document.getElementById("fahrenheit");
    let F = parseInt(Math.random(1, 100) * 100);
    fahrenheit.innerHTML = "Độ F random: " + F;
    let C = (F - 32) * 5 / 9;
    let changeF2C = document.getElementById("changeF2C");
    changeF2C.innerHTML = "It is " + F + "&#8457 today. That's " + Math.round(C * 100) / 100 + "&#8451.";
}

function Cau7(){
    document.querySelector(".cover").style.display = 'block';
    document.querySelector(".popup").style.display = 'block';
}

function Cau8(){
    let progressBar = document.querySelector(".barRun");
    progressBar.setAttribute('id', 'playAnimation');
}

function Cau9(){
    let realTimeInput = document.getElementById("realTimeInput");
    let realTimeText = document.getElementById("realTimeText");

    realTimeText.innerHTML = realTimeInput.value;
}

document.querySelector(".close").addEventListener('click', function(){
    document.querySelector(".cover").style.display = 'none';
    document.querySelector(".popup").style.display = 'none';
})

function check(char){
    let x = char.which || char.keycode;
    if ((x >= 48 && x <= 57) || x==189)
        return true;
    else
        return false;
}

function Cau10(){
    let A = parseInt(document.getElementById("inputA").value);
    let B = parseInt(document.getElementById("inputB").value);
    let C = parseInt(document.getElementById("inputC").value);

    let max = (A>B)?A:B;
    max = (max>C)?max:C;

    let maxNunber = document.getElementById("maxNumber");
    maxNunber.innerHTML = max;
}