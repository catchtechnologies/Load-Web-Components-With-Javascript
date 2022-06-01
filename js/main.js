import Modal from "./modal.js";
import loadComponents from "./components.js";

document.addEventListener("DOMContentLoaded", () => {
  loadComponents().then(() => {
    start();
  });
});

function start() {
  try {
    /***  View Management ***/

    var startBtn = document.getElementById("start");
    var startModal = new Modal(document.getElementById("startModal"));
    var startProgressBar = document.getElementById("startProgress");
    var startView = document.getElementById("startView");
    var mainView = document.getElementById("mainView");
    var endBtn = document.getElementById("end");

    // Default to start view.
    startView.style.display = "flex";
    mainView.style.display = "none";

    startBtn.onpointerdown = () => {
      console.log("Starting System...");
      startModal.show();

      // Emulate startup progress. Update progess bar and close the modal when complete.
      var value = 0;
      updateStartProgressBar(value);

      // Update progress bar.
      var updateStartProgressBarInterval = setInterval(() => {
        value = value + 1;
        updateStartProgressBar(value);
      }, 5);

      // Stop updating progress bar after predefined interval.
      setTimeout(() => {
        clearInterval(updateStartProgressBarInterval);
        powerOnComplete();
      }, 2500);
    };

    function updateStartProgressBar(value) {
      startProgressBar.value = value;
    }

    function powerOnComplete() {
      startModal.hide();
      startView.style.display = "none";
      mainView.style.display = "flex";
    }

    endBtn.onpointerdown = () => {
      startView.style.display = "flex";
      mainView.style.display = "none";
    };

    /*** Time & Date ***/

    clock();
  } catch (e) {
    console.log(e);
  }
}

function clock() {
  document.getElementById("date-and-time").innerHTML = currentDateAndTime();
  setInterval(() => {
    document.getElementById("date-and-time").innerHTML = currentDateAndTime();
  }, 6000);
}

function currentDateAndTime() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return date + " " + time;
}
