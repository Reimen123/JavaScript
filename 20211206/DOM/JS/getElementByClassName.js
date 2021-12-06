function getElByClassNameFirst() {
    let menu = document.getElementById("menu");
    let items = menu.getElementsByClassName('item');

    let data = [].map.call(items, item => item.textContent);

    document.getElementById("class1").innerHTML = "Class Map One: " + data;
}

function getElByClassNameSecond() {
    let elements = document.getElementsByClassName('heading-secondary');

    let data = [].map.call(elements, elem => elem.textContent);

    document.getElementById("class2").innerHTML = "Class Map Two: " + data;
}