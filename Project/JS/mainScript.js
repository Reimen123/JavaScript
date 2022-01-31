function openPrograms() {
    window.open('programs.html', '_self');
}

function openVitamins() {
    window.open('vitamins.html', '_self');
}

function openBodybuilders() {
    window.open('bodybuilders.html', '_self');
}

function openMainPage() {
    window.open('main.html', '_self');
}


function bbInformation() {
    var bodybuilders = document.getElementById('selectBB').innerHTML;
    if (bodybuilders === "Flex Wheeler") {
        var paragraph = document.createElement("p");
        paragraph.text = "Test";
    }
}

function bodybuildersList() {
    var bodybuilders = document.getElementById('selectBB');

    var options = [
        "Flex Wheeler",
        "Arnold Schwarzenegger",
        "Shawn Ray",
        "Dorian Yates",
        "Kevin Levrone",
        "Dexter Jackson",
        "Lee Haney",
        "Ronnie Coleman",
        "Phil Heath",
        "Frank Zane"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];

        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;

        bodybuilders.add(el);
    }
}