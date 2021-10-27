
const anwsers = [];

function factorial() {
    var numberAsString = document.getElementById('number').value;
    number = parseInt(numberAsString);
    let answer = 1;
    if (number == 0 || number == 1) {
        getStandartAndwer();

    } else if (isNaN(number)) {
        document.getElementById("loop").innerHTML = "Please enter number and try again 🤔";
    }
    else {
        getFactorial();
    }

    function tableCreation() {
        var tableOfArrays = "";
        anwsers.push(number + " " + number + " " + answer);
        for (let i = 0; i < anwsers.length; i++) {
            tableOfArrays += anwsers[i] + "<br>";
        }
        return tableOfArrays;
    }

    function getFactorial() {
        for (var i = number; i >= 1; i--) {
            answer = answer * i;
        }
        
        document.getElementById("loop").innerHTML =
            tableCreation();
    }

    function getStandartAndwer() {
        document.getElementById("loop").innerHTML =
            tableCreation();
    }
}