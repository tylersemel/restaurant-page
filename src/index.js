import "./styles.css";
import { initalPageLoader } from "./initial-page-loader.js";
import { menuLoader } from "./menu-loader.js";

document.addEventListener("DOMContentLoaded", () => {
    // initalPageLoader.loadPage();
    menuLoader.loadPage();
});

console.log(menuLoader.loadPage);