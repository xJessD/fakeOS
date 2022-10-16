import * as clock from "./modules/clock.js";
import * as youtube from "./modules/youtube.js";

clock.time();


// Bottom Navigation & Dock Buttons
const backBtn = document.getElementById("navigation__back");
const homeBtn = document.getElementById("navigation__home");
const dialerBtn = document.getElementById("dailerIcon");
const messagesIcon = document.getElementById("messagesIcon");
const ytIcon = document.getElementById("ytIcon");

// Windows / Modals / Apps
const homeScreen = document.querySelector(".display__home")

const dailerModal = document.getElementById("dailerModal");
const messageModal = document.getElementById("messageModal")
const ytModal = document.getElementById("ytModal");

// Search Bar Forms
const form = document.getElementById("form");
const formQ = document.getElementById("query");
const google = "https://www.google.com/search?q=";

// Curent and previous window
let prevWindow = homeScreen;
let curWindow = homeScreen;



const container = document.getElementById("container");
const actionBar = document.getElementById("container__actionBar");
const actionBarList = document.getElementById("container__actionBar__list");
const volAB = document.getElementById("volume");
const airplaneAB = document.getElementById("airplane");
const actionBarSettings = document.getElementById("container__actionBar__settings");
const volumeSettings = document.getElementById("settings_volume");
const airplaneSettings = document.getElementById("settings_airplane");


// Functions
const goBack = () => {
  actionBarSettings.classList.add('hidden');
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
  actionBarSettings.classList.add('hidden');
  prevWindow = curWindow;
  curWindow = ytModal;
}

const showDailer = () => {
  resetAll()
  dailerModal.classList.remove("hidden");
  prevWindow = curWindow;
  curWindow = dailerModal;
}

const showMessages = () => {
  resetAll()
  messageModal.classList.remove("hidden");
  prevWindow = curWindow;
  curWindow = messageModal;
}

const resetAll = () => {
  homeScreen.classList.add("hidden");
  dailerModal.classList.add("hidden");
  messageModal.classList.add("hidden");
  ytModal.classList.add("hidden");
  actionBarSettings.classList.add("hidden");
  youtube.stopYoutube();
  prevWindow = curWindow;
  curWindow = homeScreen;
}

/**
 * Toggles quick settings on click
 */
 const toggleActionBar = () => {
  actionBarSettings.classList.toggle('hidden');
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

/**
 * Toggles vol settings off and displays muted in actionbar
 */
 const toggleVol = () => {
  let on = "./assets/ai-volume-on.svg";
  let muted = "./assets/ai-volume-muted.svg";

  if (volumeSettings.classList.contains("on")) {
    volumeSettings.src = muted;
    volumeSettings.classList.remove("on");
    volumeSettings.classList.add("off");
    volAB.classList.remove("off");
    volAB.classList.add("on");

    
  } else if (volumeSettings.classList.contains("off")) {
    volumeSettings.src = on;
    volumeSettings.classList.remove("off");
    volumeSettings.classList.add("on");
    volAB.classList.remove("on");
    volAB.classList.add("off");
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
    airplaneAB.classList.remove("off");
    airplaneAB.classList.add("on");

  }
  else if (airplaneSettings.classList.contains("on")) {
    airplaneSettings.src = off;
    airplaneSettings.classList.remove("on");
    airplaneSettings.classList.add("off");
    airplaneAB.classList.remove("on");
    airplaneAB.classList.add("off");

  }; 
}

// Event listeners
form.addEventListener('submit', onSubmit);

backBtn.addEventListener("click", goBack);
homeBtn.addEventListener("click", goHome);
dialerBtn.addEventListener("click", showDailer);
messagesIcon.addEventListener("click", showMessages);
ytIcon.addEventListener("click", showYoutube); 

actionBarList.addEventListener("click", toggleActionBar);

actionBarSettings.addEventListener("click", () => {
  actionBarSettings.classList.remove('hidden');
});

container.addEventListener("click", () => {
  if (!actionBarSettings.classList.contains("hidden")) {
    //actionBarSettings.classList.add("hidden");
  }
});


volumeSettings.addEventListener("click", toggleVol);
airplaneSettings.addEventListener("click", toggleAirplane);


// Attempting to do mouseover, but currently not working as intended
// actionBar.addEventListener("mouseover", () => { actionBarSettings.classList.remove('hidden');});
// document.addEventListener("click", () => {actionBarSettings.classList.add('hidden')});
