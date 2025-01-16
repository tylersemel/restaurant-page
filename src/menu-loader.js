const menuLoader = (function() {
    function createItems(colDiv) {
        const rows = 4;
        for (let i = 0; i < rows; i++) {
            let itemDiv = createElement('div', 'item');
            let itemNameH2 = createElement('h2', 'item-name', 'Prok Chai');
            let itemDescriptP = createElement(
                                    'p',
                                    'item-description', 
                                    'A delightful fishd with red seasons and blue onions.');
            
            itemDiv.appendChild(itemNameH2);
            itemDiv.appendChild(itemDescriptP);

            colDiv.appendChild(itemDiv);
        }
    }
    
    function createElement(elem, className, text) {
        const element = document.createElement(elem);
        if (!!className) element.classList.add(className);
        if (!!text) element.textContent = text;

        return element;
    }

    function createHTML() {
        const contentDiv = document.querySelector("#content");       
        const menuContainer = createElement('div', 'menu-container');
        const menuH2 = createElement('h2', '', 'Menu');
        const menuSectionsDiv = createElement('div', 'menu-sections');
        const col1Div = createElement('div', 'col');
        const col2Div = createElement('div', 'col');

        createItems(col1Div);
        createItems(col2Div);

        menuSectionsDiv.appendChild(col1Div);
        menuSectionsDiv.appendChild(col2Div);
        menuContainer.appendChild(menuH2);
        menuContainer.appendChild(menuSectionsDiv);
        contentDiv.appendChild(menuContainer);
    }
    
    const loadPage = () => {
        createHTML();
    }

    return { loadPage }
})();

export { menuLoader };