function Cau6(){
    let textArea = document.getElementById("textArea").value;
    let input = document.getElementById("textInput").value;
    let result = document.getElementById("result");

    let regex = /\[<\s{0,}\w\s{0,}>\]/g;
    let newStr = textArea.replace(regex, input);
    
    result.innerHTML = newStr;
}

let arrayNumberTask7 = new Array();

function Cau7(){
    let inputNumber = parseInt(document.getElementById("inputNumber").value);
    let textResult = document.getElementById("textResult");

    if(!arrayNumberTask7.includes(inputNumber)){
        arrayNumberTask7.push(inputNumber);
        textResult.innerHTML += inputNumber + " ";
    }
}

function Cau8(){
    
}