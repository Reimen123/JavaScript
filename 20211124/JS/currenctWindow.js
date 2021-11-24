
var jsWindow = window.open(
    'http://127.0.0.1:5500/20211124/testWindows/testWindow.html',
    'thisTab',
    'height=600,width=600');

function resizeCurrWin() {
    // shrink the window, or resize the window 
    // to 500x500
    setTimeout(() => {
        jsWindow.resizeTo(-100, -100);
    }, 3000); // 3000 amount is time 30 sec
}

function moveWin() {
    setTimeout(() => {
        jsWindow.moveTo(500, 500);
    }, 6000); 
}

function closeWin() {
    setTimeout(() => {
        jsWindow.close();
    }, 9000)
}

/* in general we set 3000, 6000 and 9000
to set time for each of actions, if we leave 3000 it will perfor following actions 
without waiting
*/