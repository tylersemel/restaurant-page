import "./styles.css";
import { initalPageLoader } from "./initial-page-loader.js";
import { menuLoader } from "./menu-loader.js";
import { aboutLoader } from "./about-loader.js";

const nav = document.querySelector('header nav');
nav.addEventListener('click', handleNavClick, false);

function handleNavClick(event) {
    switch(event.target.className) {
        case 'home':
            clearContent();
            initalPageLoader.loadPage();
            break;
        case 'menu':  
            clearContent();
            menuLoader.loadPage();  
            break;
        case 'about':
            clearContent();
            aboutLoader.loadPage();
            break;
        default:
            break;
    }
}

function clearContent() {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();
}

document.addEventListener("DOMContentLoaded", () => {
    initalPageLoader.loadPage();
});
