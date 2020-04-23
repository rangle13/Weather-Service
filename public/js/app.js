console.log("Client side js loaded.");
fetch('/weather?address=Boston').then((response) => {
    response.json().then ((data) => {
        if(data.error){
            console.log(data.error);
        }else{
            console.log(data.forecast);
        }
    });
});

const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', () => {
    alert('Testing')
    console.log('testing!');
});