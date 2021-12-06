let element = document.querySelector('*'); - get firrst element in the HTML (most probably will be head)
let elements = document.querySelectorAll('*'); - get all elements in HTML

let firstHeading = document.querySelector('h1'); - will get header (based on header name)

let note = document.querySelector('.menu-item'); - get first menu items
let notes = document.querySelectorAll('.menu-item'); - all classes menu item

document.querySelectorAll('ul > li'); - find which li are under ul tab
document.querySelectorAll('ul.nav > li'); - find li that are inside exaclty ul.nav (useful if you have mulitple)