// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  // TODO
  const dropDownMenu = document.getElementById("horn-select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");
  dropDownMenu.addEventListener("change", (event) => {
    image.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });
  const volumeImg = document.querySelectorAll("img")[1];
  const volumeSlider = document.getElementById("volume");
  volumeSlider.addEventListener("change", () => {
    if (volumeSlider.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volumeSlider.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (volumeSlider.value < 66) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  const playSound = document.querySelector("button");
  playSound.addEventListener("click", (event) => {
    audio.volume = parseFloat(volumeSlider.value / 100);
    audio.play();
    if (dropDownMenu.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });



}