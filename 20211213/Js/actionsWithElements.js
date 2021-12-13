function createDivision() {
    let div = document.createElement('div');
    div.id = 'content';
    div.className = 'note'; // can create id, class etc
    div.innerHTML = '<p>Element created by code</p>';

    // add div to the document
    document.body.appendChild(div);
}

function createHeaferInDivision() {
    let div = document.createElement('div');
    div.id = 'content';
    div.className = 'note';

    // create a new heading and add it to the div
    let h2 = document.createElement('h2');
    h2.textContent = 'Header 2 created by code';
    div.appendChild(h2);

    // add div to the document
    document.body.appendChild(div);
}

function createList() {
    const menu = document.querySelector('#menu');
    let li = document.createElement('li');
    li.textContent = 'List created by code';
    menu.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'Raimonds';
    menu.appendChild(li);

    li = document.createElement('li');
    li.textContent = 'Skibusts';
    menu.appendChild(li);
}

function loadJSAsync(url) {
    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}