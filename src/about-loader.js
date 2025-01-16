const aboutLoader = (function() {
    function createElement(elem, className, text) {
        const element = document.createElement(elem);
        if (!!className) element.classList.add(className);
        if (!!text) element.textContent = text;

        return element;
    }

    function createHTML() {
        const contentDiv = document.querySelector("#content");       
        const aboutContainerDiv = createElement('div', 'about-container');
        const aboutTitleDiv = createElement('div', 'about-title');
        const logoSpan = createElement('span', 'logo', '✴');
        const aboutH2 = createElement('h2', '', 'About Us');
        const aboutP = createElement('p', '', 
            'We are an indpendiitent resutartinet and awe love the people. ENjoyr ath tge fiid abd gavce a rgeat atune. asdf weeer sjsjfj weehheheehhee.');
        
        aboutTitleDiv.appendChild(logoSpan);
        aboutTitleDiv.appendChild(aboutH2);
        aboutContainerDiv.appendChild(aboutTitleDiv);
        aboutContainerDiv.appendChild(aboutP);
        contentDiv.appendChild(aboutContainerDiv);
    }
    
    const loadPage = () => {
        createHTML();
    }

    return { loadPage }
})();

export { aboutLoader };