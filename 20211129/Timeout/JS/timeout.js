var timeoutID;

function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
}

function clearAlert() {
    clearTimeout(timeoutID);
}

function callTimeoutInLog() {

    function task() {
        console.log('setTimeout Demo!')
    }

    setTimeout(task, 3000);
}