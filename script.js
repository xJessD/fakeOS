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

setInterval(time, 10000); // As we are not displaying the seconds, we can update every 10s as every min does not display in real time
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
  stopYoutube();
}

homeBtn.addEventListener("click", goHome);
dialerBtn.addEventListener("click", showDailer);
ytIcon.addEventListener("click", showYoutube); 


const form = document.getElementById("form");
const formQ = document.getElementById("query");
const google = "https://www.google.com/search?q=";

/**
 * Function for google search bar functionality. Currently opens in new tab, but ideally will be updated to open in a 'chrome app'
 */
const onSubmit = (event) => {
  event.preventDefault();
  const url = google + formQ.value;
  const win = window.open(url, '_blank');
  win.focus();
}

form.addEventListener('submit', onSubmit);

/**
 * Automatically stops Youtube Videos on exit of app by re-initialising video source. Would be best to pause video instead, but works for now.
 */
const stopYoutube = () => {
  const iframe = document.querySelector('iframe');
  const temp = iframe.src;
  iframe.src = temp;
}

const toggleActionBar = () => {
  actionBarSettings.classList.toggle('hidden');
}

const container = document.getElementById("container");
const actionBar = document.getElementById("container__actionBar");
const actionBarList = document.getElementById("container__actionBar__list");
const actionBarSettings = document.getElementById("container__actionBar__settings");
const volume = document.getElementById("settings_volume");

actionBarList.addEventListener("click", toggleActionBar);
actionBarSettings.addEventListener("click", () => {
  actionBarSettings.classList.remove('hidden');
});

container.addEventListener("click", () => {
  if (!actionBarSettings.classList.contains("hidden")) {
    //actionBarSettings.classList.add("hidden");
  }
});

volume.addEventListener("click", () => {
  let on = "./assets/ai-volume-on.svg";
  let muted = "./assets/ai-volume-muted.svg";

  if (volume.classList.contains("vol-on")) {
    volume.src = muted;
    volume.classList.remove("vol-on");
    volume.classList.add("muted");
  } else if (volume.classList.contains("muted")) {
    volume.src = on;
    volume.classList.remove("muted");
    volume.classList.add("vol-on");
  }
})

// actionBar.addEventListener("mouseover", () => { actionBarSettings.classList.remove('hidden');});
// document.addEventListener("click", () => {actionBarSettings.classList.add('hidden')});
