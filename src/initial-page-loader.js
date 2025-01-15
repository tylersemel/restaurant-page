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

        const photoCreditDiv = document.createElement('div');
        photoCreditDiv.classList.add('photo-credit');

        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(photoCreditDiv);

    }

    #appendText() {
        const contentDiv = document.querySelector("#content");
        contentDiv.querySelector('.name').textContent = 'Restaiurtnie';
        contentDiv.querySelector('.tagline').textContent = 'A place to eat food';
        contentDiv.querySelector('.photo-credit').innerHTML = 'Photo by <a href="https://unsplash.com/@edgarraw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Odiseo Castrejon</a> on <a href="https://unsplash.com/photos/assorted-sliced-citrus-fruits-on-brown-wooden-chopping-board-1CsaVdwfIew?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
    }
    
    loadPage() {
        this.#createHTML();
        this.#appendText();
    }
});



export { initalPageLoader };