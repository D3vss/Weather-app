//the spinner before data loads
let spinner = document.getElementById('spinner');

//the search button
let searchButton = document.getElementById('search');

//the text box
let input = document.getElementById('query');

//the div containing weather info
let infoContainer = document.getElementById('info-container');

//the endpoint
let endpoint;

//error msg
let err = document.getElementById('err-msg');

searchButton.addEventListener('click', () => {
    let query = input.value;
    if (!query) {
        alert('Please enter a city')
    } else {
        input.value = '';

        endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7851dcb348444eabd1dfea3ea021b989`;
        spinner.style.display = 'block';
        infoContainer.classList.add("weather-displayed");
        displayWeather();
    }
})


//Equivalent (sort of) of the getJSON() method in jquery
function getJSONFile(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    let data;
    return new Promise((resolve, reject) => {
        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                data = JSON.parse(this.response);
                spinner.style.display = 'none';
                err.style.display = 'none'

                resolve(data);
            } else {
                spinner.style.display = 'none';
                err.style.display = 'block'
            }
        }
        request.send();
    })


}

async function displayWeather() {
    let JSONfile = await getJSONFile(endpoint);
    let info = {
        "icon": JSONfile.weather[0].icon,
        "temp": JSONfile.main.temp,
        "base": JSONfile.base,
        "city": JSONfile.name,
        "desc": JSONfile.weather[0].description
    };

    let city = document.getElementById('err');
    let icon = document.getElementById('iconerr');
    let temp = document.getElementById('temp');
    let desc = document.getElementById('desc');
    let iconid = info['icon'];
    city.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i> ' + info['city'];
    desc.innerHTML = '<i class="fa fa-question-circle" aria-hidden="true"></i> ' + info['desc'].charAt(0).toUpperCase() + info['desc'].slice(1);
    icon.setAttribute('src', `https://openweathermap.org/img/w/${iconid}.png`)
    temp.innerHTML = '<i class="fa fa-thermometer-empty" aria-hidden="true"></i> ' + info['temp'] + "°C"

    console.log('weather displayed successfully!')

}