/**
 * Simple clock function that updates 
 */
const time = () => {
  let today = new Date();
  let minutes = today.getMinutes();

  document.getElementById('clock').innerText =  `${today.getHours()}:${minutes}`;
}

setInterval(time, 30000); // As we are not displaying the seconds, we can update every 30s as every min does not display in real time
time();


const homeBtn = document.getElementById("navigation__home");
const ytIcon = document.getElementById("ytIcon");

const homeScreen = document.querySelector(".display__home")
const ytModal = document.getElementById("ytModal");

const goHome = () => {
  ytModal.classList.add("hidden");
  homeScreen.classList.remove("hidden");
}

const showModal = () => { 
  ytModal.classList.remove("hidden");
  homeScreen.classList.add("hidden");
}

homeBtn.addEventListener("click", goHome);
ytIcon.addEventListener("click", showModal); 