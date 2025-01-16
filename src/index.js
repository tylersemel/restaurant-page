import "./styles.css";
import { initalPageLoader } from "./initial-page-loader.js";
import { menuLoader } from "./menu-loader.js";

const nav = document.querySelector('header nav');
nav.addEventListener('click', handleNavClick, false);

function handleNavClick(event) {
    switch(event.target.className) {
        case 'home':
            clearModule();
            initalPageLoader.loadPage();
            break;
        case 'menu':  
            clearModule();
            menuLoader.loadPage();  
            break;
        case 'about':
            break;
        default:
            break;
    }
}

function clearModule() {
    const contentDiv = document.querySelector('#content');
    console.log(contentDiv.childNodes.length);

    for (let i = 0; i < contentDiv.childNodes.length; i++) {
        contentDiv.removeChild(contentDiv.childNodes[i]);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    // initalPageLoader.loadPage();
    // menuLoader.loadPage();
});
