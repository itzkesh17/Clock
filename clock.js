let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
  let currentTime = new Date();

  let hr = (currentTime.getHours()<10? "0":"") + currentTime.getHours();

  let min = (currentTime.getMinutes()<10? "0":"") + currentTime.getMinutes();

  let sec = (currentTime.getSeconds()<10? "0":"") + currentTime.getSeconds();

  hour.innerHTML = hr;
  minute.innerHTML = min;
  seconds.innerHTML = sec;
}, 1000);
