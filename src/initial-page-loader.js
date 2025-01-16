const initalPageLoader = new (class InitalPageLoader {
    #createHTML() {
        const contentDiv = document.querySelector("#content");
        
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');

        const nameH1 = document.createElement('h1');
        nameH1.classList.add('name');

        const taglineDiv = document.createElement('div');
        taglineDiv.classList.add('tagline');

        titleDiv.appendChild(nameH1);
        titleDiv.appendChild(taglineDiv);

        contentDiv.appendChild(titleDiv);
    }

    #appendText() {
        const contentDiv = document.querySelector("#content");
        contentDiv.querySelector('.name').textContent = 'Restaiurtnie';
        contentDiv.querySelector('.tagline').textContent = 'A place to eat food';
    }
    
    loadPage() {
        this.#createHTML();
        this.#appendText();
    }
});



export { initalPageLoader };