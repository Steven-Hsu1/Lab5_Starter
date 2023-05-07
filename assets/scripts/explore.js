// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const voiceSelect = document.getElementById("voice-select");
const playbutton = document.querySelector("button");
const textbox = document.getElementById("text-to-speak");
const img = document.querySelector("img");
function init() {
  // TODO
  window.onload = (event) => {
    var voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  playbutton.addEventListener("click", (event) => {
    var voices = synth.getVoices();

    const utterThis = new SpeechSynthesisUtterance(textbox.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    // utterThis.pitch = pitch.value;
    // utterThis.rate = rate.value;

    synth.speak(utterThis);
    // utterThis.onpause = (event) => {
    //   const char = event.utterance.text.charAt(event.charIndex);
    //   console.log(
    //     `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`
    //   );
    // }
    img.src = "assets/images/smiling-open.png"
    utterThis.addEventListener("end", (event) => {
      img.src = "assets/images/smiling.png"
    })
  });
}