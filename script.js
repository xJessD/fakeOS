/**
 * Simple clock function that updates 
 */
const time = () => {
  let today = new Date();

  document.getElementById('clock').innerText =  `${today.getHours()}:${today.getMinutes()}`;
}

setInterval(time, 60000); // As we are not displaying the seconds, we can update every minute instead of every second.
time();