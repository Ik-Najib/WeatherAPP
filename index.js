const Search = document.querySelector("Search");
const cityinput = document.querySelector("CityInput");
const app = document.querySelector("app");
const apikey = "32998debd987a19261fff14861a17cab"

Search.addEventListener("submit", event => {
    event.preventDefault();
    const city = cityinput.value;

    if (city){
        displayerror("hello")
    }else {
        displayerror("enter a valid city")
    }

});

async function getweatherdata(city) {
    
}

function displayWeatherInfo(){

}

function getweatherpic (id){

}

function displayerror(msg){

    const errordisplay = document.createElement("p");
    errordisplay.textContent = msg;
    errordisplay.classList.add("errordisplay");

    app.textContent = "hjklhjke";
    app.style.display = "flex"
    errordisplay.style.font = "58px";
    
    app.appendChild(errordisplay);
}