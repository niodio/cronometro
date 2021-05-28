const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

//Recpera os dados de localstorage que havia armazenado na index.html
pegarData = localStorage.getItem("aux");
 function countDown() {
     //Cria obj data
    const newDate = new Date(pegarData);
    //Pega data atual
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) % 60; 

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

//Acrescenta o digito zero ates do time quando o mesmo tiver somente 1 digito
function formatTime(time) {
    return time < 10 ? '0'+time : time;
}

//Chama a fnção
countDown();

setInterval(countDown, 1000);

//Limpa local storage
localStorage.clear();