var counter = 1; // can be added as let if not used globally
var showCounter = () => console.log(counter);

function windowCounter() {
    console.log(window.counter); // window is global object
    window.showCounter();
}

function windowSize() {
    console.log(windowWidth());
    console.log(windowHeight());
}

function windowWidth() {
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    return width;
}

function windowHeight() {
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    return height;
}

function openNewWindow() {
    let url = 'http://127.0.0.1:5500/20211124/testWindows/testWindow.html';
    let jsWindow = window.open(url, 'newTab'); // here about is tab name, so for every new tab we need new name or the same window will be reloaded
    console.log(jsWindow);
}

function openNewWindowWithDifferentSize() {
    let features = 'height=600,width=800',
        url = 'http://127.0.0.1:5500/20211124/testWindows/anotherTestWindow.html';

    let jsWindow = window.open(url, 'newTabSecond', features);
    console.log(jsWindow);
}

function newWindowTwoPagesResize() { // here we leave tab name as about and it will reload the same page
    let features = 'height=600,width=800',
        url = 'http://127.0.0.1:5500/20211124/testWindows/testWindow.html';

    let jsWindow = window.open(url, 'about', features);
    console.log(jsWindow);
    let secondURL = 'http://127.0.0.1:5500/20211124/testWindows/anotherTestWindow.html';
    setTimeout(() => {
        window.open(secondURL, 'about')
    }, 3000);

    resize(secondURL);
}

function resize(secondURL) {
    let jsWindow = window.open(
        secondURL,
        'about',
        'height=600,width=800');
    
    setTimeout(() => {
        jsWindow.resizeTo(600, 300);
    }, 3000);
}