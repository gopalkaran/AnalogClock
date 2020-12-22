const HOURHAND = document.querySelector("[data-hour-hand]");
const MINUTEHAND = document.querySelector("[data-minute-hand]");
const SECONDHAND = document.querySelector("[data-second-hand]");

setInterval(setClock,1000);  

function setClock(){
  var d = new Date();
  var htime= d.getHours();
  var mtime= d.getMinutes();
  var stime= d.getSeconds();

  var hrotation = 30*htime + mtime/2;
  var mrotation = 6*mtime;
  var srotation = 6*stime;

  HOURHAND.style.transform = `rotate(${hrotation}deg)`;
  MINUTEHAND.style.transform = `rotate(${mrotation}deg)`;
  SECONDHAND.style.transform = `rotate(${srotation}deg)`;
}
