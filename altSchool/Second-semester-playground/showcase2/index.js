// document.body.innerHTML = `<h1>Hello 

// <span>World</span>

// </h1>`; 

import "./styles.css"

const element = document.querySelector('h1');

if (!element) {
    alert ("No h1 elemtn");
}

element.textContent = "We are moving good";