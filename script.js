let a;
let date;
let time;

setInterval(() => {
  a = new Date();
  hours = a.getHours();
  if (hours < 12) {
    time = hours + ":" + a.getMinutes() + ":" + a.getSeconds() + "AM";
    document.getElementById("clock").innerHTML = time;
  } else {
    time = hours + ":" + a.getMinutes() + ":" + a.getSeconds() + ":" + "PM";
    document.getElementById("clock").innerHTML = time;
  }
}, 1000);
