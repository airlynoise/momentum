const mainKr = [
    {main: "Thunderstorm", kr: "천둥번개"},
    {main: "Drizzle", kr: "이슬비"},
    {main: "Rain", kr: "비"},
    {main: "Snow", kr: "눈"},
    {main: "Mist", kr: "안개"},
    {main: "Smoke", kr: "안개"},
    {main: "Haze", kr: "실안개"},
    {main: "Dust", kr: "먼지"},
    {main: "Fog", kr: "안개"},
    {main: "Sand", kr: "모래"},
    // {main: "Dust", kr: "안개"},
    {main: "Ash", kr: "흐림"},
    {main: "Squall", kr: "돌풍"},
    {main: "Tornado", kr: "폭풍"},
    {main: "Clear", kr: "맑음"},
    {main: "Clouds", kr: "구름"}
];

const API_KEY = "18775ef58458fc562804efa5359edb10";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    function roundToOne(num) {
        return + (Math.round(num + "e+1") + "e-1");
    };



    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather div span:nth-of-type(1)");
        const humid = document.querySelector("#weather div span:nth-of-type(2)");
        const temp = document.querySelector("#weather > span:nth-of-type(1)");
        const weather = document.querySelector("#weather > p");

        function isMain(el) {
            if(el.main === data.weather[0].main) {
                return true;
            }
        };
        const wm = mainKr.find(isMain);
        weather.innerHTML = `${wm.kr}<span>${data.weather[0].description}</span>`;
        temp.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/><b>${roundToOne(data.main.temp)}℃</b>`;
        humid.innerHTML = `<img src="img/shumidity.png"/>${roundToOne(data.main.humidity)}%`;
        city.innerText = `${data.name}`;
    });

}
function onGeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);