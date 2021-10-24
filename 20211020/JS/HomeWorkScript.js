
const abstractArray = ["Saab", "Volvo", "BMW"];
document.getElementById("array").innerHTML = abstractArray;

function addRecordToBegining() {
    var record = document.getElementById('arrRecord').value;
    document.getElementById("array").innerHTML = abstractArray;
    abstractArray.unshift(record);
    document.getElementById("newArray").innerHTML = abstractArray;
}

function addRecordToEnd() {
    var record = document.getElementById('arrRecord').value;
    document.getElementById("array").innerHTML = abstractArray;
    abstractArray.push(record);
    document.getElementById("newArray").innerHTML = abstractArray;
}
