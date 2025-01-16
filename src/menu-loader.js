const menuLoader = (function() {
    function createHTML() {
        const contentDiv = document.querySelector("#content");
        
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        const menuH2 = document.createElement('h2');
        menuH2.textContent = 'Menu';

        const menuSectionsDiv = document.createElement('div');
        menuSectionsDiv.classList.add('menu-sections');

        const col1Div = document.createElement('div');
        col1Div.classList.add('col');

        const col2Div = document.createElement('div');
        col2Div.classList.add('col');

        const rows = 4;

        for (let i = 0; i < rows; i++) {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            let itemNameH2 = document.createElement('h2');
            itemNameH2.classList.add('item-name');
            itemNameH2.textContent = 'Prok chei';

            let itemDescriptP = document.createElement('p');
            itemDescriptP.classList.add('item-description');
            itemDescriptP.textContent = 'A delightful fishd with red seasons and blue onions.';

            itemDiv.appendChild(itemNameH2);
            itemDiv.appendChild(itemDescriptP);

            col1Div.appendChild(itemDiv);
        }

        for (let i = 0; i < rows; i++) {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            let itemNameH2 = document.createElement('h2');
            itemNameH2.classList.add('item-name');
            itemNameH2.textContent = 'Prok chei';

            let itemDescriptP = document.createElement('p');
            itemDescriptP.classList.add('item-description');
            itemDescriptP.textContent = 'A delightful fishd with red seasons and blue onions.';

            itemDiv.appendChild(itemNameH2);
            itemDiv.appendChild(itemDescriptP);

            col2Div.appendChild(itemDiv);
        }

        menuSectionsDiv.appendChild(col1Div);
        menuSectionsDiv.appendChild(col2Div);
        menuContainer.appendChild(menuH2);
        menuContainer.appendChild(menuSectionsDiv);
        contentDiv.appendChild(menuContainer);

    }

    // function appendText() {
    //     const contentDiv = document.querySelector("#content");
    //     contentDiv.querySelector('.name').textContent = 'Restaiurtnie';
    //     contentDiv.querySelector('.tagline').textContent = 'A place to eat food';
    //     contentDiv.querySelector('.photo-credit').innerHTML = 'Photo by <a href="https://unsplash.com/@edgarraw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Odiseo Castrejon</a> on <a href="https://unsplash.com/photos/assorted-sliced-citrus-fruits-on-brown-wooden-chopping-board-1CsaVdwfIew?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
    // }
    
    const loadPage = () => {
        createHTML();
    }

    return { loadPage }
})();

export { menuLoader };