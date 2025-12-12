let submit = document.querySelector(".cityinput");
let city = document.getElementById("city")
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let desc = document.getElementById("desc");


function weatherdata (){
    let cityValue = submit.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=32998debd987a19261fff14861a17cab&units=metric`)
    .then(response => response.json())
    .then(data => {
        city.textContent = data.name;
        temp.textContent = data.main.temp + "°C";
        humidity.textContent = data.main.humidity+ "%";
        desc.textContent = data.weather[0].description;
    });
}

