function setCm(){
    let inputValue= Number(document.querySelector("#inputValue").value);

    let result = inputValue / 0.39370;
    document.querySelector("#outputValue").value = result;
}

function setFeet(){
    let inputValue= Number(document.querySelector("#inputValue").value);

    let result = inputValue * 0.083333;
    document.querySelector("#outputValue").value = result;
}

function setMeters(){
    let inputValue= Number(document.querySelector("#inputValue").value);

    let result = inputValue / 39.370
    document.querySelector("#outputValue").value = result;
}