const requestURL = 'https://raw.githubusercontent.com/JenikaH/JenikaH.github.io/master/salmon_river_adventures/profiles.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const profiles = jsonObject['profiles']

        for (let i = 0; i < profiles.length; i++) {
            if (profiles[i].name == "Alex Smith" || profiles[i].name == "Sally Hill" || profiles[i].name == "Jacob Jones") {
              
                let card = document.createElement('section');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let cert = document.createElement('p');
                let experience = document.createElement('p');
                let email = document.createElement('p');
                let biography = document.createElement('p');
                let photo = document.createElement('img');


                h2.textContent = profiles[i].name;
                cert.textContent = "Certification Level: " + profiles[i].certification;
                experience.textContent = "Years of Experience: " + profiles[i].experience;
                email.textContent = "Email: " + profiles[i].email;
                biography.textContent =  profiles[i].biography;
                photo.setAttribute('src', "images/" + profiles[i].photo);
                photo.setAttribute('alt', profiles[i].name + " Image");

                card.appendChild(div);
                div.appendChild(h2);
                div.appendChild(cert);
                div.appendChild(experience);
                div.appendChild(email);
                div.appendChild(biography);
                card.appendChild(photo);

                document.querySelector('div.employees').appendChild(card);
            }
        }

    });

