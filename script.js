window.addEventListener('load', async () => {
    try {
        let params = new URLSearchParams(window.location.search);
        let id = params.get('id');

        if (id) {

            let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            let character = await response.json();

            let card = document.createElement('div');
            let img = document.createElement('img');
            let h1 = document.createElement('h1');
            let info = document.createElement('div');
            let p = document.createElement('p');

            card.className = 'character-detail';
            info.className = 'info';

            h1.textContent = character.name;
            img.alt = character.name;
            img.src = character.image;
            p.textContent = `Status: ${character.status} | Species: ${character.species}`;

            info.appendChild(h1);
            info.appendChild(p);
            card.appendChild(img);
            card.appendChild(info);

            document.body.appendChild(card);

        } else {
  
            let response = await fetch('https://rickandmortyapi.com/api/character');
            let body = await response.json();

            for (let character of body.results) {
                let card = document.createElement('div');
                let img = document.createElement('img');
                let h3 = document.createElement('h3');
                let a = document.createElement('a');

                card.className = 'card';
                card.appendChild(a);
                a.appendChild(img);
                a.appendChild(h3);

                a.href = "character.html?id=" + character.id;

                h3.textContent = character.name;
                img.alt = character.name;
                img.src = character.image;

                let cards = document.querySelector('.cards');
                if (cards) cards.appendChild(card);
            }
        }

    } catch (e) {
        console.error('Ошибка при загрузке данных:', e);
    }
});
