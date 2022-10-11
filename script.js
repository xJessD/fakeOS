/**
 * Simple clock function that updates 
 */
const time = () => {
  let today = new Date();

  document.getElementById('clock').innerText =  `${today.getHours()}:${today.getMinutes()}`;
}

setInterval(time, 60000); // As we do not display the seconds, we can update every minute instead
time();