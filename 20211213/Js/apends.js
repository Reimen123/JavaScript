
function addElements() {
    // get the ul#menu
    const menu = document.querySelector('#menu');
    // add menu item
    menu.appendChild(createMenuItem('Home'));
    menu.appendChild(createMenuItem('Services'));
    menu.appendChild(createMenuItem('About Us'));
}

function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}


function apendElements() {
    // get the first list
    const firstList = document.querySelector('#first-list');
    // take the first child element
    const everest = firstList.firstElementChild;
    // get the second list
    const secondList = document.querySelector('#second-list');
    // append the everest to the second list
    secondList.appendChild(everest)
}