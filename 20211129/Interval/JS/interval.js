let intervalID;


function toggleColor() {
    let element = document.getElementById('flashtext');
    let elementR = document.getElementById('R');
    element.style.color = randomColorGenerator();
    elementR.style.color = randomColorGenerator();
    //element.style.color == 'red' ? 'blue' : 'red';
}

function stop() {
    clearInterval(intervalID);
    let element = document.getElementById('flashtext');
    element.style.color = 'black';
    document.body.style.backgroundColor = 'white';
}

function start() {
    intervalID = setInterval(toggleColor, 1000);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColorGenerator();
}

function randomColorGenerator() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);

}