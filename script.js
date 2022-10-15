/**
 * Simple clock function that updates 
 */
const time = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }

  document.getElementById('clock').innerText =  `${hours}:${minutes}`;
}

setInterval(time, 30000); // As we are not displaying the seconds, we can update every 30s as every min does not display in real time
time();


const homeBtn = document.getElementById("navigation__home");
const dialerBtn = document.getElementById("dailerIcon");
const ytIcon = document.getElementById("ytIcon");

const homeScreen = document.querySelector(".display__home")

const dailerModal = document.getElementById("dailerModal");
const ytModal = document.getElementById("ytModal");

const goHome = () => {
  resetAll();
  homeScreen.classList.remove("hidden");
}

const showYoutube = () => { 
  resetAll()
  ytModal.classList.remove("hidden");
}

const showDailer = () => {
  resetAll()
  dailerModal.classList.remove("hidden");
}

const resetAll = () => {
  homeScreen.classList.add("hidden");
  dailerModal.classList.add("hidden");
  ytModal.classList.add("hidden");
}

homeBtn.addEventListener("click", goHome);
dialerBtn.addEventListener("click", showDailer);
ytIcon.addEventListener("click", showYoutube); 




const form = document.getElementById("form");
const formQ = document.getElementById("query");
const google = "https://www.google.com/search?q=";

const onSubmit = (event) => {
  event.preventDefault();
  const url = google + formQ.value;
  const win = window.open(url, '_blank');
  win.focus();
}

form.addEventListener('submit', onSubmit);