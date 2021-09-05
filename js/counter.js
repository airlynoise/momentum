const clockTitle1 = document.querySelector(".dday-box01 .remain-time");

const xMas = new Date(`${new Date().getFullYear()}-12-25`);

function getRemain1() {
    const now = new Date();

    const difference = new Date(xMas - now);

    const secondsInMs = Math.floor(difference / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hoursInMs = Math.floor(minutesInMs / 60);
    const days = Math.floor(hoursInMs / 24);
    
    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    
    clockTitle1.innerHTML = `${days}<b>일</b>`;
}

getRemain1();
setInterval(getRemain1, 1000);

/* ----------------------------------------------------------- */

const clockTitle2 = document.querySelector(".dday-box02 .remain-time");

const birthDay = new Date(`${new Date().getFullYear()+1}-05-07`);

function getRemain2() {
    const now = new Date();

    const difference = new Date(birthDay - now);

    const secondsInMs = Math.floor(difference / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hoursInMs = Math.floor(minutesInMs / 60);
    const days = Math.floor(hoursInMs / 24);
    
    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    
    clockTitle2.innerHTML = `${days}<b>일</b>`;
}

getRemain2();
setInterval(getRemain2, 1000);