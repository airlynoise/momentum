// 시계
const clock = document.querySelector(".clock");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
const dal = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = ` ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

// 년도 월 일 요일
const getTime = document.querySelector("#date");
function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const nalza = date.getDate();
    const day = date.getDay();
    getTime.innerText = `${days[day]}, ${nalza} ${dal[month]} ${year} `;
}
getDate();