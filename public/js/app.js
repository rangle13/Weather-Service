console.log("Client side js loaded.");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    console.log(location);
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('/weather?address=' + location).then((response) => {
        console.log(response);
        response.json().then ((data) => {
            console.log(data.forecast);
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = location;
                temperature = data.forecast.temperature;
                conditions = data.forecast.weatherDescription[0];
                weather = `Temperature is ${temperature} and the weather condition is ${conditions}`;
                messageTwo.textContent = weather;
            }
        });
    });
})