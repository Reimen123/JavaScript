
document.onkeydown = function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 27) {
        const text = "abc";
        (async () => {
            await navigator.clipboard.writeText(text);
        })();
    }
}


