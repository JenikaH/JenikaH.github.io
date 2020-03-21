const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(eventURL)
    .then(response => {response.json()
        .then(response => {
                    const eventTowns = response.towns;

                    eventTowns.forEach(
                        (eventTown) => {
                            if (eventTown.name === 'Preston') {
                                document.querySelector('p.preston1').textContent = eventTown.events[0];
                                document.querySelector('p.preston2').textContent = eventTown.events[1];
                                document.querySelector('p.preston3').textContent = eventTown.events[2];
                            }
                        }
                    )
                }
            )
    });


fetch(eventURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const eventTowns = response.towns;

                    eventTowns.forEach(
                        (eventTown) => {
                            if (eventTown.name === 'Soda Springs') {
                                document.querySelector('p.soda1').textContent = eventTown.events[0];
                                document.querySelector('p.soda2').textContent = eventTown.events[1];
                                document.querySelector('p.soda3').textContent = eventTown.events[2];
                            }
                        }
                    )
                }
            )
    });

fetch(eventURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const eventTowns = response.towns;

                    eventTowns.forEach(
                        (eventTown) => {
                            if (eventTown.name === 'Fish Haven') {
                                document.querySelector('p.fish1').textContent = eventTown.events[0];
                                document.querySelector('p.fish2').textContent = eventTown.events[1];
                                document.querySelector('p.fish3').textContent = eventTown.events[2];
                            }
                        }
                    )
                }
            )
    });
