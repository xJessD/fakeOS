/**
 * Simple clock function that updates 
 */
 export const time = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }

  document.getElementById('clock').innerText =  `${hours}:${minutes}`;
}

setInterval(time, 10000); // As we are not displaying the seconds, we can update every 10s as every min does not display in real time
