const dataKeys = document.querySelector(".keys").querySelectorAll("[data-key]");
const audio = document.querySelectorAll("audio");

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < dataKeys.length; i++) {
    if (e.code == dataKeys[i].dataset.key) {
      audio[i].currentTime = 0; // be able to play faster
      function playAudio() {
        audio[i].play();
      }
      playAudio();
      return dataKeys[i].classList.add("playing");
    }
  }
});
document.addEventListener("keyup", (e) => {
  for (let i = 0; i < dataKeys.length; i++) {
    dataKeys[i].classList.remove("playing");
  }
});
