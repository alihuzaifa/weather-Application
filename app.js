// function
const enterBtn = document.querySelector(".enter")
// Variables
let inputData = document.querySelector(".search-box");
const tempreature = document.querySelector(".tempreature")
const country = document.querySelector(".country");
const city = document.querySelector(".city");
const weather_condition = document.querySelector(".weather-condition");
const min = document.querySelector(".min");
const humidity = document.querySelector(".humidity");
const max = document.querySelector(".max");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const visibility = document.querySelector(".visible");
let showData = () => {
    event.preventDefault()
    inputData = inputData.value.toLowerCase()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=509fbec997d1d77a5c3314068a4f1d9b&q=${inputData}`)
        .then(function (response) {
            console.log(response.data)
            let data = response.data;
            tempreature.innerHTML = `${data.main.temp} °C`;
            country.innerHTML = data.sys.country;
            city.innerHTML = data.name;
            weather_condition.innerHTML = data.weather[0].main;
            min.innerHTML = data.main.temp_min;
            max.innerHTML = data.main.temp_max;
            humidity.innerHTML = data.main.humidity;
            wind.innerHTML = data.wind.speed;
            pressure.innerHTML = `${data.main.pressure}`;
            visibility.innerHTML = data.visibility;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
enterBtn.addEventListener("click",showData)