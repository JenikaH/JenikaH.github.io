const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const towns = jsonObject['towns']

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
              
                let card = document.createElement('section');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('p');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let photo = document.createElement('img');

                /* Events variables */
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');
                let event4 = document.createElement('p');

                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Current Population: " + towns[i].currentPopulation;
                rainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
                photo.setAttribute('src', "images/" + towns[i].photo);
                photo.setAttribute('alt', towns[i].name + " Image");

                card.appendChild(div);
                div.appendChild(h2);
                div.appendChild(motto);
                div.appendChild(founded);
                div.appendChild(population);
                div.appendChild(rainfall);
                card.appendChild(photo);

                document.querySelector('div.cards').appendChild(card);
            }
        }

    });

