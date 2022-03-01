const API_KEY = "0b450f3c9fe6ae0ab1ebcd9d8252458b";


function onGeoOk(position){
    const lat = position.coords.latitude; //지금위치의 위도
    const long = position.coords.longitude; //지금위치의 경도
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{ 
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("날씨를 불러올 수 없습니다. 위치를 확인해주세요");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//내 위치를 받는 것