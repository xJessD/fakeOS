import * as clock from "./modules/clock.js";
import * as youtube from "./modules/youtube.js";

clock.time();


// Bottom Navigation & Dock Buttons
const backBtn = document.getElementById("navigation__back");
const homeBtn = document.getElementById("navigation__home");
const dialerBtn = document.getElementById("dailerIcon");
const ytIcon = document.getElementById("ytIcon");

// Windows / Modals / Apps
const homeScreen = document.querySelector(".display__home")

const dailerModal = document.getElementById("dailerModal");
const ytModal = document.getElementById("ytModal");

// Search Bar Forms
const form = document.getElementById("form");
const formQ = document.getElementById("query");
const google = "https://www.google.com/search?q=";

// Curent and previous window
let prevWindow;
let curWindow = homeScreen;

// Functions
const goBack = () => {
  let temp = curWindow;

  curWindow.classList.add("hidden");
  prevWindow.classList.remove("hidden");

  curWindow = prevWindow;
  prevWindow = temp;
}

const goHome = () => {
  resetAll();
  homeScreen.classList.remove("hidden");
}

const showYoutube = () => { 
  resetAll()
  ytModal.classList.remove("hidden");
  prevWindow = curWindow;
  curWindow = ytModal;
}

const showDailer = () => {
  resetAll()
  dailerModal.classList.remove("hidden");
  prevWindow = curWindow;
  curWindow = dailerModal;
}

const resetAll = () => {
  homeScreen.classList.add("hidden");
  dailerModal.classList.add("hidden");
  ytModal.classList.add("hidden");
  youtube.stopYoutube();
}

// Would like to move to new file, but it breaks functionality at the moment
/**
 * Function for google search bar functionality. Currently opens in new tab, but ideally will be updated to open in a 'chrome app'
 */
 const onSubmit = (event) => {
  event.preventDefault();
  const url = google + formQ.value;
  const win = window.open(url, '_blank');
  win.focus();
}


// Event listeners
form.addEventListener('submit', onSubmit);

backBtn.addEventListener("click", goBack);
homeBtn.addEventListener("click", goHome);
dialerBtn.addEventListener("click", showDailer);
ytIcon.addEventListener("click", showYoutube); 


/**
 * Toggles quick settings on click
 */
const toggleActionBar = () => {
  actionBarSettings.classList.toggle('hidden');
}

const container = document.getElementById("container");
const actionBar = document.getElementById("container__actionBar");
const actionBarList = document.getElementById("container__actionBar__list");
const volAB = document.getElementById("volume");
const airplaneAB = document.getElementById("airplane");
const actionBarSettings = document.getElementById("container__actionBar__settings");
const volumeSettings = document.getElementById("settings_volume");
const airplaneSettings = document.getElementById("settings_airplane");

actionBarList.addEventListener("click", toggleActionBar);
actionBarSettings.addEventListener("click", () => {
  actionBarSettings.classList.remove('hidden');
});

container.addEventListener("click", () => {
  if (!actionBarSettings.classList.contains("hidden")) {
    //actionBarSettings.classList.add("hidden");
  }
});

/**
 * Toggles vol settings off and displays muted in actionbar
 */
const toggleVol = () => {
  let on = "./assets/ai-volume-on.svg";
  let muted = "./assets/ai-volume-muted.svg";

  if (volumeSettings.classList.contains("vol-on")) {
    volumeSettings.src = muted;
    volumeSettings.classList.remove("vol-on");
    volumeSettings.classList.add("muted");
    volAB.innerHTML = `<img src=${muted}>`;
    
  } else if (volumeSettings.classList.contains("muted")) {
    volumeSettings.src = on;
    volumeSettings.classList.remove("muted");
    volumeSettings.classList.add("vol-on");
    volAB.innerHTML = "";
  }
}

/**
 * Toggles airplane mode settings off and displays airplane icon in actionbar
 */
const toggleAirplane = () => {
  // add in wifi + mobile data off

  let on = "./assets/ai-airplane-mode-on.svg";
  let off = "./assets/ai-airplane-mode-off.svg";

  if (airplaneSettings.classList.contains("off")) {
    airplaneSettings.src = on;
    airplaneSettings.classList.remove("off");
    airplaneSettings.classList.add("on");
    airplaneAB.innerHTML = `<img src=${on}>`;

  }
  else if (airplaneSettings.classList.contains("on")) {
    airplaneSettings.src = off;
    airplaneSettings.classList.remove("on");
    airplaneSettings.classList.add("off");
    airplaneAB.innerHTML = "";

  }; 
}

volumeSettings.addEventListener("click", toggleVol);
airplaneSettings.addEventListener("click", toggleAirplane);


// Attempting to do mouseover, but currently not working as intended
// actionBar.addEventListener("mouseover", () => { actionBarSettings.classList.remove('hidden');});
// document.addEventListener("click", () => {actionBarSettings.classList.add('hidden')});
