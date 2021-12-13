function getFirstChild() {
    let content = document.getElementById('menu');
    let firstChild = content.firstChild.nodeName;
    return document.getElementById("Child").innerHTML = "First child of menu is " + firstChild;
}

function getFistElChild() {
    let content = document.getElementById('menu');
    return document.getElementById("elementChild").innerHTML = "First element child of menu is " + content.firstElementChild.textContent;
}

function getLastElChild() {
    let content = document.getElementById('menu');
    return document.getElementById("elementChildLast").innerHTML = "Last element child of menu is " + content.lastElementChild.textContent;
}

function childrens() {
    let menu = document.getElementById('menu');
    let children = menu.children;
    return document.getElementById("childrens").innerHTML = "Menu childrens are " + children;
}